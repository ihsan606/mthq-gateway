<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> Tambah Jenis Tingkatan Baru</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeTingkatan">

                  <div class="form-group">
                    <label>NAMA TINGKAT</label>
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
        title: 'Add New Tingkatan - Administrator',
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

      //method "storeTingkatan"
      async storeTingkatan() {

        //define formData
        let formData = new FormData();

        formData.append('name', this.kelas.name)

        //sending data to action "storeJenisTingkatan" vuex
        await this.$store.dispatch('admin/jenisTingkatan/storeJenisTingkatan', formData)
        
          
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

            //redirect route "admin-tingkatan"
            this.$router.push({
              name: 'admin-tingkatan'
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