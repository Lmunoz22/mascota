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

    const [mascotasList, setMascotasList] = useState([]);
    const fetchMascotas = async () => {
        try {
            const response = await MascotaApi.get('mascotas/');
            console.log(response.data);
            setMascotasList(response.data);
        } catch (error) {
            console.log(error);
        };


    };

    const addMascotas = async (mascota) => {
        try {
            const response = await MascotaApi.post('mascotas/', mascota)

        } catch (error) {
            console.log(error)

        } finally { fetchMascotas(); }


    }
    const deleteMascota = async (id) => {
        try {
            await MascotaApi.delete(`mascotas/${id}/`);
            notyf.success("Se Elimino Correctamente");
        } catch (error) {
            console.log(error);
            
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

            <MascotasList lista={mascotasList} onAdd={addMascotas} onDelete={deleteMascota}/>
        </>
    )

}

export default MascotasPage;