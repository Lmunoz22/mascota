import { useEffect, useState } from "react";
import MascotaApi from "../../api/apiMascotas";
import { Link} from "react-router-dom";
import MascotaForm from "./MascotasForm";
function MascotasList() {

    const [mascotasList, setMascotasList] = useState([]);
    const fetchMascotas = async () => {
        try {
            const response = await MascotaApi.get('mascotas/');
            console.log(response.data.results);
            setMascotasList(response.data.results);
        } catch (error) {
            console.log(error);
        };


    };

    useEffect(() => {
        fetchMascotas();


    }, []);

    return (
        <>
            <h2>Lista Mascotas</h2>

            <Link to={"formulario/"} >Registrar Mascotas</Link>

            {
                mascotasList.map(m =>
                (
                    <div key={m.id}>
                        <h3>{m.nombre}</h3>
                        <img src={m.imagen}/>
                    </div>
                )
                )
            }
            


        </>
    );

};

export default MascotasList;