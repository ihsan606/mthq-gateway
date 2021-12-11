//state
export const state = ()=>({

    santribarus: [],

    santribaru:{},

    page:1,


 


})


export const mutations= {

    //mutations "SET_SANTRI_BARUS_DATA"
    SET_SANTRI_BARUS_DATA(state,payload){
        state.santribarus = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_SANTRI_BARU_DATA"
    SET_SANTRI_BARU_DATA(state,payload){
        state.santribaru = payload
    },


}


export const actions= {

    getSantriBarusData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/pendaftaran" with method GET
            this.$axios.get(`/api/admin/pendaftaran?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_SANTRI_BARUS_DATA',response.data.data)


                resolve()
            })
        })
    },
    


  

    //action detail santri baru
    getDetailSantriBaru({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/pendaftaran/:id" with method "GET"
            this.$axios.get(`/api/admin/pendaftaran/${payload}`)
            
            //success
            .then(response => {

                //commit to mutation "SET_SANTRI_DATA"
                commit('SET_SANTRI_BARU_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update santri
    updateSantriBaru({ dispatch, commit }, { santriId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/pendaftaran/:id" with method "POST"
            this.$axios.post(`/api/admin/pendaftaran/${santriId}`, payload)

            //success
            .then(() => {

                //dispatch action "getSantriBarusData"
                dispatch('getSantriBarusData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },

     //pindah santri baru yang lulus ke table santri utama
     migrateSantriBaru({ dispatch, commit }) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/pendaftaran/migrate" with method "POST"
            this.$axios.post(`/api/admin/pendaftaran/pindah`)

            //success
            .then(() => {

                //dispatch action "getSantriBarusData"
                dispatch('getSantriBarusData')

                //resolve promise
                resolve()

            })

        })

    },


    //destroy santri baru yang tidak lulus
    destroySantriBaru({ dispatch, commit }) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/pendaftaran/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/pendaftaran/hapus`)

            //success
            .then(() => {

                //dispatch action "getSantriBarusData"
                dispatch('getSantriBarusData')

                //resolve promise
                resolve()

            })

        })

    },
}