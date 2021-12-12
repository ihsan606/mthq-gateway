//state
export const state = ()=>({

    jenisTingkatans: [],

    page:1,

    jenisTingkatan:{},



})


export const mutations= {

    //mutations "SET_JENIS_TINGKATANS_DATA"
    SET_JENIS_TINGKATANS_DATA(state,payload){
        state.jenisTingkatans = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_JENIS_TINGKATAN_DATA"
    SET_JENIS_TINGKATAN_DATA(state,payload){
        state.jenisTingkatan = payload
    },
}


export const actions= {

    getJenisTingkatansData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/kelas" with method GET
            this.$axios.get(`/api/admin/tingkatan?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_JENIS_TINGKATANS_DATA',response.data.data)


                resolve()
            })
        })
    },
    
 
    storeJenisTingkatan({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/tingkatan/',payload)

            //success
            .then(()=>{

                //dispatch action getJenisTingkatansData
                dispatch('getJenisTingkatansData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    //action detail tingkatan
    getDetailTingkatan({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/tingkatan/:id" with method "GET"
            this.$axios.get(`/api/admin/tingkatan/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_JENIS_TINGKATAN_DATA"
                commit('SET_JENIS_TINGKATAN_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update
    updateTingkatan({ dispatch, commit }, { tingkatanId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/kelas/:id" with method "POST"
            this.$axios.post(`/api/admin/tingkatan/${tingkatanId}`, payload)

            //success
            .then(() => {

                //dispatch action "getJenisTingkatansData"
                dispatch('getJenisTingkatansData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy jenis tingkatan
    destroyTingkatan({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/tingkatan/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/tingkatan/${payload}`)

            //success
            .then(() => {

                //dispatch action "getJenisTingkatansData"
                dispatch('getJenisTingkatansData')

                //resolve promise
                resolve()

            })

        })

    },
}