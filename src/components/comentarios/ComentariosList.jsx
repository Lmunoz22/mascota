function ComentariosList({ lista, onDelete }) {

    return (
        <div className="contenedor-comentarios">

            <h2 className="titulo-comentarios">Comentarios</h2>

            {lista.map((comentario) => (
                <div className="card-comentario" key={comentario.id}>

                    <h3>{comentario.autor}</h3>

                    <p>{comentario.contenido}</p>

                    <button
                        className="btn-eliminar-comentario"
                        onClick={() => onDelete(comentario.id)}
                    >
                        Eliminar
                    </button>

                </div>
            ))}

        </div>
    );
}

export default ComentariosList;