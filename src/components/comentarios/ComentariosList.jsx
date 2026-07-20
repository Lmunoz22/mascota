function ComentariosList({ lista }) {

    return (
        <>
            <h2>Comentarios</h2>

            {
                lista.map((e) => (
                    <div key={e.id}>

                        <h4>{e.autor}</h4>

                        <p>{e.contenido}</p>

                    </div>
                ))
            }

        </>
    );
}

export default ComentariosList;