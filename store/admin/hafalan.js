//state
export const state = ()=>({

    hafalans: [],

    page:1,

    hafalan:{},

    


})


export const mutations= {

    //mutations "SET_HAFALANS_DATA"
    SET_HAFALANS_DATA(state,payload){
        state.hafalans = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "ISET_HAFALAN_DATA"
    SET_HAFALAN_DATA(state,payload){
        state.hafalan = payload
    },

}


export const actions= {

    getHafalansData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/hafalans" with method GET
            this.$axios.get(`/api/admin/hafalan?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_HAFALANS_DATA',response.data.data)


                resolve()
            })
        })
    },

    storeHafalan({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/hafalan',payload)

            //success
            .then(()=>{

                //dispatch action getHafalansData
                dispatch('getHafalansData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    importHafalan({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/hafalan/import',payload)

            //success
            .then(()=>{

                //dispatch action getHafalansData
                dispatch('getHafalansData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    //action detail hafalan
    getDetailHafalan({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/hafalan/:id" with method "GET"
            this.$axios.get(`/api/admin/hafalan/${payload}`)

            //success
            .then(response => {

                //commit to mutation "ISET_HAFALAN_DATA"
                commit('SET_HAFALAN_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update hafalan
    updateHafalan({ dispatch, commit }, { hafalanId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/hafalan/:id" with method "POST"
            this.$axios.post(`/api/admin/hafalan/${hafalanId}`, payload)

            //success
            .then(() => {

                //dispatch action "getHafalansData"
                dispatch('getHafalansData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy hafalan
    destroyHafalan({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/hafalan/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/hafalan/${payload}`)

            //success
            .then(() => {

                //dispatch action "getHafalansData"
                dispatch('getHafalansData')

                //resolve promise
                resolve()

            })

        })

    },

    
}