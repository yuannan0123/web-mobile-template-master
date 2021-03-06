/*
 * @Author: your name
 * @Date: 2020-11-13 09:25:38
 * @LastEditTime: 2020-11-13 10:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Git\plate-control-admin\src\store\modules\bind.js
 */

const state = {
    bindFilter: "",//筛选条件缓存
    detailRouter:false,
}

const mutations = {
    bindFilter_Fun: (state, data) => {
        state.bindFilter = data
        localStorage.setItem('bindFilter', JSON.stringify(data))
    },
    detailRouter_Fun: (state, data) => {
        state.detailRouter = data
        localStorage.setItem('detailRouter', JSON.stringify(data))
    },
}

const actions = {
    bindFilter({ commit, state }, data) {
        commit('bindFilter_Fun', data)
    },
    detailRouter({ commit, state }, data) {
        commit('detailRouter_Fun', data)
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

