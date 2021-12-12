//state
export const state = ()=>({

    kelases: [],

    page:1,

    kelas:{},

    listKelas:{},


})


export const mutations= {

    //mutations "SET_KELASES_DATA"
    SET_KELASES_DATA(state,payload){
        state.kelases = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_KELAS_DATA"
    SET_KELAS_DATA(state,payload){
        state.kelas = payload
    },

    SET_LIST_KELAS(state,payload){
        state.listKelas = payload
    }
}


export const actions= {

    getKelasesData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/kelas" with method GET
            this.$axios.get(`/api/admin/kelas?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_KELASES_DATA',response.data.data)


                resolve()
            })
        })
    },
    
    getListKelas({commit,state},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/kelas_list" with method GET
            this.$axios.get(`/api/admin/kelas_list`)


            //success
            .then((response) =>{
                commit('SET_LIST_KELAS',response.data.data)


                resolve()
            })
        })
    },

    storeKelas({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/kelas',payload)

            //success
            .then(()=>{

                //dispatch action getKelasesData
                dispatch('getKelasesData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    //action detail kelas
    getDetailKelas({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/kelas/:id" with method "GET"
            this.$axios.get(`/api/admin/kelas/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_KELAS_DATA"
                commit('SET_KELAS_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update kelas
    updateKelas({ dispatch, commit }, { kelasId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/kelas/:id" with method "POST"
            this.$axios.post(`/api/admin/kelas/${kelasId}`, payload)

            //success
            .then(() => {

                //dispatch action "getKelasesData"
                dispatch('getKelasesData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy kelas
    destroyKelas({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/kelas/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/kelas/${payload}`)

            //success
            .then(() => {

                //dispatch action "getKelasesData"
                dispatch('getKelasesData')

                //resolve promise
                resolve()

            })

        })

    },
}