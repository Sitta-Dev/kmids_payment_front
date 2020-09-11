import Api from './api'
export default{
    anyactivityform(credentials,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().post('apis/anyactivity/anyactivityform',credentials,config)
    },
    getdataanyactivity(token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token }
          }
        return Api().get('apis/anyactivity/dashbord/anyactivity',config)
    },
    getdatashowactivity(credentials,token){
      let config = {
          headers: { 'Authorization': 'bearer ' + token }
        }
      return Api().post('apis/anyactivity/dashbord/anyactivity/show',credentials,config)
  },
    approvedataanyactivity(credentials,token){
      let config = {
          headers: { 'Authorization': 'bearer ' + token }
        }
      return Api().post('apis/anyactivity/dashbord/anyactivity',credentials,config)
  },
  rejectpayment(credentials,token){
    let config = {
        headers: { 'Authorization': 'bearer ' + token }
      }
    return Api().post('apis/anyactivity/dashbord/activity/payment/reject',credentials,config)
  },
    reportapprovedataanyactivity(credentials,token){
      let config = {
          headers: { 'Authorization': 'bearer ' + token }
        }
      return Api().post('apis/anyactivity/dashbord/anyactivity/approved',credentials,config)
  },
    getdatastatusparent(credentials,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
      }
    return Api().post('apis/anyactivity/parent/anyactivity',credentials,config)
    },
    paidinvoicebil(credentials,token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
      }
    return Api().post('apis/anyactivity/dashbord/paidinvoicebill',credentials,config)
    },
}