<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue" style="background-color:white">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-users"></i> EDIT JENIS TAGIHAN</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="updateJenisTagihan">

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
                        <select class="form-control" v-model="jenisTagihan.object">
                          <option value="">-- Pilih Status --</option>
                          <option
                            v-for="object in objects"
                            :key="object"
                            :value="object"
                          >
                            {{ object }}
                          </option>
                        </select>
                        <div v-if="validation.wali_id" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.wali_id[0]
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
                    <div class="col-md-6">
                    <div class="form-group">
                        <label>KODE TAGIHAN</label>
                        <input type="text" v-model="jenisTagihan.kode" placeholder="Masukkan Kode TAGIHAN" class="form-control">
                        <div v-if="validation.kode" class="mt-2">
                          <b-alert show variant="danger">{{ validation.kode[0] }}</b-alert>
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
        title: 'Edit jenisTagihan Santri - Administrator',
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

        objects:['baru','aktif'],
        //state validation
        validation: []
      }
    },

    //hook "asyncData"
    async asyncData({ store, route }) {
        await store.dispatch('admin/jenisTagihan/getDetailJenisTagihan', route.params.id)
    },


    //mounted
    mounted() {
        this.jenisTagihan.name = this.$store.state.admin.jenisTagihan.jenisTagihan.name
        this.jenisTagihan.kode = this.$store.state.admin.jenisTagihan.jenisTagihan.kode
        this.jenisTagihan.object = this.$store.state.admin.jenisTagihan.jenisTagihan.pembayar
        this.jenisTagihan.price = this.$store.state.admin.jenisTagihan.jenisTagihan.price
        
    },

    methods: {

      //method "updatejenisTagihan"
      async updateJenisTagihan() {

        //define formData
        let formData = new FormData();

        formData.append('name',this.jenisTagihan.name);
        formData.append('kode', this.jenisTagihan.kode);
        formData.append('pembayar', this.jenisTagihan.object);
        formData.append('price', this.jenisTagihan.price);
        formData.append("_method", "PATCH")

        //sending data to action "updatejenisTagihan" vuex
        await this.$store.dispatch('admin/jenisTagihan/updateJenisTagihan', {
            jenisTagihanId: this.$route.params.id,
            payload: formData
        })

          //success
          .then(() => {

            //sweet alert
            this.$swal.fire({
              title: 'BERHASIL!',
              text: "Data Berhasil Diupdate!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })

            //redirect route "admin-users"
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