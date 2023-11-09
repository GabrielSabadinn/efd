import axios from 'axios'
const url = " https://www.lefisc.com.br/api/retFonte/api"
const token = "1551094d-975e-4fec-8c6a-c37946a23717"

export default{   
    getGeraISSIgualSite(idCidade,idItem){
        return axios
        .get(`${url}/GeraISSIgualSite/${idCidade}/${idItem}/${token}`)
        .then(res=>res.data)
        .catch(err=> console.log(err))
    }
}