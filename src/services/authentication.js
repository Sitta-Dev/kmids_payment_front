import Api from './api'

export default{
    Login(credentials){
        return Api().post('apis/auth/loginstaff',credentials)
    },
    Loginparent(credentials){
        return Api().post('apis/auth/loginparent',credentials)
    }
}