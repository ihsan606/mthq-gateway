<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> Tambah Kelas Baru</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeKelas">

                  <div class="form-group">
                    <label>Kelas</label>
                    <input type="text" v-model="kelas.name" placeholder="Masukkan Nama Kelas" class="form-control">
                    <div v-if="validation.name" class="mt-2">
                      <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                    </div>
                  </div>
                 

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    SIMPAN</button>
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
        title: 'Add New Kelas - Administrator',
      }
    },

    data() {
      return {
        //state kelas
        kelas: {
          name: '',
        },
        //state validation
        validation: []
      }
    },

    methods: {

      //method "storeKelas"
      async storeKelas() {

        //define formData
        let formData = new FormData();

        formData.append('name', this.kelas.name)

        //sending data to action "storeKelas" vuex
        await this.$store.dispatch('admin/kelas/storeKelas', formData)
          
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

            //redirect route "admin-kelas"
            this.$router.push({
              name: 'admin-kelas'
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