<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div
              class="card border-0 rounded shadow-sm border-top-blue"
              style="background-color: white"
            >
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-users"></i> Ubah Status Pendaftaran</span
                >
              </div>
              <div class="card-body">
                <form @submit.prevent="updateStatus">
                  <div class="row">
                      <div class="col-md-6">
                      <div class="form-group">
                        <label>NAMA LENGKAP</label>
                        <input
                          disabled
                          type="text"
                          v-model="santri.nama"
                    
                          class="form-control"
                        />
                        <div v-if="validation.nama" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nama[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>STATUS</label>
                        <select class="form-control" v-model="santri.status">
                          <option value="">-- Pilih Status --</option>
                          <option
                            v-for="status in statuses"
                            :key="status"
                            :value="status"
                          >
                            {{ status }}
                          </option>
                        </select>
                        <div v-if="validation.status" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.status[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit">
                    <i class="fa fa-paper-plane"></i> SAVE
                  </button>
                  <button class="btn btn-warning btn-reset" type="reset">
                    <i class="fa fa-redo"></i> RESET
                  </button>
                </form>
                 <!-- <iframe v-if="santri.foto_santri" :src="santri.foto_santri" class="my-3" width="100%" height="500px"> -->
                <!-- </iframe> -->
                 <iframe v-if="santri.foto_ijazah" :src="santri.foto_ijazah" class="my-3" width="100%" height="500px">
                </iframe>
                 <iframe v-if="santri.foto_nisn" :src="santri.foto_nisn" class="my-3" width="100%" height="500px">
                </iframe>
                 <iframe v-if="santri.akte_santri" :src="santri.akte_santri" class="my-3" width="100%" height="500px">
                </iframe>
                 <iframe v-if="santri.bukti_pembayaran" :src="santri.bukti_pembayaran" class="my-3" width="100%" height="500px">
                </iframe>
                 <iframe v-if="santri.surat_rekomendasi" :src="santri.surat_rekomendasi" class="my-3" width="100%" height="500px">
                </iframe>
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
  layout: "admin",

  //meta
  head() {
    return {
      title: "Edit Status Pendaftaran Santri - Administrator",
    };
  },

  data() {
    return {
      //state santri
      santri: {
        nama: "",
        status: "",
        foto_santri: "",
        foto_ijazah: "",
        foto_nisn: "",
        akte_santri: "",
        bukti_pembayaran: "",
        surat_rekomendasi: "",
      },

      statuses: ["lulus", "belum_lulus", "ujian"],
      //state validation
      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch("admin/santriBaru/getDetailSantriBaru", route.params.id);
  },

  //mounted
  mounted() {
    this.santri.status = this.$store.state.admin.santriBaru.santribaru.status;
    this.santri.nama = this.$store.state.admin.santriBaru.santribaru.name;
    this.santri.foto_santri = this.$store.state.admin.santriBaru.santribaru.foto_santri;
    this.santri.foto_ijazah = this.$store.state.admin.santriBaru.santribaru.foto_ijazah;
    this.santri.foto_nisn = this.$store.state.admin.santriBaru.santribaru.foto_nisn;
    this.santri.akte_santri = this.$store.state.admin.santriBaru.santribaru.akte_santri;
    this.santri.bukti_pembayaran = this.$store.state.admin.santriBaru.santribaru.bukti_pembayaran;
    this.santri.surat_rekomendasi = this.$store.state.admin.santriBaru.santribaru.surat_rekomendasi;
 
  },

  methods: {
    //method "updateStatus"
    async updateStatus() {
      //define formData
      let formData = new FormData();

      formData.append("status", this.santri.status);
      formData.append("_method", "PATCH");

      //sending data to action "updateStatus" vuex
      await this.$store
        .dispatch("admin/santriBaru/updateSantriBaru", {
          santriId: this.$route.params.id,
          payload: formData,
        })

        //success
        .then(() => {
          //sweet alert
          this.$swal.fire({
            title: "BERHASIL!",
            text: "Data Berhasil Diupdate!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          //redirect route "admin-pendaftaran"
          this.$router.push({
            name: "admin-pendaftaran",
          });
        })

        //error
        .catch((error) => {
          //assign error to state "validation"
          this.validation = error.response.data;
        });
    },
  },
};
</script>

<style>
</style>