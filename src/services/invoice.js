import Api from './api'
export default{
    createinvoice(credential,token){
      let config = {
          headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
          
        }
      return Api().post('/apis/invioce/invoicemaster',credential,config)
    },
    myinvoice(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('/apis/invioce/dashbord/myinvoice',credential,config)
    },
    detailinvoice(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/dashbord/getdetailinvoice',credential,config)
    },
    detailgenereate(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/dashbord/getdetailgenereate',credential,config)
    },
    getgrade(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/dashbord/selectgendata',credential,config)
    },
    generateinvoice(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/dashbord/genereateinvoice',credential,config)
    },
    parentlistinvoice(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/parent/inovoicelist',credential,config)
    },
    parentshowdetailinvoice(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/parent/detailbill',credential,config)
    },
    parentdownloadinvoice(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/parent/downloadinvoice',credential,config)
    },
    delinvoice(credential,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
        }
      return Api().post('apis/invioce/delinvioce',credential,config)
    },
}