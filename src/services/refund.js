import Api from './api'
export default{
    refundreq(credential,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
            
          }
        return Api().post('apis/refund/reqrefund',credential,config)
    },
    getstatusrefund(credential,token){
        let config = {
            headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
            
          }
        return Api().post('apis/refund/status',credential,config)
    },
    getdascheckrefund(token){
      let config = {
        headers: { 'Authorization': 'bearer ' + token }
      }
      return Api().get('apis/refund/dashbord/refund',config)
    },
    approvestatusrefund(credential,token){
      let config = {
          headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
          
        }
      return Api().post('apis/refund/dashbord/refund',credential,config)
  },
  reportapproverefund(credential,token){
    let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
      }
    return Api().post('apis/refund/dashbord/refund/approved',credential,config)
  },
  getdataparent(credential,token){
    let config = {
        headers: { 'Authorization': 'bearer ' + token,"Content-Type": "application/json" }
        
      }
    return Api().post('apis/refund/getdataparent',credential,config)
  },
  showdetail(credential,token){
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('apis/refund/dashbord/showdetail',credential,config)
  },
  rejectrefund(credential,token){
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('apis/refund/dashbord/refund/reject',credential,config)
  },
  parentrejectrefund(credential,token){
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('apis/refund/parent/rejectrefund',credential,config)
  },
  refundpayment(credential,token){
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('apis/refund/parent/refundpayment',credential,config)
  },
  approvedrefundpayment(credential,token){
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('apis/refund/parent/approvedrefundpayment',credential,config)
  },
}