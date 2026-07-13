import axios from "axios";

const MascotaApi = axios.create({

    baseURL:"https://mascotas.pythonanywhere.com/api/",

});

export default MascotaApi;