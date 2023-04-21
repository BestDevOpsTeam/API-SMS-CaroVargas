let axios = require('axios');
let endoint = 'https://api.juancarlosparragalan.com/prodsms/api/v1/smsmessage'
async function sendSMS(phoneNumber, name) {
    let response = {}
    if(!phoneNumber){
        response = {
            "status": "error",
            "message": "El número de celular es requerido"
        }
        return response;
    }else{
        let bodyrequest = {
            phoneNumber: phoneNumber,
        }
        response = await axios.post(endoint, bodyrequest);
        return response.data;
    }
}
module.exports = sendSMS