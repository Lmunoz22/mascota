import { useState } from "react";

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 3000,
    position: { x: 'center', y: 'top' },
    dismissible: true
});

function ComentariosForm({ mascotaId, onAdd }) {

    const [autor, setAutor] = useState("");
    const [contenido, setContenido] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const comentario = {
            mascota: mascotaId,
            autor: autor,
            contenido: contenido
        };
        if (!autor.trim()) {
            notyf.error("El autor de la mascota es obligatorio.");
            return;
        }
        if (!contenido.trim()) {
            notyf.error("El comentario de la mascota es obligatorio.");
            return;
        }
        onAdd(comentario);
        notyf.success("se agrego correctamente el comentario");

        setAutor("");
        setContenido("");
    };

    return (
    
                <form className="formulario-mascota" onSubmit={handleSubmit}>

                    <label>Autor</label>
                    <input
                        type="text"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                    />

                    <label>Comentario</label>
                    <textarea
                        value={contenido}
                        onChange={(e) => setContenido(e.target.value)}
                    />

                    <button type="submit">
                        Agregar comentario
                    </button>

                </form>
            
    )
    
}

export default ComentariosForm;