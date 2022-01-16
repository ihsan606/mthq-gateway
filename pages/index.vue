<template>
  <main class="c-main" style="background-color: white">
    <div class="container-xl">
      <div class="header">
        <div class="col-md-12">
          <h1 class="rounded">FORMULIR PENDAFTARAN SANTRI BARU 2022</h1>
          <p class="mb-5">Ma'had Tahfidz Hidayatul Quran</p>

        </div>
      </div>
      <div class="card border-0 rounded shadow-sm border-top-blue" style="background-color: white">
        <div class="card-body">
      <div class="bform">
        <form @submit.prevent="storeSantri">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  v-model="santri.name"
                  placeholder="Nama Lengkap"
                  class="form-control"
                />
                <div v-if="validation.name" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.name[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>NISN</label>
                <input
                  type="text"
                  v-model="santri.nisn"
                  placeholder="NISN"
                  class="form-control"
                />
                <div v-if="validation.nisn" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.nisn[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>NIK</label>
                <input
                  type="text"
                  v-model="santri.nik"
                  placeholder="NIK"
                  class="form-control"
                />
                <div v-if="validation.nik" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.nik[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Berat Badan</label>
                <input
                  type="number"
                  v-model="santri.berat_badan"
                  placeholder="0 Kg"
                  class="form-control"
                />
                <div v-if="validation.berat_badan" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.berat_badan[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>Tinggi Badan</label>
                <input
                  type="number"
                  v-model="santri.tinggi_badan"
                  placeholder="0 cm"
                  class="form-control"
                />
                <div v-if="validation.tinggi_badan" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.tinggi_badan[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Tempat Lahir</label>
                <input
                  type="text"
                  v-model="santri.tempat_lahir"
                  placeholder="Tempat Lahir"
                  class="form-control"
                />
                <div v-if="validation.tempat_lahir" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.tempat_lahir[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>Tanggal Lahir</label>
                <input
                  type="date"
                  v-model="santri.tanggal_lahir"
                  placeholder="Tanggal Lahir"
                  class="form-control"
                />
                <div v-if="validation.tanggal_lahir" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.tanggal_lahir[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Tingkat</label>
                <select
                  class="form-control"
                  v-model="santri.jenis_tingkatan_id"
                >
                  <option value="">-- pilih tingkat --</option>
                  <option
                    v-for="tingkat in jenisTingkatans"
                    :key="tingkat.id"
                    :value="tingkat.id"
                  >
                    {{ tingkat.name }}
                  </option>
                </select>
                <div v-if="validation.jenis_tingkatan_id" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.jenis_tingkatan_id[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>Jenis Kelamin</label>
                <div class="row">
                  <b-form-radio
                    class="mx-3"
                    v-model="santri.jenis_kelamin"
                    name="kelamin"
                    value="Laki-Laki"
                    >Laki-Laki</b-form-radio
                  >
                  <b-form-radio
                    v-model="santri.jenis_kelamin"
                    name="kelamin"
                    value="Perempuan"
                    >Perempuan</b-form-radio
                  >
                </div>
                <div v-if="validation.jenis_kelamin" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.jenis_kelamin[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Anak Ke-</label>
                <input
                  type="number"
                  v-model="santri.anak_ke"
                  placeholder="0"
                  class="form-control"
                />
                <div v-if="validation.anak_ke" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.anak_ke[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>Jumlah Saudara Kandung</label>
                <input
                  type="number"
                  v-model="santri.jumlah_saudara_kandung"
                  placeholder="0"
                  class="form-control"
                />
                <div v-if="validation.jumlah_saudara_kandung" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.jumlah_saudara_kandung[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>NPSN Sekolah Asal</label>
                <input
                  type="text"
                  v-model="santri.npsn_sekolah_asal"
                  placeholder="NPSN Sekolah Asal"
                  class="form-control"
                />
                <div v-if="validation.npsn_sekolah_asal" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.npsn_sekolah_asal[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>Nama Sekolah Asal</label>
                <input
                  type="text"
                  v-model="santri.nama_sekolah_asal"
                  placeholder="Nama Sekolah Asal"
                  class="form-control"
                />
                <div v-if="validation.nama_sekolah_asal" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.nama_sekolah_asal[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Alamat Sekolah Asal</label>
                <input
                  type="text"
                  v-model="santri.alamat_sekolah_asal"
                  placeholder="Alamat Sekolah Asal"
                  class="form-control"
                />
                <div v-if="validation.alamat_sekolah_asal" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.alamat_sekolah_asal[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>Kode Pos</label>
                <input
                  type="text"
                  v-model="santri.kode_pos"
                  placeholder="Kode Pos"
                  class="form-control"
                />
                <div v-if="validation.kode_pos" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.kode_pos[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Nama Ayah</label>
                <input
                  type="text"
                  v-model="santri.nama_ayah"
                  placeholder="Nama Ayah"
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
              <div class="form-group">
                <label>Nama Ibu</label>
                <input
                  type="text"
                  v-model="santri.nama_ibu"
                  placeholder="Nama Ibu"
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
              <div class="form-group">
                <label>NIK Ayah</label>
                <input
                  type="text"
                  v-model="santri.nik_ayah"
                  placeholder="NIK Ayah"
                  class="form-control"
                />
                <div v-if="validation.nik_ayah" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.nik_ayah[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>NIK Ibu</label>
                <input
                  type="text"
                  v-model="santri.nik_ibu"
                  placeholder="NIK Ibu"
                  class="form-control"
                />
                <div v-if="validation.nik_ibu" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.nik_ibu[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Pekerjaan Ayah</label>
                <input
                  type="text"
                  v-model="santri.pekerjaan_ayah"
                  placeholder="Pekerjaan Ayah"
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
              <div class="form-group">
                <label>Pekerjaan Ibu</label>
                <input
                  type="text"
                  v-model="santri.pekerjaan_ibu"
                  placeholder="Pekerjaan Ibu"
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
                <label>Nomor Kartu Keluarga</label>
                <input
                  type="text"
                  v-model="santri.no_kk"
                  placeholder="Nomor Kartu Keluarga"
                  class="form-control"
                />
                <div v-if="validation.no_kk" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.no_kk[0]
                  }}</b-alert>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>No Hp</label>
                <input
                  type="text"
                  v-model="santri.no_hp"
                  placeholder="contoh: 085157483455"
                  class="form-control"
                />
                <div v-if="validation.no_hp" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.no_hp[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Alamat</label>
                <input
                  type="text"
                  v-model="santri.alamat"
                  placeholder="Alamat"
                  class="form-control"
                />
                <div v-if="validation.alamat" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.alamat[0]
                  }}</b-alert>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-6">
              <div class="form-group">
                <label>Rata-Rata Penghasilan</label>
                <input
                  type="text"
                  v-model="santri.rata_rata_penghasilan"
                  placeholder="Rata-Rata Penghasilan"
                  class="form-control"
                />
                <div v-if="validation.rata_rata_penghasilan" class="mt-2">
                  <b-alert show variant="danger">{{
                    validation.rata_rata_penghasilan[0]
                  }}</b-alert>
                </div>
              </div>
            </div> -->
          </div>

          <div class="row">

          <div class="col-md-6">
            <div class="form-group">
              <label>Password</label>
              <input
                type="text"
                v-model="santri.password"
                placeholder="Password"
                class="form-control"
              />
              <div v-if="validation.password" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.password[0]
                }}</b-alert>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>Konfirmasi Password</label>
              <input
                type="text"
                v-model="santri.password_confirmation"
                placeholder="Konfirmasi Password"
                class="form-control"
              />
              <div v-if="validation.password_confirmation" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.password_confirmation[0]
                }}</b-alert>
              </div>
            </div>
          </div>

          </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Foto Santri</label>
              <b-form-file
                @change="handleFileFotoSantriChange"
                size="sm"
              ></b-form-file>
              <div v-if="validation.foto_santri" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.foto_santri[0]
                }}</b-alert>
              </div>
            </div>
          </div>
<!--
          <div class="col-md-12">
            <div class="form-group">
              <label>Ijazah</label>
              <b-form-file
                @change="handleFileIjazahChange"
                size="sm"
              ></b-form-file>
              <div v-if="validation.foto_ijazah" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.foto_ijazah[0]
                }}</b-alert>
              </div>
            </div>
          </div> -->

          <div class="col-md-12">
            <div class="form-group">
              <label>Foto NISN</label>
              <b-form-file
                @change="handleFileNISNChange"
                size="sm"
              ></b-form-file>
              <div v-if="validation.foto_nisn" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.foto_nisn[0]
                }}</b-alert>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label>Akte Santri</label>
              <b-form-file
                @change="handleFileAkteChange"
                size="sm"
              ></b-form-file>
              <div v-if="validation.akte_santri" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.akte_santri[0]
                }}</b-alert>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label>Bukti Pembayaran</label>
              <b-form-file
                @change="handleFileBuktiAkteChange"
                size="sm"
              ></b-form-file>
              <div v-if="validation.bukti_pembayaran" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.bukti_pembayaran[0]
                }}</b-alert>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label>Surat Rekomendasi</label>
              <b-form-file
                @change="handleFileRekomendasiChange"
                size="sm"
              ></b-form-file>
              <div v-if="validation.surat_rekomendasi" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.surat_rekomendasi[0]
                }}</b-alert>
              </div>
            </div>
          </div>
        </div>

          <button class="btn btn-info mx-2 rounded btn-submit" type="submit">
            <i class="fa fa-paper-plane"></i> Kirim
          </button>
        </form>

      </div>

        </div>
      </div>
          <div class="space my-5">.</div>
    </div>
  </main>
