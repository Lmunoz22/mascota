import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MascotaApi from "../api/apiMascotas";
import ComentariosList from "../components/comentarios/ComentariosList";

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

    useEffect(() => {
        fetchComentarios();
    }, []);


    return (
        <>
            
            <ComentariosList lista={comentariosList}/>
        </>
    );
}

export default ComentariosPage;