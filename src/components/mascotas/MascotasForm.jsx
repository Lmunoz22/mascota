import { useEffect, useState } from "react";
import MascotaApi from "../../api/apiMascotas";

function MascotasForm() {

    const [estados, setEstados] = useState([]);
    const [tipoMascota, setTipoMascota] = useState([]);
    const [sexo, setSexo] = useState([]);
    const [tamano, setTamano] = useState([]);

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

    return (
        <form>
            <label>Nombre:
                <input type="text" />
            </label>
            <label>Descripcion:
                <textarea ></textarea>
            </label>
            <label>Edad:
                <input type="number" />
            </label>
            <label>raza:
                <input type="text" />
            </label>
            <label >
                <select >
                    
                    {
                        estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }
                </select>
            </label>
            <label>
                <select>
                    
                    {
                        tipoMascota.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }

                </select>
            </label>
            <label>
                <select>
                    
                    {
                        sexo.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }

                </select>
            </label>
            <label>
                <select>
                    
                    {
                        tamano.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }

                </select>
            </label>
            <label>
                <input type="file"  />
            </label>




        </form>

    )

}

export default MascotasForm;