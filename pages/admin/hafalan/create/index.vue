<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue" style="background-color:white">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-users"></i> ADD NEW HAFALAN</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeHafalan">

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>SANTRI ID {{ hafalan.santri_id }} </label>
                        <select class="form-control" v-model="hafalan.santri_id">
                          <option value="">-- Pilih SANTRI --</option>
                          <option
                            v-for="santri in santris"
                            :key="santri.id"
                            :value="santri.id"
                          >
                            {{ santri.nism+"---"+santri.name }}
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
                        <label>Jumlah Juz</label>
                        <input type="number" v-model="hafalan.jumlah_juz" placeholder="Masukkan Jumlah Hafalan"
                          class="form-control">
                        <div v-if="validation.jumlah_juz" class="mt-2">
                          <b-alert show variant="danger">{{ validation.jumlah_juz[0] }}</b-alert>
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
        title: 'Add New Hafalan - Administrator',
      }
    },

      //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("admin/santri/getListSantri")

  },

  //computed
  computed: {
    //santris
    santris() {
      return this.$store.state.admin.santri.listSantri
    },

  },

    data() {
      return {
        //state hafalan
        hafalan: {
          santri_id: '',
          jumlah_juz: '',
        },
        //state validation
        validation: []
      }
    },

    methods: {

      //method "storeHafalan"
      async storeHafalan() {

        //define formData
        let formData = new FormData();

        formData.append('santri_id', this.hafalan.santri_id)
        formData.append('jumlah_juz', this.hafalan.jumlah_juz)

        //sending data to action "storeWali" vuex
        await this.$store.dispatch('admin/hafalan/storeHafalan', formData)

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