import MascotaApi from "../api/apiMascotas";
import MascotasList from "../components/mascotas/MascotasList";
import { useEffect, useState } from "react";

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 3000,
    position: { x: 'center', y: 'top' },
    dismissible: true
});


function MascotasPage() {
    const [error, setError] = useState("");
    const [mascotasList, setMascotasList] = useState([]);
    const fetchMascotas = async () => {
        try {
            const response = await MascotaApi.get('mascotas/');
            console.log(response.data);
            setMascotasList(response.data);
        } catch (error) {
            console.log(error);
            if (error.response?.status === 404) {
                setError("404 - No se encontraron comentarios.");
            }
            else {
                setError("Ocurrió un error al cargar los comentarios.");
            }

            console.log(error.response?.data);
        };


    };

    const addMascotas = async (mascota) => {
        try {
            await MascotaApi.post('mascotas/', mascota)
            notyf.success('se ha agregado correctamente!');
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

        } finally { fetchMascotas(); }


    }
    const deleteMascota = async (id) => {
        try {
            await MascotaApi.delete(`mascotas/${id}/`);
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
            fetchMascotas();
        }
    };




    useEffect(() => {
        fetchMascotas();


    }, []);
    return (
        <>
            <h1>Pagina Mascotas</h1>
            {error && <p className="mensaje-error">{error}</p>}
            <MascotasList lista={mascotasList} onAdd={addMascotas} onDelete={deleteMascota} />
        </>
    )

}

export default MascotasPage;