//state
export const state = ()=>({

    dashboard: [],

    page:1,


   



})


export const mutations= {

    //mutations "SET_dashboard_DATA"
    SET_DASHBOARD_DATA(state,payload){
        state.dashboard = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },






}


export const actions= {

   

    getDashboardData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/invoices" with method GET
            this.$axios.get(`/api/wali/dashboard`)


            //success
            .then((response) =>{
                commit('SET_DASHBOARD_DATA',response.data.data)


                resolve()
            })
        })
    },

    

   

   

   


    

    
}