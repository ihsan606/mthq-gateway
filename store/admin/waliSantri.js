//state
export const state = ()=>({

    walis: [],

    page:1,

    wali:{},

    listWali: {},


})


export const mutations= {

    //mutations "SET_WALIS_DATA"
    SET_WALIS_DATA(state,payload){
        state.walis = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_WALI_DATA"
    SET_WALI_DATA(state,payload){
        state.wali = payload
    },

    SET_LIST_WALI(state,payload){
        state.listWali = payload
    }

}


export const actions= {

    getWalisData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/walis" with method GET
            this.$axios.get(`/api/admin/walis?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_WALIS_DATA',response.data.data)


                resolve()
            })
        })
    },

    storeWali({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/walis',payload)

            //success
            .then(()=>{

                //dispatch action getKelasesData
                dispatch('getWalisData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    importWali({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/walis/import',payload)

            //success
            .then(()=>{

                //dispatch action getKelasesData
                dispatch('getWalisData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    //action detail wali
    getDetailWali({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/walis/:id" with method "GET"
            this.$axios.get(`/api/admin/walis/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_WALI_DATA"
                commit('SET_WALI_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update wali
    updateWali({ dispatch, commit }, { waliId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/walis/:id" with method "POST"
            this.$axios.post(`/api/admin/walis/${waliId}`, payload)

            //success
            .then(() => {

                //dispatch action "getWalisData"
                dispatch('getWalisData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy wali
    destroyWali({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/walis/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/walis/${payload}`)

            //success
            .then(() => {

                //dispatch action "getWalisData"
                dispatch('getWalisData')

                //resolve promise
                resolve()

            })

        })

    },

    getListWali({commit},payload){

        return new Promise((resolve, reject) => {

            this.$axios.get('/api/admin/wali_list')

            //success
            .then(response => {

                commit('SET_LIST_WALI', response.data.data)

                resolve()
            } )
        })
    }
}