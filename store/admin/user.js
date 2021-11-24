//state
export const state = ()=>({

    users: [],

    page:1,

    user:{},

   


})


export const mutations= {

    //mutations "SET_USERS_DATA"
    SET_USERS_DATA(state,payload){
        state.users = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_USER_DATA"
    SET_USER_DATA(state,payload){
        state.wali = payload
    },



}


export const actions= {

    getUsersData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/users" with method GET
            this.$axios.get(`/api/admin/users?q=${search}&page=${state.page}`)


            //success
            .then((response) =>{
                commit('SET_USERS_DATA',response.data.data)


                resolve()
            })
        })
    },

    storeUser({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/users/',payload)

            //success
            .then(()=>{

                //dispatch action getKelasesData
                dispatch('getUsersData')

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

            this.$axios.post('/api/admin/users/import',payload)

            //success
            .then(()=>{

                //dispatch action getKelasesData
                dispatch('getUsersData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    //action detail wali
    getDetailUsers({commit},payload) {
        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/admin/users/:id" with method "GET"
            this.$axios.get(`/api/admin/users/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_USER_DATA"
                commit('SET_USER_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })
    },

    //update wali
    updateWali({ dispatch, commit }, { waliId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/users/:id" with method "POST"
            this.$axios.post(`/api/admin/users/${waliId}`, payload)

            //success
            .then(() => {

                //dispatch action "getUsersData"
                dispatch('getData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy User
    destroyUser({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/users/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/users/${payload}`)

            //success
            .then(() => {

                //dispatch action "getUsersData"
                dispatch('getUsersData')

                //resolve promise
                resolve()

            })

        })

    },

   
}