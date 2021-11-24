//state
export const state = () => ({

    angkatans: [],

    //page
    page: 1,

    //angkatan
    angkatan:{},

    //list angkatans
    listAngkatan:{},

})

//mutation
export const mutations = {

    //mutation "SET_ANGKATANS_DATA"
    SET_ANGKATANS_DATA(state,payload) {
        //set value state angkatans
        state.angkatans = payload
    },

    //mutation "SET_PAGE_DATA"
    SET_PAGE(state,payload) {
        //set value page
        state.page = payload
    },

    //mutation "SET_ANGKATAN_DATA"
    SET_ANGKATAN_DATA(state,payload) {
        //set value angkatan
        state.angkatan = payload
    },

    SET_ANGKATAN_LIST(state,payload){
        state.listAngkatan = payload
    }


}

//actions
export const actions ={
    //fetching REST API "/api/admin/angkatan"

    //getAngkatans data
    getAngkatansData({commit,state}, payload) {

        //search
        let search = payload ? payload : ''

        //set promise
        return new Promise((resolve, reject) => {

            //fetching REST API "/api/admin/angkatan"
            this.$axios.get(`/api/admin/angkatan?q=${search}&page=${state.page}`)

            //success
            .then((response) => {

                //commit to mutation "SET_ANGKATANS_DATA"
                commit('SET_ANGKATANS_DATA',response.data.data)

                //resolve Promise

                resolve()
            })
        })
    },

    getListAngkatan({commit}, payload){

        return new Promise((resolve, reject) => {

            //fetching REST API "/api/admin/angkatan_list"
            this.$axios.get(`/api/admin/angkatan_list`)

            //success
            .then((response) => {

                //commit to mutation "SET_ANGKATANS_DATA"
                commit('SET_ANGKATAN_LIST',response.data.data)

                //resolve Promise

                resolve()
            })
        })

    },


    //store angkatan
    storeAngkatan({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/angkatan" with method "POST"
            this.$axios.post('/api/admin/angkatan', payload)

            //success
            .then(() => {

                //dispatch action "getAngkatansData"
                dispatch('getAngkatansData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //action detail angkatan
    getDetailAngkatan({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/angkatan/:id" with method "GET"
            this.$axios.get(`/api/admin/angkatan/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_ANGKATAN_DATA"
                commit('SET_ANGKATAN_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },


    //update angkatan
    updateAngkatan({ dispatch, commit }, { angkatanId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/angkatan/:id" with method "POST"
            this.$axios.post(`/api/admin/angkatan/${angkatanId}`, payload)

            //success
            .then(() => {

                //dispatch action "getAngkatansData"
                dispatch('getAngkatansData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy angkatan
    destroyAngkatan({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/angkatan/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/angkatan/${payload}`)

            //success
            .then(() => {

                //dispatch action "getAngkatansData"
                dispatch('getAngkatansData')

                //resolve promise
                resolve()

            })

        })

    },
}