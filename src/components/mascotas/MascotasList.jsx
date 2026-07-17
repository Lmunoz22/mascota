

import { Link } from "react-router-dom";
import MascotasForm from "./MascotasForm";
import MascotasDetail from "./Mascotasdetail";

function MascotasList({ lista, onAdd, onPut}) {



    return (
        <>
            <h2>Lista Mascotas</h2>
            <MascotasDetail onPut={onPut}/>
            <MascotasForm onAdd={onAdd} />
            <div className="contenedor-cards">
                {
                    lista.map((m) => (
                        <div className="card-mascota" key={m.id}>

                            <img src={m.imagen} alt={m.nombre} />

                            <div className="contenido-card">

                                <h3>{m.nombre}</h3>

                                <p>{m.descripcion}</p>

                                <p>{m.raza}</p>

                                <p>{m.estado}</p>

                                <Link to={`/mascotas/${m.id}`}>
                                    Ver Mascota
                                </Link>

                            </div>

                        </div>
                    ))
                }
            </div>


        </>
    );

};

export default MascotasList;