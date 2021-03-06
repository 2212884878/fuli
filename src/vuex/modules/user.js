import * as types from '../types'
import { setCookie } from "../../package/cookie";

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    // 用户数据信息
    userData: JSON.parse(localStorage.getItem('userData')) || {},
}

const actions = {
    /**
     * 用户登录
     */
    setUserInfo({ commit }, res) {
        localStorage.setItem('userInfo', JSON.stringify(res))
        localStorage.setItem('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, false)
    },

    /**
     * 退出登录
     */
    setSignOut({ commit }) {
        localStorage.removeItem('loginStatus')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('userData')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
        commit(types.SET_USER_DATA, {})
    },

    /**
     * 设置用户信息
     */
    setUserData({ commit },res) {
        localStorage.setItem('userData', JSON.stringify(res))
        setCookie('userData',JSON.stringify(res),60*60*24*1000)
        commit(types.COM_LOADING_STATUS, false)
        commit(types.SET_USER_DATA, res)
    },
}

const getters = {
    getUserData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo,
}

const mutations = {
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },

    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },

    [types.SET_USER_DATA](state, res) {
        state.userData = res
    }  
}

export default {
    state,
    actions,
    getters,
    mutations
}