import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MascotaApi from "../api/apiMascotas";
import ComentariosList from "../components/comentarios/ComentariosList";
import ComentariosForm from "../components/comentarios/ComentariosForm";

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


const notyf = new Notyf({
    duration: 3000,
    position: { x: 'center', y: 'top' },
    dismissible: true
});


function ComentariosPage() {

    const { id } = useParams();
    const [error, setError] = useState("");
    const [comentariosList, setComentariosList] = useState([]);

    const fetchComentarios = async () => {
        try {

            const response = await MascotaApi.get("comentarios/");
            const comentariosMascota = response.data.filter(
                (comentario) => comentario.mascota == id);
            setComentariosList(comentariosMascota);

        } catch (error) {

            if (error.response?.status === 404) {
                setError("404 - No se encontraron comentarios.");
            }
            else {
                setError("Ocurrió un error al cargar los comentarios.");
            }

            console.log(error.response?.data);
        }
    };

    const fetchMascota = async () => {
        try {

            await MascotaApi.get(`mascotas/${id}/`);

            setError("");

        } catch (error) {

            if (error.response?.status === 404) {
                setError("404 - Mascota no encontrada.");
            } else {
                setError("Ocurrió un error al cargar la mascota.");
            }

            console.log(error.response?.data);
        }
    };
    const addComentario = async (comentario) => {
        try {

            await MascotaApi.post("comentarios/", comentario);

        } catch (error) {

            if (error.response?.status === 400) {
                setError("Revisa los datos ingresados.");
            }
            else if (error.response?.status === 404) {
                setError("No se encontró la mascota.");
            }
            else {
                setError("No fue posible agregar el comentario.");
            }

            console.log(error.response?.data)
        } finally {
            fetchComentarios();
        }
    };
    const deleteComentario = async (idComentario) => {
        try {
            await MascotaApi.delete(`comentarios/${idComentario}/`);
            notyf.success("Se Elimino Correctamente");
        } catch (error) {
            if (error.response?.status === 404) {
                setError("El comentario no existe.");
            }
            else {
                setError("No fue posible eliminar el comentario.");
            }

            console.log(error.response?.data);


        } finally {
            fetchComentarios();
        }
    };

    useEffect(() => {
        fetchComentarios();
        fetchMascota();
    }, []);


    return (
        <>
            

            {error ? (
                <p className="mensaje-error">{error}</p>
            ) : (
                <>
                    <ComentariosForm
                        mascotaId={id}
                        onAdd={addComentario}
                    />

                    <ComentariosList
                        lista={comentariosList}
                        onDelete={deleteComentario}
                    />
                </>
            )}
        </>
    );
}

export default ComentariosPage;