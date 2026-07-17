import MascotaApi from "../api/apiMascotas";
import MascotasList from "../components/mascotas/MascotasList";
import { useEffect, useState } from "react";


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

    


    useEffect(() => {
        fetchMascotas();


    }, []);
    return (
        <>
            <h1>Pagina Mascotas</h1>

            <MascotasList lista={mascotasList} onAdd={addMascotas}  />
        </>
    )

}

export default MascotasPage;