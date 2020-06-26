import axios from 'axios';

const state = {
    salaryData :[]
};

const getters= {
    salaryData : (state) => state.salaryData,
};

const actions = {
    async fetchData({ commit }) {       
        const response = await axios.get(`https://api.themoviedb.org/4/list/1?page=1&api_key=de6c362381c36a5d1144dccf875df327`);
        commit('setData', response.data.results)
    },
};

const mutations = {
    setData: (state, salaryData) => (state.salaryData = salaryData),
};

export default {
    state,
    getters,
    actions,
    mutations
}