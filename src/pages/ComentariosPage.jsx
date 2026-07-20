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

    const [comentariosList, setComentariosList] = useState([]);

    const fetchComentarios = async () => {
        try {

            const response = await MascotaApi.get("comentarios/");
            const comentariosMascota = response.data.filter(
                (comentario) => comentario.mascota == id);
            setComentariosList(comentariosMascota);

        } catch (error) {
            console.log(error);
        }
    };
    const addComentario = async (comentario) => {
        try {

            const response = await MascotaApi.post("comentarios/", comentario);

        } catch (error) {
            console.log(error);
            notyf.error("No se pudo agregar la Mascota. Inténtalo de nuevo.");
        } finally {
            fetchComentarios();
        }
    };
    const deleteComentario = async (idComentario) => {
        try {

            const response = await MascotaApi.delete(`comentarios/${idComentario}/`);
            notyf.success("Se Elimino Correctamente");
        } catch (error) {
            console.log(error);

        } finally {
            fetchComentarios();
        }
    };

    useEffect(() => {
        fetchComentarios();
    }, []);


    return (
        <>

            <ComentariosForm mascotaId={id} onAdd={addComentario} />
            <ComentariosList lista={comentariosList} onDelete={deleteComentario}
            />
        </>
    );
}

export default ComentariosPage;