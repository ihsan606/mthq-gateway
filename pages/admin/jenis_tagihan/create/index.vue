<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue" style="background-color:white">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-users"></i> ADD NEW JENIS TAGIHAN</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeJenisTagihan">

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NAMA TAGIHAN</label>
                        <input type="text" v-model="jenisTagihan.name" placeholder="Masukkan NAMA TAGIHAN" class="form-control">
                        <div v-if="validation.name" class="mt-2">
                          <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                       <div class="form-group">
                        <label>DITUJUKAN UNTUK</label>
                        <select
                          class="form-control"
                          v-model="jenisTagihan.object"
                        >
                          <option value="">-- Pilih Status Object --</option>
                          <option value="baru">
                            baru
                          </option>
                          <option value="baru">
                            aktif
                          </option>
                        </select>
                        <div v-if="validation.pembayar" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.pembayar[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>TOTAL TAGIHAN</label>
                        <input type="number" v-model="jenisTagihan.price" placeholder="Masukkan Total Tagihan"
                          class="form-control">
                        <div v-if="validation.price" class="mt-2">
                          <b-alert show variant="danger">{{ validation.price[0] }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                        <label>KODE TAGIHAN</label>
                        <input type="text" v-model="jenisTagihan.kode" placeholder="Masukkan Kode TAGIHAN" class="form-control">
                        <div v-if="validation.kode" class="mt-2">
                          <b-alert show variant="danger">{{ validation.kode[0] }}</b-alert>
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
        title: 'Add New jenisTagihanSantri - Administrator',
      }
    },

    data() {
      return {
        //state jenisTagihan
        jenisTagihan: {
          name: '',
          kode: '',
          object: '',
          price: '',
          
        },
        //state validation
        validation: []
      }
    },

    methods: {

      //method "storejenisTagihan"
      async storeJenisTagihan() {

        //define formData
        let formData = new FormData();

        formData.append('name',this.jenisTagihan.name);
        formData.append('kode', this.jenisTagihan.kode);
        formData.append('pembayar', this.jenisTagihan.object);
        formData.append('price', this.jenisTagihan.price);
       

        //sending data to action "storejenisTagihan" vuex
        await this.$store.dispatch('admin/jenisTagihan/storeJenisTagihan', formData)

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

            //redirect route "admin-jenisTagihans"
            this.$router.push({
              name: 'admin-jenis_tagihan'
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