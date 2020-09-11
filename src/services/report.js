import Api from './api'
export default{
    myinvoice(credential,token){
        let config = {
          headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
          
          }
        return Api().post('/apis/report/dashbord/myinvoice',credential,config)
    },
    getdataall(credential,token){
        let config = {
          headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
          
          }
        return Api().post('/apis/report/dashbord/getdataall',credential,config)
    },
    getdatapaid(credential,token){
        let config = {
          headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
          
          }
        return Api().post('/apis/report/dashbord/getdatapaid',credential,config)
    },
    getdatabill(credential,token){
        let config = {
          headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
          
          }
        return Api().post('/apis/report/dashbord/getdatabill',credential,config)
    },
    contactparent(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('/apis/report/getdataparentall',credential,config)
  },
}