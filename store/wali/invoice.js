//state
export const state = ()=>({

    invoices: [],

    page:1,

    invoice:{},




})


export const mutations= {

    //mutations "SET_invoices_DATA"
    SET_INVOICES_DATA(state,payload){
        state.invoices = payload
    },

    //mutations "SET_PAGE"
    SET_PAGE(state,payload){
        state.page = payload
    },

    //mutations "SET_invoice_DATA"
    SET_INVOICE_DATA(state,payload){
        state.invoice = payload
    },





}


export const actions= {

    getInvoicesData({commit,state},payload){

        //search\
        let search = payload ? payload :''

        //set promises
        return new Promise((resolve, reject) =>{

            //fetch data to from REST API "/api/admin/invoices" with method GET
            this.$axios.get(`/api/wali/invoice?q=${search}`)


            //success
            .then((response) =>{
                commit('SET_INVOICES_DATA',response.data.data)


                resolve()
            })
        })
    },

   
    

    importInvoice({dispatch, commit},payload){

        //set promises
        return new Promise((resolve, reject) =>{

            this.$axios.post('/api/admin/invoice/import',payload)

            //success
            .then(()=>{

                //dispatch action getKelasesData
                dispatch('getinvoicesData')

                resolve()
            })

            .catch((error) =>{
                reject(error)
            })
        })
    },

    getDetailInvoice({ commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/api/customer/invoice/:snap_token" with method "GET"
            this.$axios.get(`/api/wali/invoice/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_INVOICE_DATA"
                commit('SET_INVOICE_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })

    },

    //update invoice
    updateInvoice({ dispatch, commit }, { invoiceId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/invoices/:id" with method "POST"
            this.$axios.post(`/api/admin/invoice/${invoiceId}`, payload)

            //success
            .then(() => {

                //dispatch action "getinvoicesData"
                dispatch('getInvoicesData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


    //destroy invoice
    destroyInvoice({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/api/admin/invoices/:id" with method "DELETE"
            this.$axios.delete(`/api/admin/invoices${payload}`)

            //success
            .then(() => {

                //dispatch action "getinvoicesData"
                dispatch('getinvoicesData')

                //resolve promise
                resolve()

            })

        })

    },

    getListinvoice({commit},payload){

        return new Promise((resolve, reject) => {

            this.$axios.get('/api/admin/invoice_list')

            //success
            .then(response => {

                commit('SET_LIST_invoice', response.data.data)

                resolve()
            } )
        })
    }
}