</template>

<script>
import { mdbInput } from "mdbvue";

export default {
  components: {
    mdbInput,
  },

  data() {
    return {
      //state santri
      santri: {
        name: "",
        berat_badan: "",
        tinggi_badan: "",
        jenis_tingkatan_id: "",
        kewarganegaraan: "",
        no_paspor: "",
        nism: "",
        nisn: "",
        nik: "",
        no_kip: "",
        no_pkh: "",
        no_kks: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        anak_ke: "",
        jumlah_saudara_kandung: "",
        nama_sekolah_asal: "",
        npsn_sekolah_asal: "",
        alamat_sekolah_asal: "",
        agama: "",
        tanggal_masuk: "",
        hoby: "",
        cita_cita: "",
        kebutuhan_khusus: "",
        kode_pos: "",
        nama_ayah: "",
        nik_ayah: "",
        pekerjaan_ayah: "",
        pendidikan_ayah: "",
        rata_rata_penghasilan: "",
        telepon_ayah: "",
        nama_ibu: "",
        nik_ibu: "",
        pekerjaan_ibu: "",
        pendidikan_ibu: "",
        telepon_ibu: "",
        no_kk: "",
        hubungan_wali: "",
        nik_wali: "",
        nama_wali: "",
        pekerjaan_wali: "",
        alamat: "",
        no_hp: "",
        foto_santri: "",
        foto_ijazah: "",
        foto_nisn: "",
        akte_santri: "",
        bukti_pembayaran: "",
        surat_rekomendasi: "",
        password: "",
        password_confirmation: "",

      },

      user:{},

      hoby: [
        "olahraga",
        "kesenian",
        "membaca",
        "menulis",
        "jalan-jalan",
        "lainnya",
      ],
      cita_cita: [
        "wiraswasta",
        "seniman",
        "ilmuwan",
        "pns",
        "tni/polri",
        "guru/dosen",
        "lainnya",
      ],
      kebutuhan_khusus: [
        "tidak_ada",
        "tuna_wicara",
        "tuna_netra",
        "tuna_rungu",
        "tuna_grahita",
        "tuna_daksa",
        "bakat_istimewa",
        "kesulitan_belajar",
      ],
      agama: ["islam", "kristen", "hindu", "buddha", "konghucu"],
      //state validation
      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("santribaru/jenisTingkatan/getListTingkat");
  },

  //computed
  computed: {
    //kelas
    jenisTingkatans() {
      return this.$store.state.santribaru.jenisTingkatan.listTingkat;
    },
  },

  methods: {
    //handle file upload
    handleFileFotoSantriChange(e) {
      //get foto_santri
      if(e.target.files[0]){
        let image = (this.santri.foto_santri = e.target.files[0]);

      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "category.image" to null
        this.santri.foto_santri = null;

        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung! Pastikan Berupa img / png /jpg!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      }

    },

    handleFileIjazahChange(e) {
      //get foto_santri
      if(e.target.files[0]){
        let image = (this.santri.foto_ijazah = e.target.files[0]);
      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";
        //set state "category.image" to null
        this.santri.foto_ijazah = null;
        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung, Pastikan Berupa img / png /jpg!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      }

    },

    handleFileNISNChange(e) {
      if(e.target.files[0]){
        //get foto_santri
      let image = (this.santri.foto_nisn = e.target.files[0]);
      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";
        //set state "category.image" to null
        this.santri.foto_nisn = null;
        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung, Pastikan Berupa img / png /jpg!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      }

    },

    handleFileAkteChange(e) {
      if(e.target.files[0]){
         //get foto_santri
      let image = (this.santri.akte_santri = e.target.files[0]);
      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";
        //set state "category.image" to null
        this.santri.akte_santri = null;
        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung, Pastikan Berupa img / png /jpg!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      }

    },

    handleFileBuktiAkteChange(e) {
      if (e.target.files[0]){
         //get bukti pembayaran
      let image = (this.santri.bukti_pembayaran = e.target.files[0]);
      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";
        //set state "category.image" to null
        this.santri.bukti_pembayaran = null;
        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung, Pastikan Berupa img / png /jpg!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      }

    },

    handleFileRekomendasiChange(e) {
      if (e.target.files[0]){
         //get bukti pembayaran
      let image = (this.santri.surat_rekomendasi = e.target.files[0]);
      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";
        //set state "category.image" to null
        this.santri.surat_rekomendasi = null;
        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung, Pastikan Berupa img / png /jpg!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      }

    },
    //method "storeSantri"
    async storeSantri() {

      //define formData
      let formData = new FormData();

      formData.append("name", this.santri.name);
      formData.append("berat_badan", this.santri.berat_badan);
      formData.append("tinggi_badan", this.santri.tinggi_badan);
      formData.append("jenis_tingkatan_id", this.santri.jenis_tingkatan_id);
      formData.append("kewarganegaraan", this.santri.kewarganegaraan);
      formData.append("no_paspor", this.santri.no_paspor);
      formData.append("nism", this.santri.nism);
      formData.append("nisn", this.santri.nisn);
      formData.append("nik", this.santri.nik);
      formData.append("no_kip", this.santri.no_kip);
      formData.append("no_pkh", this.santri.no_pkh);
      formData.append("no_kks", this.santri.no_kks);
      formData.append("tempat_lahir", this.santri.tempat_lahir);
      formData.append("tanggal_lahir", this.santri.tanggal_lahir);
      formData.append("jenis_kelamin", this.santri.jenis_kelamin);
      formData.append("anak_ke", this.santri.anak_ke);
      formData.append(
        "jumlah_saudara_kandung",
        this.santri.jumlah_saudara_kandung
      );
      formData.append("nama_sekolah_asal", this.santri.nama_sekolah_asal);
      formData.append("npsn_sekolah_asal", this.santri.npsn_sekolah_asal);
      formData.append("alamat_sekolah_asal", this.santri.alamat_sekolah_asal);
      formData.append("tanggal_masuk", this.santri.tanggal_masuk);
      formData.append("agama", this.santri.agama);
      formData.append("hoby", this.santri.hoby);
      formData.append("cita_cita", this.santri.cita_cita);
      formData.append("kebutuhan_khusus", this.santri.kebutuhan_khusus);
      formData.append("kode_pos", this.santri.kode_pos);
      formData.append("nama_ayah", this.santri.nama_ayah);
      formData.append("nik_ayah", this.santri.nik_ayah);
      formData.append("pekerjaan_ayah", this.santri.pekerjaan_ayah);
      formData.append("pendidikan_ayah", this.santri.pendidikan_ayah);
      formData.append(
        "rata_rata_penghasilan",
        this.santri.rata_rata_penghasilan
      );
      formData.append("telepon_ayah", this.santri.telepon_ayah);
      formData.append("nama_ibu", this.santri.nama_ibu);
      formData.append("nik_ibu", this.santri.nik_ibu);
      formData.append("pekerjaan_ibu", this.santri.pekerjaan_ibu);
      formData.append("pendidikan_ibu", this.santri.pendidikan_ibu);
      formData.append("telepon_ibu", this.santri.telepon_ibu);
      formData.append("no_kk", this.santri.no_kk);
      formData.append("hubungan_wali", this.santri.hubungan_wali);
      formData.append("nik_wali", this.santri.nik_wali);
      formData.append("nama_wali", this.santri.nama_wali);
      formData.append("pekerjaan_wali", this.santri.pekerjaan_wali);
      formData.append("alamat", this.santri.alamat);
      formData.append("rt_rw", this.santri.rt_rw);
      formData.append("kecamatan", this.santri.kecamatan);
      formData.append("kabupaten", this.santri.kabupaten);
      formData.append("provinsi", this.santri.provinsi);
      formData.append("no_hp", this.santri.no_hp);
      formData.append("foto_santri", this.santri.foto_santri);
      formData.append("foto_ijazah", this.santri.foto_ijazah);
      formData.append("foto_nisn", this.santri.foto_nisn);
      formData.append("akte_santri", this.santri.akte_santri);
      formData.append("bukti_pembayaran", this.santri.bukti_pembayaran);
      formData.append("surat_rekomendasi", this.santri.surat_rekomendasi);
      formData.append("password", this.santri.password);
      formData.append("password_confirmation", this.santri.password_confirmation);

      //sending data to action "storeWali" vuex
      // await this.$store
      //   .dispatch("santribaru/santriBaru/storeSantriBaru", formData)
          await this.$axios.post('/api/pendaftaran/register_santri',formData)
        //success
        .then((response) => {
          //sweet alert
          this.user = response.data.data.id
          this.$swal
        .fire({
          title: "Pendaftaran Berhasil",
          text: `Harap Simpan Data No Pendaftaran : ${response.data.data.no_pendaftaran} dan Password: yang sudah anda buat`,
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Sudah Disimpan!",

        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.close();
          }
        });


          // redirect route "admin-santris"
          this.$router.push({
            name: "pendaftaran-login",
            params: { id:  this.user.id},
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
<style scoped>
h1 {
  font-weight: 500;
  font-size: 60px;
  font-family: "Oswald", sans-serif;
  color: rgba(42, 42, 42, 0.918);
}

p {
  color: rgba(42, 42, 42, 0.918);
  font-size: 40px;
}
@media (max-width: 600px) {
  h1 {
    text-align: center;
    margin: 0;
    font-size: 20px;
    color: rgba(42, 42, 42, 0.918);
  }

  p {
    text-align: center;
    font-size: 16px;
  }
}
</style>
