<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue" style="background-color:white">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-users"></i> ADD NEW INVOICE</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeInvoice">

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>JENIS TAGIHAN ID</label>
                        <select class="form-control" v-model="invoice.jenis_tagihan_id">
                          <option value="">-- Pilih Jenis Tagihan --</option>
                          <option
                            v-for="jt in jenisTagihans"
                            :key="jt.id"
                            :value="jt.id"
                          >
                            {{ jt.kode+"---"+jt.name }}
                          </option>
                        </select>
                        <div v-if="validation.santri_id" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.santri_id[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Tanggal Pembuatan</label>
                        <input type="date" v-model="invoice.tanggal" placeholder="Masukkan Tanggal"
                          class="form-control">
                        <div v-if="validation.tanggal" class="mt-2">
                          <b-alert show variant="danger">{{ validation.tanggal[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

  

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    SAVE</button>
                  <button class="btn btn-warning btn-reset" type="reset"><i class="fa fa-redo"></i>
                    RESET</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {

    //layout
    layout: 'admin',

    //meta
    head() {
      return {
        title: 'Add New Invoice - Administrator',
      }
    },

      //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("admin/jenisTagihan/getListJenisTagihan")

  },

  //computed
  computed: {
    //santris
    jenisTagihans() {
      return this.$store.state.admin.jenisTagihan.listJenisTagihan
    },

  },

    data() {
      return {
        //state hafalan
        invoice: {
          jenis_tagihan_id: '',
          tanggal: '',
        },
        //state validation
        validation: []
      }
    },

    methods: {

      //method "storeInvoice"
      async storeInvoice() {

        //define formData
        let formData = new FormData();

        formData.append('jenis_tagihan_id', this.invoice.jenis_tagihan_id)
        formData.append('tanggal', this.invoice.tanggal)

        //sending data to action "storeWali" vuex
        await this.$store.dispatch('admin/invoice/storeInvoice', formData)

          //success
          .then(() => {

            //sweet alert
            this.$swal.fire({
              title: 'BERHASIL!',
              text: "Data Berhasil Disimpan!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })

            //redirect route "admin-hafalan"
            this.$router.push({
              name: 'admin-hafalan'
            })

          })

          //error
          .catch(error => {

            //assign error to state "validation"
            this.validation = error.response.data
          })
      }
    }

  }
</script>

<style>

</style>