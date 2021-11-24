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
                  ><i class="fa fa-users"></i> EDIT SANTRI</span
                >
              </div>
              <div class="card-body">
                <form @submit.prevent="updateSantri">
                  <div class="row">
                    <!-- input nama start -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>FULL NAME</label>
                        <input
                          type="text"
                          v-model="santri.name"
                          placeholder="Masukkan Nama Santri"
                          class="form-control"
                        />
                        <div v-if="validation.name" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.name[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <!-- input nama end -->
                    <div class="col-md-6">
                      <!-- input nik start -->
                      <div class="form-group">
                        <label>NIK</label>
                        <input
                          type="text"
                          v-model="santri.nik"
                          placeholder="Masukkan NIK santri"
                          class="form-control"
                        />
                        <div v-if="validation.nik" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nik[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input nik end -->
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <!-- input status start -->
                      <div class="form-group">
                        <label>STATUS</label>
                        <select class="form-control" v-model="santri.status">
                          <option value="">-- Pilih Status --</option>
                          <option
                            v-for="s in status"
                            :key="s"
                            :value="s"
                          >
                            {{ s }}
                          </option>
                        </select>
                        <div v-if="validation.wali_id" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.wali_id[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input status end -->
                    </div>
                    <div class="col-md-6">
                      <!-- input wali id start -->
                      <div class="form-group">
                        <label>WALI SANTRI ID</label>
                        <select class="form-control" v-model="santri.wali_id">
                          <option value="">-- Pilih Wali Santri Id --</option>
                          <option
                            v-for="wali in walis"
                            :key="wali.id"
                            :value="wali.id"
                          >
                            {{ wali.name }}
                          </option>
                        </select>
                        <div v-if="validation.wali_id" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.wali_id[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input wali id end -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <!-- input nisn start -->
                      <div class="form-group">
                        <label>NISN</label>
                        <input
                          type="text"
                          v-model="santri.nisn"
                          placeholder="Masukkan NISN"
                          class="form-control"
                        />
                        <div v-if="validation.nisn" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nisn[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input nisn end -->
                    </div>
                    <div class="col-md-6">
                      <!-- input nism start -->
                      <div class="form-group">
                        <label>NISM</label>
                        <input
                          type="text"
                          v-model="santri.nism"
                          placeholder="Masukkan NISM"
                          class="form-control"
                        />
                        <div v-if="validation.nism" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nism[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input nism end -->
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <!-- input tempat_lahir start -->
                      <div class="form-group">
                        <label>Tempat Lahir</label>
                        <input
                          type="text"
                          v-model="santri.tempat_lahir"
                          placeholder="Masukkan Tempat Kelahiran"
                          class="form-control"
                        />
                        <div v-if="validation.tempat_lahir" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.tempat_lahir[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input tempat_lahir end -->
                    </div>
                    <div class="col-md-6">
                      <!-- input tanggal lahir start-->
                      <div class="form-group">
                        <label>TANGGAL LAHIR</label>
                        <input
                          type="date"
                          v-model="santri.tanggal_lahir"
                          placeholder="Masukkan Tanggal Lahir"
                          class="form-control"
                        />
                        <div v-if="validation.tanggal_lahir" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.tanggal_lahir[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input tanggal_lahir end -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <!-- input jenis kelamin start -->
                      <div class="form-group">
                        <label>JENIS KELAMIN</label>
                        <input
                          type="text"
                          v-model="santri.jenis_kelamin"
                          placeholder="Masukkan Jenis Kelamin"
                          class="form-control"
                        />
                        <div v-if="validation.jenis_kelamin" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.jenis_kelamin[0]
                          }}</b-alert>
                        </div>
                      </div>
                      <!-- input jenis kelamin end -->
                    </div>
                    <div class="col-md-6">
                      <!-- input agama -->
                     <div class="form-group">
                        <label>AGAMA {{santri.agama}}</label>
                        <select class="form-control" v-model="santri.agama">
                          <option value="">-- Pilih Agama --</option>
                          <option
                            v-for="a in agama"
                            :key="a"
                            :value="a"
                          >
                            {{ a }}
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
                      <!-- input tanggal masuk -->
                      <div class="form-group">
                        <label>TANGGAL MASUK</label>
                        <input
                          type="date"
                          v-model="santri.tanggal_masuk"
                          placeholder="Masukkan Tanggal Masuk"
                          class="form-control"
                        />
                        <div v-if="validation.tanggal_masuk" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.tanggal_masuk[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <!-- input npsn_asal -->
                      <div class="form-group">
                        <label>NPSN ASAL</label>
                        <input
                          type="text"
                          v-model="santri.npsn_asal"
                          placeholder="Masukkan NPSN Asal"
                          class="form-control"
                        />
                        <div v-if="validation.npsn_asal" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.npsn_asal[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <!-- input asal sekolah -->
                      <div class="form-group">
                        <label>NAMA SEKOLAH ASAL</label>
                        <input
                          type="text"
                          v-model="santri.nama_sekolah_asal"
                          placeholder="Masukkan Nama Sekolah Asal"
                          class="form-control"
                        />
                        <div v-if="validation.nama_sekolah_asal" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nama_sekolah_asal[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <!-- input alamat sekolah asal -->
                      <div class="form-group">
                        <label>ALAMAT SEKOLAH ASAL</label>
                        <input
                          type="text"
                          v-model="santri.alamat_sekolah_asal"
                          placeholder="Masukkan Alamat Sekolah Asal"
                          class="form-control"
                        />
                        <div v-if="validation.alamat_sekolah_asal" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.alamat_sekolah_asal[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <!-- input nama ayah -->
                      <div class="form-group">
                        <label>NAMA AYAH</label>
                        <input
                          type="text"
                          v-model="santri.nama_ayah"
                          placeholder="Masukkan Nama Ayah"
                          class="form-control"
                        />
                        <div v-if="validation.nama_ayah" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nama_ayah[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <!-- input nik ayah -->
                      <div class="form-group">
                        <label>NIK AYAH</label>
                        <input
                          type="text"
                          v-model="santri.nik_ayah"
                          placeholder="Masukkan NIK Ayah"
                          class="form-control"
                        />
                        <div v-if="validation.nik_ayah" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nik_ayah[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <!-- input pekerjaan ayah -->
                      <div class="form-group">
                        <label>PEKERJAAN_AYAH</label>
                        <input
                          type="text"
                          v-model="santri.pekerjaan_ayah"
                          placeholder="Masukkan Pekerjaan Ayah"
                          class="form-control"
                        />
                        <div v-if="validation.pekerjaan_ayah" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.pekerjaan_ayah[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <!-- input nama Ibu -->
                      <div class="form-group">
                        <label>NAMA IBU</label>
                        <input
                          type="text"
                          v-model="santri.nama_ibu"
                          placeholder="Masukkan Nama Ibu"
                          class="form-control"
                        />
                        <div v-if="validation.nama_ibu" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nama_ibu[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <!-- input nik Ibu -->
                      <div class="form-group">
                        <label>NIK IBU</label>
                        <input
                          type="text"
                          v-model="santri.nik_ibu"
                          placeholder="Masukkan NIK Ibu"
                          class="form-control"
                        />
                        <div v-if="validation.nik_ibu" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nik_ibu[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <!-- input pekerjaan Ibu -->
                      <div class="form-group">
                        <label>PEKERJAAN IBU</label>
                        <input
                          type="text"
                          v-model="santri.pekerjaan_ibu"
                          placeholder="Masukkan Pekerjaan Ibu"
                          class="form-control"
                        />
                        <div v-if="validation.pekerjaan_ibu" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.pekerjaan_ibu[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>ANGKATAN</label>
                        <select
                          class="form-control"
                          v-model="santri.angkatan_id"
                        >
                          <option value="">-- Pilih Angkatan --</option>
                          <option
                            v-for="angkatan in angkatans"
                            :key="angkatan.id"
                            :value="angkatan.id"
                          >
                            {{ angkatan.name }}
                          </option>
                        </select>
                        <div v-if="validation.angkatan_id" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.angkatan_id[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>KELAS {{santri.kelas_id}}</label>
                        <select class="form-control" v-model="santri.kelas_id">
                          <option value="">-- Pilih KELAS --</option>
                          <option
                            v-for="kelas in kelases"
                            :key="kelas.id"
                            :value="kelas.id"
                          >
                            {{ kelas.name }}
                          </option>
                        </select>
                        <div v-if="validation.kelas_id" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.kelas_id[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NO HP</label>
                        <input
                          type="text"
                          v-model="santri.no_hp"
                          placeholder="Masukkan No Hp"
                          class="form-control"
                        />
                        <div v-if="validation.no_hp" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.no_hp[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Alamat</label>
                        <input
                          type="text"
                          v-model="santri.alamat"
                          placeholder="Masukkan Alamat"
                          class="form-control"
                        />
                        <div v-if="validation.alamat" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.alamat[0]
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
      title: "Edit Wali Santri - Administrator",
    };
  },

  data() {
    return {
      //state santri
      santri: {
        name: "",
        wali_id: "",
        status: "",
        nism: "",
        nisn: "",
        nik: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        agama: "",
        tanggal_masuk: "",
        npsn_asal: "",
        nama_sekolah_asal: "",
        alamat_sekolah_asal: "",
        nama_ayah: "",
        nik_ayah: "",
        pekerjaan_ayah: "",
        nama_ibu: "",
        nik_ibu: "",
        pekerjaan_ibu: "",
        alamat: "",
        no_hp: "",
        kelas_id: "",
        angkatan_id: "",
        rapot_id: "",
      },

      status: ["baru", "aktif", "lulus"],

      agama: ['islam','kristen','hindu','buddha','konghucu'],
      //state validation
      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch("admin/santri/getDetailSantri", route.params.id);
    await store.dispatch("admin/waliSantri/getListWali");
    await store.dispatch("admin/angkatan/getListAngkatan");
    await store.dispatch("admin/kelas/getListKelas");
  },

  computed: {
    //wali
    walis() {
      return this.$store.state.admin.waliSantri.listWali
    },
    angkatans() {
      return this.$store.state.admin.angkatan.listAngkatan
    },
    kelases(){
      return this.$store.state.admin.kelas.listKelas
    }
  },

  //computed
  mounted(){
    this.santri.name                = this.$store.state.admin.santri.santri.name
    this.santri.wali_id             = this.$store.state.admin.santri.santri.wali_id
    this.santri.status              = this.$store.state.admin.santri.santri.status
    this.santri.nism                = this.$store.state.admin.santri.santri.nism
    this.santri.nisn                = this.$store.state.admin.santri.santri.nisn
    this.santri.nik                 = this.$store.state.admin.santri.santri.nik
    this.santri.tempat_lahir        = this.$store.state.admin.santri.santri.tempat_lahir
    this.santri.tanggal_lahir       = this.$store.state.admin.santri.santri.tanggal_lahir
    this.santri.jenis_kelamin       = this.$store.state.admin.santri.santri.jenis_kelamin
    this.santri.agama               = this.$store.state.admin.santri.santri.agama
    this.santri.tanggal_masuk       = this.$store.state.admin.santri.santri.tanggal_masuk
    this.santri.npsn_asal           = this.$store.state.admin.santri.santri.npsn_asal
    this.santri.nama_sekolah_asal   = this.$store.state.admin.santri.santri.nama_sekolah_asal
    this.santri.alamat_sekolah_asal = this.$store.state.admin.santri.santri.alamat_sekolah_asal
    this.santri.nama_ayah           = this.$store.state.admin.santri.santri.nama_ayah
    this.santri.nik_ayah            = this.$store.state.admin.santri.santri.nik_ayah
    this.santri.pekerjaan_ayah      = this.$store.state.admin.santri.santri.pekerjaan_ayah
    this.santri.nama_ibu            = this.$store.state.admin.santri.santri.nama_ibu
    this.santri.nik_ibu             = this.$store.state.admin.santri.santri.nik_ibu
    this.santri.pekerjaan_ibu       = this.$store.state.admin.santri.santri.pekerjaan_ibu
    this.santri.alamat              = this.$store.state.admin.santri.santri.alamat
    this.santri.no_hp               = this.$store.state.admin.santri.santri.no_hp
    this.santri.kelas_id            = this.$store.state.admin.santri.santri.kelas_id
    this.santri.angkatan_id         = this.$store.state.admin.santri.santri.angkatan_id
    this.santri.rapot_id            = this.$store.state.admin.santri.santri.rapot_id
  },

  methods: {
    //method "updateWali"
    async updateSantri() {
      //define formData
      let formData = new FormData();

      formData.append("name", this.santri.name);
      formData.append("wali_id", this.santri.wali_id);
      formData.append("status", this.santri.status);
      formData.append("nism", this.santri.nism);
      formData.append("nisn", this.santri.nisn);
      formData.append("nik", this.santri.nik);
      formData.append("tempat_lahir", this.santri.tempat_lahir);
      formData.append("tanggal_lahir", this.santri.tanggal_lahir);
      formData.append("jenis_kelamin", this.santri.jenis_kelamin);
      formData.append("agama", this.santri.agama);
      formData.append("tanggal_masuk", this.santri.tanggal_masuk);
      formData.append("npsn_asal", this.santri.npsn_asal);
      formData.append("nama_sekolah_asal", this.santri.nama_sekolah_asal);
      formData.append("alamat_sekolah_asal", this.santri.alamat_sekolah_asal);
      formData.append("nama_ayah", this.santri.nama_ayah);
      formData.append("nik_ayah", this.santri.nik_ayah);
      formData.append("pekerjaan_ayah", this.santri.pekerjaan_ayah);
      formData.append("nama_ibu", this.santri.nama_ibu);
      formData.append("nik_ibu", this.santri.nik_ibu);
      formData.append("pekerjaan_ibu", this.santri.pekerjaan_ibu);
      formData.append("alamat", this.santri.alamat);
      formData.append("no_hp", this.santri.no_hp);
      formData.append("kelas_id", this.santri.kelas_id);
      formData.append("angkatan_id", this.santri.angkatan_id);
      formData.append("_method", "PATCH");

      //sending data to action "updateWali" vuex
      await this.$store
        .dispatch("admin/santri/updateSantri", {
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

          //redirect route "admin-santris"
          this.$router.push({
            name: "admin-santris",
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