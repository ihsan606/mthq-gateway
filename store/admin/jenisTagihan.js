//state
export const state = ()=>({

    jenisTagihans: [],

    page:1,

    jenisTagihan:{},

    listJenisTagihan: {},


})


export const mutations= {

    //mutations "SET_JENIS_TAGIHANS_DATA"
    SET_JENIS_TAGIHANS_DATA(state,payload){
        state.jenisTagihans = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_JENIS_TAGIHAN_DATA"
    SET_JENIS_TAGIHAN_DATA(state,payload){
        state.jenisTagihan = payload
    },

    SET_LIST_JENIS_TAGIHAN(state,payload){
        state.listJenisTagihan = payload
    }

}


export const actions= {

    getJenisTagihans({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/jenisTagihans" with method GET
            this.$axios.get(`/api/admin/jenis_tagihan?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_JENIS_TAGIHANS_DATA',response.data.data)


                resolve()
            })
        })
    },

    storeJenisTagihan({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/jenis_tagihan',payload)

            //success
            .then(()=>{

                //dispatch action getJenisTagihans
                dispatch('getJenisTagihans')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    importJenisTagihan({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/jenis_tagihan/import',payload)

            //success
            .then(()=>{

                //dispatch action getKelasesData
                dispatch('getJenisTagihans')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    //action detail jenisTagihan
    getDetailJenisTagihan({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/jenisTagihans/:id" with method "GET"
            this.$axios.get(`/api/admin/jenis_tagihan/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_JENIS_TAGIHAN_DATA"
                commit('SET_JENIS_TAGIHAN_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update jenisTagihan
    updateJenisTagihan({ dispatch, commit }, { jenisTagihanId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/jenisTagihans/:id" with method "POST"
            this.$axios.post(`/api/admin/jenis_tagihan/${jenisTagihanId}`, payload)

            //success
            .then(() => {

                //dispatch action "getJenisTagihans"
                dispatch('getJenisTagihans')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy jenisTagihan
    destroyJenisTagihan({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/jenisTagihans/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/jenis_tagihan/${payload}`)

            //success
            .then(() => {

                //dispatch action "getJenisTagihans"
                dispatch('getJenisTagihans')

                //resolve promise
                resolve()

            })

        })

    },

    getListJenisTagihan({commit},payload){

        return new Promise((resolve, reject) => {

            this.$axios.get('/api/admin/jenis_tagihan_list')

            //success
            .then(response => {

                commit('SET_LIST_JENIS_TAGIHAN', response.data.data)

                resolve()
            } )
        })
    }
}