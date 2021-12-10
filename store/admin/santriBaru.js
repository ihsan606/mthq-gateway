//state
export const state = ()=>({

    santris: [],

    page:1,

    santri:{},

    listSantri:{},


})


export const mutations= {

    //mutations "SET_SANTRIS_DATA"
    SET_SANTRIS_DATA(state,payload){
        state.santris = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_SANTRI_DATA"
    SET_SANTRI_DATA(state,payload){
        state.santri = payload
    },

    SET_LIST_SANTRI(state,payload){
        state.listSantri = payload
    }
}


export const actions= {

    getSantrisData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/santris" with method GET
            this.$axios.get(`/api/admin/santris?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_SANTRIS_DATA',response.data.data)


                resolve()
            })
        })
    },
    
    getListSantri({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/santris" with method GET
            this.$axios.get(`/api/admin/santri_list`)


            //success
            .then((response) =>{
                commit('SET_LIST_SANTRI',response.data.data)


                resolve()
            })
        })
    },
    storeSantri({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/santris/',payload)

            //success
            .then(()=>{

                //dispatch action getSantrisData
                dispatch('getSantrisData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    importSantri({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/santris/import',payload)

            //success
            .then(()=>{

                //dispatch action getSantrisData
                dispatch('getSantrisData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    //action detail santri
    getDetailSantri({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/santris/:id" with method "GET"
            this.$axios.get(`/api/admin/santris/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_SANTRI_DATA"
                commit('SET_SANTRI_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update santri
    updateSantri({ dispatch, commit }, { santriId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/santris/:id" with method "POST"
            this.$axios.post(`/api/admin/santris/${santriId}`, payload)

            //success
            .then(() => {

                //dispatch action "getSantrisData"
                dispatch('getSantrisData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy santri
    destroySantri({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/santris/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/santris/${payload}`)

            //success
            .then(() => {

                //dispatch action "getSantrisData"
                dispatch('getSantrisData')

                //resolve promise
                resolve()

            })

        })

    },
}