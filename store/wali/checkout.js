//actions
export const actions = {

    //store checkout
    storeCheckout({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/web/checkout" with method "POST"
            this.$axios.post('/api/wali/checkout', payload)

            //success
            .then(response => {

                //resolve promise
                resolve(response.data.data)
                
               

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },

}