<template>
  <main class="c-main" style="background-color: #F8F9FD">
    <div class="container-fluid">
      <h5 class="my-3 text-center">Detail Data: {{ santri.name }} </h5>
      <b-list-group class="my-5">
        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Nama Santri</p>
          <p style="font-weight:500">{{santri.name}}</p>
        </b-list-group-item>

         <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Status</p>
          <b-badge  variant="success" pill>{{santri.status}}</b-badge>
         
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Angkatan</p>
          <p style="font-weight:500">{{santri.angkatan.name}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Angkatan</p>
          <p style="font-weight:500">{{santri.kelas.name}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">NISM</p>
          <p style="font-weight:500">{{santri.nism}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">NISN</p>
          <p style="font-weight:500">{{santri.nisn}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Tempat Lahir</p>
          <p style="font-weight:500">{{santri.tempat_lahir}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Tanggal Lahir</p>
          <p style="font-weight:500">{{santri.tanggal_lahir}}</p>
        </b-list-group-item>
        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Jenis Kelamin</p>
          <p style="font-weight:500">{{santri.jenis_kelamin}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Agama</p>
          <p style="font-weight:500">{{santri.agama}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Tanggal Masuk</p>
          <p style="font-weight:500">{{santri.tanggal_masuk}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">NPSN Asal</p>
          <p style="font-weight:500">{{santri.npsn_asal}}</p>
        </b-list-group-item>
      
        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Nama Sekolah Asal</p>
          <p style="font-weight:500">{{santri.nama_sekolah_asal}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Alamat Sekolah Asal</p>
          <p style="font-weight:500">{{santri.alamat_sekolah_asal}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Nama Ayah</p>
          <p style="font-weight:500">{{santri.nama_ayah}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">NIK Ayah</p>
          <p style="font-weight:500">{{santri.nik_ayah}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Pekerjaan Ayah</p>
          <p style="font-weight:500">{{santri.pekerjaan_ayah}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Nama Ibu</p>
          <p style="font-weight:500">{{santri.nama_ibu}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">NIK Ibu</p>
          <p style="font-weight:500">{{santri.nik_ibu}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Pekerjaan Ibu</p>
          <p style="font-weight:500">{{santri.pekerjaan_ibu}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">No Hp</p>
          <p style="font-weight:500">{{santri.no_hp}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Alamat</p>
          <p style="font-weight:500">{{santri.alamat}}</p>
        </b-list-group-item>
      </b-list-group>
      <div class="spacer">
          .
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //layout
  layout: "wali",

  //meta
  head() {
    return {
      title: "Show Santri - Wali Santri",
    };
  },

  data() {
    return {
      //state santri
      

   
    };
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch("wali/santri/getDetailSantri", route.params.id);
  },

  computed: {
    //wali
    santri() {
      return this.$store.state.wali.santri.santri
    },
    
  },

//   //computed
//   mounted(){
//     this.santri.name                = this.$store.state.admin.santri.santri.name
//     this.santri.wali_id             = this.$store.state.admin.santri.santri.wali_id
//     this.santri.status              = this.$store.state.admin.santri.santri.status
//     this.santri.nism                = this.$store.state.admin.santri.santri.nism
//     this.santri.nisn                = this.$store.state.admin.santri.santri.nisn
//     this.santri.nik                 = this.$store.state.admin.santri.santri.nik
//     this.santri.tempat_lahir        = this.$store.state.admin.santri.santri.tempat_lahir
//     this.santri.tanggal_lahir       = this.$store.state.admin.santri.santri.tanggal_lahir
//     this.santri.jenis_kelamin       = this.$store.state.admin.santri.santri.jenis_kelamin
//     this.santri.agama               = this.$store.state.admin.santri.santri.agama
//     this.santri.tanggal_masuk       = this.$store.state.admin.santri.santri.tanggal_masuk
//     this.santri.npsn_asal           = this.$store.state.admin.santri.santri.npsn_asal
//     this.santri.nama_sekolah_asal   = this.$store.state.admin.santri.santri.nama_sekolah_asal
//     this.santri.alamat_sekolah_asal = this.$store.state.admin.santri.santri.alamat_sekolah_asal
//     this.santri.nama_ayah           = this.$store.state.admin.santri.santri.nama_ayah
//     this.santri.nik_ayah            = this.$store.state.admin.santri.santri.nik_ayah
//     this.santri.pekerjaan_ayah      = this.$store.state.admin.santri.santri.pekerjaan_ayah
//     this.santri.nama_ibu            = this.$store.state.admin.santri.santri.nama_ibu
//     this.santri.nik_ibu             = this.$store.state.admin.santri.santri.nik_ibu
//     this.santri.pekerjaan_ibu       = this.$store.state.admin.santri.santri.pekerjaan_ibu
//     this.santri.alamat              = this.$store.state.admin.santri.santri.alamat
//     this.santri.no_hp               = this.$store.state.admin.santri.santri.no_hp
//     this.santri.kelas_id            = this.$store.state.admin.santri.santri.kelas_id
//     this.santri.angkatan_id         = this.$store.state.admin.santri.santri.angkatan_id
//     this.santri.rapot_id            = this.$store.state.admin.santri.santri.rapot_id
//   },

 
};
</script>

<style>
</style>