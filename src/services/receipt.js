import Api from './api'
export default{
    getdatareceipt(credentials,token){
        let config = {
          headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
          
        }
      return Api().post('apis/receipt/parent/receipt',credentials,config)
    },
    parentrejectpayment(credentials,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
      }
    return Api().post('apis/receipt/parent/rejectpayment',credentials,config)
  }
}