import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    isUserLoggedIn: false,
    uuid: null,
    email:null,
    username:null,
    role:null,
    token:null,
    studentid:null,
    studant_name:null,
    grade:null,
    parent_name:null,
  },
  mutations: {
    setToken(state, token){
      state.token = token
      if(token){
        state.isUserLoggedIn = true
      }else{
        state.isUserLoggedIn = false
      }
    },
    setuuid(state, uuid){
      state.uuid = uuid
    },
    setemail(state, email){
      state.email = email
    },
    setusername(state, username){
      state.username = username
    },
    setRole(state, role){
      state.role = role
    },
    setstudentid(state, studentid){
      state.studentid = studentid
    },
    setstudant_name(state, studant_name){
      state.studant_name = studant_name
    },
    setgrade(state, grade){
      state.grade = grade
    },
    setparent_name(state, parent_name){
      state.parent_name = parent_name
    },


  },
  actions: {
    setToken({commit}, token){
      commit('setToken', token)
    },
    setuuid({commit}, uuid){
      commit('setuuid', uuid)
    },
    setemail({commit}, email){
      commit('setemail', email)
    },
    setusername({commit}, username){
      commit('setusername', username)
    },
    setRole({commit}, role){
      commit('setRole', role)
    },
    setstudentid({commit}, studentid){
      commit('setstudentid', studentid)
    },
    setstudant_name({commit}, studant_name){
      commit('setstudant_name', studant_name)
    },
    setgrade({commit}, grade){
      commit('setgrade', grade)
    },
    setparent_name({commit}, parent_name){
      commit('setparent_name', parent_name)
    }
  },
  modules: {
  },
  getters: {
    token: state => {
      return state.token
    },
    uuid: state=>{
      return state.uuid
    },
    role: state => {
      return state.role
    },
    studentid: state => {
      return state.studentid
    },
    studant_name: state => {
      return state.studant_name
    },
    grade: state => {
      return state.grade
    },
    parent_name: state => {
      return state.parent_name
    },
  }
})
