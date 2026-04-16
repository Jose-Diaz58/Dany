import api from "../api/connectionAxios";

class DatosBD {
    //Peticion de Datos de la bd
    async getDatos(){
        return await api.get('/persona/buscar')
    }

    async postDatos(data) {
        return await api.post ('/persona/create', data)
    }

    async deleteDatos(id) {
        return await api.delete (`/persona/eliminar/${id}`)
    }
}

export default new DatosBD();