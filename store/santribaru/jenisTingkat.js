export const state = ()=>({

    listTingkat:{},

})


export const mutations= {

    SET_LIST_TINGKAT(state,payload){
        state.listTingkat = payload
    }

}

export const actions= {
    getListTingkat({commit},payload){

        return new Promise((resolve, reject) => {

            this.$axios.get('/api/pendaftaran/tingkat_list')

            //success
            .then(response => {

                commit('SET_LIST_TINGKAT', response.data.data)

                resolve()
            } )
            .catch(error => {
                reject(error)
            })
        })
    }
}