import { useEffect, useState } from "react";
import MascotaApi from "../../api/apiMascotas";

function MascotasForm() {

    const [estados, setEstados] = useState([]);
    const [estadoSeleccionado, setEstadoSeleccionado] = useState([]);
    const [tipoMascota, setTipoMascota] = useState([]);
    const [tipoSeleccionado, setTipoSeleccionado] = useState([]);
    const [sexo, setSexo] = useState([]);
    const [sexoSeleccionado, setSexoSeleccionado] = useState([]);
    const [tamano, setTamano] = useState([]);
    const [tamanoSeleccionado, setTamanoSeleccionado] = useState([])
    const [nombre, setNombre] = useState([]);
    const [imagen, setImagen] = useState([]);
    const [edad, setEdad] = useState([]);
    const [raza, setRaza] = useState([]);
    const [descripcion, setDescripcion] = useState([]);

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
     
    const addMascota = async() => {
        try{
            const response = MascotaApi.post("mascotas/", data)

        }catch(error){
            console.log(error)
        }
    }




    useEffect(() => {
        fetchChoices();

    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(estadoSeleccionado)

        const Mascotas = {
            nombre:nombre,
            descripcion:descripcion,
            imagen:imagen,
            estado:estadoSeleccionado,
            tipo_animal:tipoSeleccionado,
            edad:edad,
            raza:raza,
            sexo:sexoSeleccionado


        }

    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
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
                <input onChange={(e) => setImagen(e.target.files)} type="file" />
            </label>


            <button type="submit"> Agregar Mascota</button>

        </form>

    )

}

export default MascotasForm;