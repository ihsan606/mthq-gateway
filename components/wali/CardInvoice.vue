<template>
  <b-card class="shadow rounded mt-2 border-0">
            <div class="row d-flex">
              <div v-if="invoice.jenis_tagihan.name.includes('Makan')"  class="col-2 mx-2" >
                <img class="img-icon" :src="meal" width="60" alt="" />
              </div>
              <div v-if="invoice.jenis_tagihan.name.includes('SPP')"  class="col-2 mx-2" >
                <img class="img-icon" :src="education" width="60" alt="" />
              </div>
              
              <div class="col-7 ">
                <p style="font-weight: 300">{{invoice.invoice}}</p>
                <p style="color: #0aa7ff;font-weight:500">{{invoice.jenis_tagihan.name}}</p>
                <p style="font-weight: 300"> Rp. {{ formatPrice(invoice.grand_total-5000) }}</p>
              </div>
              <div class="col-3 d-flex justify-content-end">
                <b-button @click.prevent="checkout(invoice.id)" variant="light" class="rounded shadow">
                <img class="img-next" src="/images/fast-forward.png" width="30" alt="">
                </b-button>
              </div>
            </div>
          </b-card>
</template>

<script>
export default {
    name: "CardInvoice",
    props: ["invoice"],

   data() {
      return {
       snap_token:this.invoice.snap_token,
       education:'/images/mortarboard.png',
       meal: '/images/iftar.png',
      }
    },

   



    methods: {
       //method "checkout"
      async checkout(id) {

         if(this.snap_token == null) {
          //define formData
          let formData = new FormData();

          formData.append('id', id)


          //sending data to action "storeCheckout" vuex
          await this.$store.dispatch('wali/checkout/storeCheckout', formData)

            //success
            .then(response => {

              //sweet alert
              this.$swal.fire({
                title: 'BERHASIL!',
                text: "Checkout Berhasil Dilakukan!",
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
              })

              //redirect route "detail invoice"
              this.$router.push({
                name: 'wali-invoice-show-snap_token',
                params: {
                  snap_token: response.snap_token
                }
              })
            })

        }else{
          this.$router.push({
                name: 'wali-invoice-show-snap_token',
                params: {
                  snap_token: this.snap_token
                }
              })
        }
          

      }

          

       
        
      
    }

}
</script>

<style scoped>
@media (max-width: 600px) {
  .img-next{
    width:20px;
  }
}
</style>