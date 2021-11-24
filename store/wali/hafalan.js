//state
export const state = ()=>({

    hafalans: [],

    page:1,

 

    


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


}


export const actions= {

    getHafalansData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/hafalans" with method GET
            this.$axios.get(`/api/wali/hafalan?q=${search}`)


            //success
            .then((response) =>{
                commit('SET_HAFALANS_DATA',response.data.data)


                resolve()
            })
        })
    },

    

    
}