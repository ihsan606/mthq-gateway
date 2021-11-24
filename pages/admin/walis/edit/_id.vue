<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue" style="background-color:white">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-users"></i> EDIT WALI SANTRI</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="updateWali">

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>FULL NAME</label>
                        <input type="text" v-model="wali.name" placeholder="Masukkan Nama WaliSantri" class="form-control">
                        <div v-if="validation.name" class="mt-2">
                          <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label> MOBILE NUMBER</label>
                        <input type="text" v-model="wali.mobile_number" placeholder="Masukkan No Hp"
                          class="form-control">
                        <div v-if="validation.mobile_number" class="mt-2">
                          <b-alert show variant="danger">{{ validation.mobile_number[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>PASSWORD</label>
                        <input type="password" v-model="wali.password" placeholder="Masukkan Password"
                          class="form-control">
                        <div v-if="validation.password" class="mt-2">
                          <b-alert show variant="danger">{{ validation.password[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>PASSWORD CONFIRMATION</label>
                        <input type="password" v-model="wali.password_confirmation"
                          placeholder="Masukkan Konfirmasi Password" class="form-control">
                      </div>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    UPDATE</button>
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
        title: 'Edit Wali Santri - Administrator',
      }
    },

    data() {
      return {
        //state wali
        wali: {
          name: '',
          mobile_number: '',
          password: '',
          password_confirmation: '',
        },
        //state validation
        validation: []
      }
    },

    //hook "asyncData"
    async asyncData({ store, route }) {
        await store.dispatch('admin/waliSantri/getDetailWali', route.params.id)
    },


    //mounted
    mounted() {
        this.wali.name = this.$store.state.admin.waliSantri.wali.name
        this.wali.mobile_number = this.$store.state.admin.waliSantri.wali.mobile_number
    },

    methods: {

      //method "updateWali"
      async updateWali() {

        //define formData
        let formData = new FormData();

        formData.append('name', this.wali.name)
        formData.append('mobile_number', this.wali.mobile_number)
        formData.append('password', this.wali.password)
        formData.append('password_confirmation', this.wali.password_confirmation)
        formData.append("_method", "PATCH")

        //sending data to action "updateWali" vuex
        await this.$store.dispatch('admin/waliSantri/updateWali', {
            waliId: this.$route.params.id,
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
              name: 'admin-walis'
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