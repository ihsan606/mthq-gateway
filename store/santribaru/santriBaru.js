//state
export const state = ()=>({


    page:1,

    santriBaru:{},


})


export const mutations= {

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_SANTRI_BARU_DATA"
    SET_SANTRI_BARU_DATA(state,payload){
        state.santriBaru = payload
    },


}


export const actions= {

    
    storeSantriBaru({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/pendaftaran/register_santri',payload)

            //success
            .then(()=>{

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    

    //action detail santri baru
    getDetailSantriBaru({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/pendaftaran/santribarus/:id" with method "GET"
            this.$axios.get(`/api/pendaftaran/santribarus/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_SANTRI_DATA"
                commit('SET_SANTRI_BARU_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    updateSantriBaru({ dispatch, commit }, { santriId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "api/pendaftaran/santribarus/:id" with method "POST"
            this.$axios.post(`/api/pendaftaran/santribarus/${santriId}`, payload)

            //success
            .then(() => {

               
              

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },



   
}