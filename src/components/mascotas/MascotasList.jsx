

import { Link } from "react-router-dom";
import MascotasForm from "./MascotasForm";




function MascotasList({ lista, onAdd, onDelete }) {



    return (
        <>
            <MascotasForm onAdd={onAdd} />
            <h2 className="listapet">Lista Mascotas</h2>
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
                                <div className="acciones">
                                    <Link className="btn-ver"to={`/mascotas/${m.id}`}>
                                        Ver Mascota
                                    </Link>
                                    <button className="btn-eliminar" onClick={() => onDelete(m.id)}>
                                        Eliminar
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>


        </>
    );

};

export default MascotasList;