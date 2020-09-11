import Api from './api'
export default{
    examinationfee(credentials){
        return Api().post('apis/admission/examinationfee',credentials)
    },
    tuitionfee(credentials){
        return Api().post('apis/admission/tuitionfee',credentials)
    },
    developmentfund(credentials){
        return Api().post('apis/admission/developmentfund',credentials)
    },
    foundation(credentials){
        return Api().post('apis/admission/foundation',credentials)
    },
    getdataexam(token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().get('apis/admission/dashbord/admission/exam',config)
    },
    getdatadevelopment(token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().get('apis/admission/dashbord/admission/development',config)
    },
    getdatatuitionfee(token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().get('apis/admission/dashbord/admission/tuitionfee',config)
    },
    getdatafoundation(token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().get('apis/admission/dashbord/admission/foundation',config)
    },
    putdataexam(credentials,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().post('apis/admission/dashbord/admission/exam',credentials,config)
    },
    putdatadevelopment(credentials,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().post('apis/admission/dashbord/admission/development',credentials,config)
    },
    putdatatuitionfee(credentials,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().post('apis/admission/dashbord/admission/tuitionfee',credentials,config)
    },
    putdatafoundation(credentials,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().post('apis/admission/dashbord/admission/foundation',credentials,config)
    },
    getdataapproved(credentials,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().post('apis/admission/dashbord/admission/approved',credentials,config)
    }
}