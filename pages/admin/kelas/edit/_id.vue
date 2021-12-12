<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> EDIT KELAS</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="updateKelas">

                  <div class="form-group">
                    <label>NAMA KELAS</label>
                    <input type="text" v-model="kelas.name" placeholder="Masukkan Nama Kelas" class="form-control">
                    <div v-if="validation.name" class="mt-2">
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
                    :items="kelas.santris"
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
        title: 'Edit Kelas - Administrator',
      }
    },

    data() {
      return {
        //state category
        kelas: {
          name: '',
          santris:[],
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
        await store.dispatch('admin/kelas/getDetailKelas', route.params.id)
    },

    computed: {
      santris() {
      return this.$store.state.admin.kelas.kelas;
    },
    },


    //mounted
    mounted() {
        this.kelas.name = this.$store.state.admin.kelas.kelas.name
        this.kelas.santris = this.$store.state.admin.kelas.kelas.santris
    },

    //method
    methods: {

      //destroySantri
    destroySantri(id) {
      this.$swal
        .fire({
          title: "APAKAH ANDA YAKIN ?",
          text: "INGIN MENGHAPUS DATA INI !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "YA, HAPUS!",
          cancelButtonText: "TIDAK",
        })
        .then((result) => {
          if (result.isConfirmed) {
            //dispatch to action "destroyAngkatan" vuex
            this.$store
              .dispatch("admin/santri/destroySantri", id)
              .then(() => {
                //refresh data
                this.$nuxt.refresh();

                //alert
                this.$swal.fire({
                  title: "BERHASIL!",
                  text: "Data Berhasil Dihapus!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                });
              });
          }
        });
    },

      //method "updateKelas"
      async updateKelas() {

        //define formData
        let formData = new FormData();

        formData.append('name', this.kelas.name)
        formData.append("_method", "PATCH")

        //sending data to action "updateKelas" vuex
        await this.$store.dispatch('admin/kelas/updateKelas', {
            kelasId: this.$route.params.id,
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