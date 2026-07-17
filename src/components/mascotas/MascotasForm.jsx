import { useEffect, useState } from "react";
import MascotaApi from "../../api/apiMascotas";



function MascotasForm({ onAdd }) {



    const [estados, setEstados] = useState([]);
    const [tipoMascota, setTipoMascota] = useState([]);
    const [sexo, setSexo] = useState([]);
    const [tamano, setTamano] = useState([]);

    const [tamanoSeleccionado, setTamanoSeleccionado] = useState("");
    const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");
    const [sexoSeleccionado, setSexoSeleccionado] = useState("");

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState(null);
    const [edad, setEdad] = useState("");
    const [raza, setRaza] = useState("");
    const [descripcion, setDescripcion] = useState("");


    const fetchChoices = async () => {

        try {
            const response = await MascotaApi.get("choices/");
            console.log(response.data.estado);
            setEstados(response.data.estado);
            setTipoMascota(response.data.tipo_animal)
            setSexo(response.data.sexo)
            setTamano(response.data.tamano)


        } catch (error) { console.log(error) }

    }



    useEffect(() => {
        fetchChoices();

    }, [])





    const handleSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("edad", edad);
        formData.append("raza", raza);
        formData.append("estado", estadoSeleccionado);
        formData.append("tipo_animal", tipoSeleccionado);
        formData.append("sexo", sexoSeleccionado);
        formData.append("tamano", tamanoSeleccionado);
        formData.append("imagen", imagen);

        onAdd(formData);

    }

    return (
        <form className="formulario-mascota" onSubmit={e => handleSubmit(e)} encType="multipart/form-data">

            <div className="forms">
                <label>Nombre:
                    <input onChange={e => setNombre(e.target.value)} value={nombre} type="text" />
                </label>
                <label>Edad:
                    <input onChange={e => setEdad(e.target.value)} value={edad} type="number" />
                </label>
                <label>raza:
                    <input onChange={e => setRaza(e.target.value)} value={raza} type="text" />
                </label>
                <label>Descripcion:
                    <textarea onChange={e => setDescripcion(e.target.value)} value={descripcion}></textarea>
                </label>
                <label >
                    <select value={estadoSeleccionado} onChange={(e) => setEstadoSeleccionado(e.target.value)} >

                        {
                            estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                        }
                    </select>
                </label>
                <label>
                    <select value={tipoSeleccionado} onChange={(e) => setTipoSeleccionado(e.target.value)}>

                        {
                            tipoMascota.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                        }

                    </select>
                </label>
                <label>
                    <select value={sexoSeleccionado} onChange={(e) => setSexoSeleccionado(e.target.value)}>

                        {
                            sexo.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                        }

                    </select>
                </label>
                <label>
                    <select value={tamanoSeleccionado} onChange={(e) => setTamanoSeleccionado(e.target.value)}>

                        {
                            tamano.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                        }

                    </select>
                </label>
                <label>
                    <input onChange={(e) => setImagen(e.target.files[0])} type="file" />
                </label>


                <button type="submit" > Agregar Mascota</button>
            </div>

        </form>

    )

}

export default MascotasForm;