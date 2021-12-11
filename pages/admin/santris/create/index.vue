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
                  ><i class="fa fa-users"></i> TAMBAH Santri</span
                >
              </div>
              <div class="card-body">
                <form @submit.prevent="storeSantri">
                  <div class="row">
                    <!-- input nama start -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NAMA LENGKAP</label>
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
                      <div class="form-group">
                        <label>Tingkat</label>
                        <select
                          class="form-control"
                          v-model="santri.jenis_tingkatan_id"
                        >
                          <option value="">-- pilih tingkat --</option>
                          <option
                            v-for="tingkat in listTingkat"
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
                      <div class="form-group">
                        <label>BERAT BADAN</label>
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
                        <label>TINGGI BADAN</label>
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
                      <!-- input tempat_lahir start -->
                      <div class="form-group">
                        <label>TEMPAT LAHIR</label>
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
                      <div class="form-group">
                        <label>JENIS KELAMIN</label>
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
                    <div class="col-md-6">
                      <!-- input agama -->
                      <div class="form-group">
                        <label>AGAMA</label>
                        <select class="form-control" v-model="santri.agama">
                          <option value="">-- Pilih Agama --</option>
                          <option v-for="ag in agama" :key="ag" :value="ag">
                            {{ ag }}
                          </option>
                        </select>
                        <div v-if="validation.agama" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.agama[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>ANAK KE-</label>
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
                        <label>JUMLAH SAUDARA KANDUNG</label>
                        <input
                          type="number"
                          v-model="santri.jumlah_saudara_kandung"
                          placeholder="0"
                          class="form-control"
                        />
                        <div
                          v-if="validation.jumlah_saudara_kandung"
                          class="mt-2"
                        >
                          <b-alert show variant="danger">{{
                            validation.jumlah_saudara_kandung[0]
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
                      <div class="form-group">
                        <label>NPSN SEKOLAH ASAL</label>
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
                      <div class="form-group">
                        <label>NAMA AYAH</label>
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
                        <label>NAMA IBU</label>
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
                        <label>NIK AYAH</label>
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
                        <label>NIK IBU</label>
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
                        <label>PENDIDIKAN AYAH</label>
                        <input
                          type="text"
                          v-model="santri.pendidikan_ayah"
                          placeholder="pendidikan ayah"
                          class="form-control"
                        />
                        <div v-if="validation.pendidikan_ayah" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.pendidikan_ayah[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>PENDIDIKAN IBU</label>
                        <input
                          type="text"
                          v-model="santri.pendidikan_ibu"
                          placeholder="pendidikan ibu"
                          class="form-control"
                        />
                        <div v-if="validation.pendidikan_ibu" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.pendidikan_ibu[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>PEKERJAAN AYAH</label>
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
                        <label>PEKERJAAN IBU</label>
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
                        <label>TELEPON AYAH</label>
                        <input
                          type="text"
                          v-model="santri.telepon_ayah"
                          placeholder="telepon ayah"
                          class="form-control"
                        />
                        <div v-if="validation.telepon_ayah" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.telepon_ayah[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>TELEPON IBU</label>
                        <input
                          type="text"
                          v-model="santri.telepon_ibu"
                          placeholder="telepon ibu"
                          class="form-control"
                        />
                        <div v-if="validation.telepon_ibu" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.telepon_ibu[0]
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
                        <label>KELAS</label>
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
                        <label>NOMOR KARTU KELUARGA</label>
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
                        <label>KODE POS</label>
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
                        <label>ALAMAT</label>
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

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>KEWARGANEGARAAN</label>
                        <input
                          type="text"
                          v-model="santri.kewarganegaraan"
                          placeholder="cth: indonesia / malaysia / ..."
                          class="form-control"
                        />
                        <div v-if="validation.kewarganegaraan" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.kewarganegaraan[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NO PASPOR</label>
                        <input
                          type="text"
                          v-model="santri.no_paspor"
                          placeholder="hanya diisi untuk santri berkewarganegaraan asing"
                          class="form-control"
                        />
                        <div v-if="validation.no_paspor" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.no_paspor[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>RATA - RATA PENGHASILAN</label>
                        <input
                          type="text"
                          v-model="santri.rata_rata_penghasilan"
                          placeholder="Rata-Rata Penghasilan"
                          class="form-control"
                        />
                        <div
                          v-if="validation.rata_rata_penghasilan"
                          class="mt-2"
                        >
                          <b-alert show variant="danger">{{
                            validation.rata_rata_penghasilan[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NO KIP</label>
                        <input
                          type="text"
                          v-model="santri.no_kip"
                          placeholder="jika memiliki"
                          class="form-control"
                        />
                        <div v-if="validation.no_kip" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.no_kip[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NO PKH</label>
                        <input
                          type="text"
                          v-model="santri.no_pkh"
                          placeholder="jika memiliki"
                          class="form-control"
                        />
                        <div v-if="validation.no_pkh" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.no_pkh[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NO KKS</label>
                        <input
                          type="text"
                          v-model="santri.no_kks"
                          placeholder="jika memiliki"
                          class="form-control"
                        />
                        <div v-if="validation.no_kks" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.no_kks[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>CITA - CITA</label>
                        <select class="form-control" v-model="santri.cita_cita">
                          <option value="">-- pilih cita cita --</option>
                          <option
                            v-for="cita in cita_cita"
                            :key="cita"
                            :value="cita"
                          >
                            {{ cita }}
                          </option>
                        </select>
                        <div v-if="validation.cita_cita" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.cita_cita[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>KEBUTUHAN KHUSUS</label>
                        <select
                          class="form-control"
                          v-model="santri.kebutuhan_khusus"
                        >
                          <option value="">-- pilih kebutuhan khusus --</option>
                          <option
                            v-for="kk in kebutuhan_khusus"
                            :key="kk"
                            :value="kk"
                          >
                            {{ kk }}
                          </option>
                        </select>
                        <div v-if="validation.kebutuhan_khusus" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.kebutuhan_khusus[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>RT/RW</label>
                        <input
                          type="text"
                          v-model="santri.rt_rw"
                          placeholder="RT / RW"
                          class="form-control"
                        />
                        <div v-if="validation.rt_rw" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.rt_rw[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>KECAMATAN</label>
                        <input
                          type="text"
                          v-model="santri.kecamatan"
                          placeholder="kecamatan"
                          class="form-control"
                        />
                        <div v-if="validation.kecamatan" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.kecamatan[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>KABUPATEN</label>
                        <input
                          type="text"
                          v-model="santri.kabupaten"
                          placeholder="kabupaten"
                          class="form-control"
                        />
                        <div v-if="validation.kabupaten" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.kabupaten[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>PROVINSI</label>
                        <input
                          type="text"
                          v-model="santri.provinsi"
                          placeholder="provinsi"
                          class="form-control"
                        />
                        <div v-if="validation.provinsi" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.provinsi[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Hubungan WALI</label>
                        <input
                          type="text"
                          v-model="santri.hubungan_wali"
                          placeholder="Kakak/Paman/Keponakan/..."
                          class="form-control"
                        />
                        <div v-if="validation.hubungan_wali" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.hubungan_wali[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NIK WALI</label>
                        <input
                          type="text"
                          v-model="santri.nik_wali"
                          placeholder="nik wali"
                          class="form-control"
                        />
                        <div v-if="validation.nik_wali" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nik_wali[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NAMA WALI</label>
                        <input
                          type="text"
                          v-model="santri.nama_wali"
                          placeholder="nama wali"
                          class="form-control"
                        />
                        <div v-if="validation.nama_wali" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.nama_wali[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>PEKERJAAN WALI</label>
                        <input
                          type="text"
                          v-model="santri.pekerjaan_wali"
                          placeholder="pekerjaan wali"
                          class="form-control"
                        />
                        <div v-if="validation.pekerjaan_wali" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.pekerjaan_wali[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>HOBY</label>
                        <select class="form-control" v-model="santri.hoby">
                          <option value="">-- pilih hoby --</option>
                          <option v-for="hb in hoby" :key="hb" :value="hb">
                            {{ hb }}
                          </option>
                        </select>
                        <div v-if="validation.hoby" class="mt-2">
                          <b-alert show variant="danger">{{
                            validation.hoby[0]
                          }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>FOTO SANTRI</label>
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

                    <div class="col-md-12">
                      <div class="form-group">
                        <label>IJAZAH</label>
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
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label>FOTO NISN</label>
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
                        <label>AKTE SANTRI</label>
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
                        <label>BUKTI PEMBAYARAN</label>
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
                        <label>SURAT REKOMENDASI</label>
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
      title: "Add New Santri - Administrator",
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("santribaru/jenisTingkat/getListTingkat");
    await store.dispatch("admin/waliSantri/getListWali");
    await store.dispatch("admin/angkatan/getListAngkatan");
    await store.dispatch("admin/kelas/getListKelas");
  },

  //computed
  computed: {
    listTingkat() {
      return this.$store.state.santribaru.jenisTingkat.listTingkat;
    },
    //wali
    walis() {
      return this.$store.state.admin.waliSantri.listWali;
    },
    angkatans() {
      return this.$store.state.admin.angkatan.listAngkatan;
    },
    kelases() {
      return this.$store.state.admin.kelas.listKelas;
    },
  },

  data() {
    return {
      //state santri
      santri: {
        name: "",
        wali_id: "",
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
        rt_rw: "",
        kecamatan: "",
        kabupaten: "",
        provinsi: "",
        no_hp: "",
        foto_santri: "",
        foto_ijazah: "",
        foto_nisn: "",
        akte_santri: "",
        bukti_pembayaran: "",
        surat_rekomendasi: "",
      },

      user: {},

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

  methods: {
    //handle file upload
    handleFileFotoSantriChange(e) {
      //get foto_santri
      if (e.target.files[0]) {
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
      if (e.target.files[0]) {
        let image = (this.santri.foto_ijazah = e.target.files[0]);
        //check fileType
        if (!image.type.match("application.[pdf]")) {
          //if fileType not allowed, then clear value and set null
          e.target.value = "";
          //set state "category.image" to null
          this.santri.foto_ijazah = null;
          //show sweet alert
          this.$swal.fire({
            title: "OOPS!",
            text: "Format File Tidak Didukung, Pastikan Berupa File PDF Ya!",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    },

    handleFileNISNChange(e) {
      if (e.target.files[0]) {
        //get foto_santri
        let image = (this.santri.foto_nisn = e.target.files[0]);
        //check fileType
        if (!image.type.match("application.[pdf]")) {
          //if fileType not allowed, then clear value and set null
          e.target.value = "";
          //set state "category.image" to null
          this.santri.foto_nisn = null;
          //show sweet alert
          this.$swal.fire({
            title: "OOPS!",
            text: "Format File Tidak Didukung! Pastikan Berupa File PDF Ya!",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    },

    handleFileAkteChange(e) {
      if (e.target.files[0]) {
        //get foto_santri
        let image = (this.santri.akte_santri = e.target.files[0]);
        //check fileType
        if (!image.type.match("application.[pdf]")) {
          //if fileType not allowed, then clear value and set null
          e.target.value = "";
          //set state "category.image" to null
          this.santri.akte_santri = null;
          //show sweet alert
          this.$swal.fire({
            title: "OOPS!",
            text: "Format File Tidak Didukung! Pastikan Berupa File PDF Ya!",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    },

    handleFileBuktiAkteChange(e) {
      if (e.target.files[0]) {
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
      if (e.target.files[0]) {
        //get bukti pembayaran
        let image = (this.santri.surat_rekomendasi = e.target.files[0]);
        //check fileType
        if (!image.type.match("application.[pdf]")) {
          //if fileType not allowed, then clear value and set null
          e.target.value = "";
          //set state "category.image" to null
          this.santri.surat_rekomendasi = null;
          //show sweet alert
          this.$swal.fire({
            title: "OOPS!",
            text: "Format File Tidak Didukung! Pastikan Berupa File PDF Ya!",
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
      formData.append("wali_id", this.santri.wali_id);
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

      //sending data to action "storeWali" vuex
      await this.$store
        .dispatch("admin/santri/storeSantri", formData)
     
        //success
        .then(() => {
          //sweet alert
        
          this.$swal
            .fire({
              title: "Pendaftaran Berhasil",
              text: `Data Santri Baru Berhasil Masuk`,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            })
            .then((result) => {
              if (result.isConfirmed) {
                this.$swal.close();
              }
            });

          // redirect route "admin-santris"
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