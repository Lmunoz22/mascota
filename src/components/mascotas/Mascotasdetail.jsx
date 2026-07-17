import { useParams } from "react-router-dom";
import MascotaApi from "../../api/apiMascotas";
import { useEffect, useState } from "react";
import MascotasEdit from "./MascotasEdit";

function MascotasDetail() {

    const { id } = useParams();

    console.log(id);
    const [fetchError, setFetchError] = useState(false);
    const [mascota, setMascota] = useState(null);
    const [editando, setEditando] = useState(false);
    const [editar, setEditar] = useState(false);

    const fetchMascotaDetail = async () => {

        try {

            const response = await MascotaApi.get(`mascotas/${id}/`);
            console.log(response.data)
            setMascota(response.data);

        } catch (error) {
            console.log(error);
            setFetchError(true);
        }



    }

    useEffect(() => {
        fetchMascotaDetail()
    }, []);
    async function marcarComoAdoptada(id) {
        try {
            const response = await MascotaApi.patch(`/mascotas/${id}/`, { estado: 'adoptada' });
            await fetchMascotaDetail();
        } catch (err) {
            console.log(err.response.data);
        }
    }


    return (
        <div className="detalle-mascota">
            {fetchError ? (
                <p>404 - Mascota no encontrada</p>
            ) : (
                <>
                    <h2>{mascota?.nombre}</h2>

                    <img className="detalle-imagen" src={mascota?.imagen} alt={mascota?.nombre} />

                    <p><strong>Edad:</strong> {mascota?.edad}</p>
                    <p><strong>Raza</strong>: {mascota?.raza}</p>
                    <p><strong>Descripción:</strong> {mascota?.descripcion}</p>
                    <p><strong>estado:</strong> {mascota?.estado}</p>

                    <div className="detalle-botones">
                        <button onClick={() => marcarComoAdoptada(id)}>
                            Marcar como adoptada
                        </button>
                        <button onClick={() => setEditar(true)}>
                            Editar
                        </button>
                    </div>
                    {editar && (
                        <MascotasEdit
                            mascota={mascota}
                            onFinish={() => {
                                fetchMascotaDetail();
                                setEditar(false);
                            }}
                        />
                    )}




                </>
            )}
        </div>
    );
}


export default MascotasDetail;