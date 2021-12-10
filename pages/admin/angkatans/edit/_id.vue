<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> EDIT ANGKATAN</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="updateAngkatan">

                  <div class="form-group">
                    <label>NAMA ANGKATAN</label>
                    <input type="text" v-model="angkatan.name" placeholder="Masukkan Nama Angkatan" class="form-control">
                    <div v-if="validation.name" class="mt-2">
                      <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>NAMA ALIAS</label>
                    <input type="text" v-model="angkatan.alias" placeholder="Masukkan Nama Angkatan" class="form-control">
                    <div v-if="validation.alias" class="mt-2">
                      <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    UPDATE</button>
                  <button class="btn btn-warning btn-reset" type="reset"><i class="fa fa-redo"></i>
                    RESET</button>

                </form>
                
                <b-table
                    striped
                    bordered
                    hover
                    :items="angkatan.santris"
                    :fields="fields"
                    show-empty
                    class="mt-3"
                  >
                    <template v-slot:cell(image)="data">
                      <img
                        class="img-fluid"
                        width="200"
                        :src="data.item.image"
                      />
                    </template>
                    <template v-slot:cell(actions)="row">
                      <b-button
                        :to="{
                          name: 'admin-santris-edit-id',
                          params: { id: row.item.id },
                        }"
                        variant="info"
                        size="sm"
                      >
                        EDIT
                      </b-button>
                      <b-button
                        variant="danger"
                        size="sm"
                        @click="destroySantri(row.item.id)"
                        >DELETE</b-button
                      >
                    </template>
                  </b-table>
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
        title: 'Edit Angkatan - Administrator',
      }
    },

    data() {
      return {
        //state category
        angkatan: {
          name: '',
          alias: '',
          santris:[]
        },

        fields: [
        {
          label: "Santri",
          key: "name",
          tdClass: "text-left",
        },
        {
          label: "NISM",
          key: "nism",
          tdClass: "text-left",
        },
        {
          label: "Angkatan",
          key: "angkatan.name",
          tdClass: "text-left",
        },
        {
          label: "Kelas",
          key: "kelas.name",
          tdClass: "text-left",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],
        //state validation
        validation: []
      }
    },

    //hook "asyncData"
    async asyncData({ store, route }) {
        await store.dispatch('admin/angkatan/getDetailAngkatan', route.params.id)
    },


    //mounted
    mounted() {
        this.angkatan.name = this.$store.state.admin.angkatan.angkatan.name,
        this.angkatan.alias = this.$store.state.admin.angkatan.angkatan.alias,
        this.angkatan.santris = this.$store.state.admin.angkatan.angkatan.santris
    },

    //method
    methods: {

      //method "updateAngkatan"
      async updateAngkatan() {

        //define formData
        let formData = new FormData();

        formData.append('name', this.angkatan.name)
        formData.append('alias', this.angkatan.alias)
        formData.append("_method", "PATCH")

        //sending data to action "updateAngkatan" vuex
        await this.$store.dispatch('admin/angkatan/updateAngkatan', {
            angkatanId: this.$route.params.id,
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

            //redirect route "admin-angkatans"
            this.$router.push({
              name: 'admin-angkatans'
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