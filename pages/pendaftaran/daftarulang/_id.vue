<template>
  <main class="c-main" style="background-color: white">
    <div class="container-xl">
      <div class="header">
        <div class="col-md-12">
          <h1 class="rounded">FORMULIR DAFTAR ULANG SANTRI BARU</h1>
          <p class="mb-5">Ma'had Tahfidz Hidayatul Quran</p>
          
        </div>
      </div>
      <div class="card rounded shadow-sm border-top-blue ">
        <form @submit.prevent="updateSantri" class="my-3 mx-3">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Nama Lengkap</label>
                <input disabled
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
            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <label>NISN</label>
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                  disabled
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
              <div class="form-group">
                <label>Jenis Kelamin</label>
                <div class="row">
                  <b-form-radio
                    disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
                <input disabled
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
            <div class="col-md-6">
              <div class="form-group">
                <label>Alamat</label>
                <input disabled
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
            <div class="col-md-6">
              <div class="form-group">
                <label>Rata-Rata Penghasilan</label>
                <input disabled
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
            </div>
          </div>
           <!-- ISIAN BARU -->
          <h4 class="my-4">ISIAN BARU</h4>

          <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Kewarganegaraan</label>
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
              <label>No Paspor</label>
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
              <label>Agama</label>
              <select
                  class="form-control"
                  v-model="santri.agama"
                >
                  <option value="">-- pilih agama --</option>
                  <option
                    v-for="ag in agama"
                    :key="ag"
                    :value="ag"
                  >
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

          <div class="col-md-6">
            <div class="form-group">
              <label>No KIP</label>
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
              <label>No PKH</label>
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
              <label>No KKS</label>
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
              <label>Tanggal Masuk</label>
               <input 
                type="date"
                v-model="santri.tanggal_masuk"
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
              <label>Hobi</label>
               <select
                  class="form-control"
                  v-model="santri.hoby"
                >
                  <option value="">-- pilih hoby --</option>
                  <option
                    v-for="hb in hoby"
                    :key="hb"
                    :value="hb"
                  >
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
          <div class="col-md-6">
            <div class="form-group">
              <label>Cita-Cita</label>
              <select
                  class="form-control"
                  v-model="santri.cita_cita"
                >
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
              <label>Kebutuhan  Khusus</label>
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
              <label>Pendidikan Ayah</label>
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
              <label>Pendidikan Ibu</label>
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
              <label>Telepon Ayah</label>
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
              <label>Telepon Ibu</label>
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
              <label>Kecamatan</label>
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
              <label>Kabupaten</label>
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
              <label>Provinsi</label>
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
              <label>Hubungan Wali</label>
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
              <label>NIK Wali</label>
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
              <label>Nama Wali</label>
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
              <label>Pekerjaan Wali</label>
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
          <div class="col-md-6">
            <div class="form-group">
              <label>Password</label>
              <input 
                type="password"
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
                type="password"
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

     
          
          <button class="btn btn-info mx-2 rounded btn-submit" type="submit">
            <i class="fa fa-paper-plane"></i> Kirim
          </button>
        </form>
         
          <div class="space my-5">.</div>
      </div>
    </div>
  </main>
</template>

<script>
import { mdbInput } from "mdbvue";

export default {
  components: {
    mdbInput,
  },

  layout: "santri",

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
  async asyncData({ store, route}) {
    //get list all categories
    await store.dispatch("santribaru/santriBaru/getDetailSantriBaru", route.params.id);
    await store.dispatch("santribaru/jenisTingkat/getListTingkat");
  },

  //computed
  computed: {
    //categories
    listTingkat() {
      return this.$store.state.santribaru.jenisTingkat.listTingkat;
    },
  },

  mounted(){
    this.santri.name                = this.$store.state.santribaru.santriBaru.santriBaru.name
    this.santri.kewarganegaraan                = this.$store.state.santribaru.santriBaru.santriBaru.kewarganegaraan
    this.santri.no_paspor                = this.$store.state.santribaru.santriBaru.santriBaru.no_paspor
    this.santri.no_kip                = this.$store.state.santribaru.santriBaru.santriBaru.no_kip
    this.santri.no_pkh                = this.$store.state.santribaru.santriBaru.santriBaru.no_pkh
    this.santri.no_kks                = this.$store.state.santribaru.santriBaru.santriBaru.no_kks
    this.santri.hoby                = this.$store.state.santribaru.santriBaru.santriBaru.hoby
    this.santri.kebutuhan_khusus                = this.$store.state.santribaru.santriBaru.santriBaru.kebutuhan_khusus
    this.santri.cita_cita                = this.$store.state.santribaru.santriBaru.santriBaru.cita_cita
    this.santri.berat_badan             = this.$store.state.santribaru.santriBaru.santriBaru.berat_badan
    this.santri.tinggi_badan              = this.$store.state.santribaru.santriBaru.santriBaru.tinggi_badan
    this.santri.jenis_tingkatan_id              = this.$store.state.santribaru.santriBaru.santriBaru.jenis_tingkatan_id;
    this.santri.nism                = this.$store.state.santribaru.santriBaru.santriBaru.nism
    this.santri.nisn                = this.$store.state.santribaru.santriBaru.santriBaru.nisn
    this.santri.nik                 = this.$store.state.santribaru.santriBaru.santriBaru.nik
    this.santri.tempat_lahir        = this.$store.state.santribaru.santriBaru.santriBaru.tempat_lahir
    this.santri.tanggal_lahir       = this.$store.state.santribaru.santriBaru.santriBaru.tanggal_lahir
    this.santri.jenis_kelamin       = this.$store.state.santribaru.santriBaru.santriBaru.jenis_kelamin
    this.santri.agama               = this.$store.state.santribaru.santriBaru.santriBaru.agama
    this.santri.anak_ke               = this.$store.state.santribaru.santriBaru.santriBaru.anak_ke
    this.santri.jumlah_saudara_kandung               = this.$store.state.santribaru.santriBaru.santriBaru.jumlah_saudara_kandung
    this.santri.tanggal_masuk       = this.$store.state.santribaru.santriBaru.santriBaru.tanggal_masuk
    this.santri.npsn_sekolah_asal           = this.$store.state.santribaru.santriBaru.santriBaru.npsn_sekolah_asal
    this.santri.nama_sekolah_asal   = this.$store.state.santribaru.santriBaru.santriBaru.nama_sekolah_asal
    this.santri.alamat_sekolah_asal = this.$store.state.santribaru.santriBaru.santriBaru.alamat_sekolah_asal
    this.santri.kode_pos = this.$store.state.santribaru.santriBaru.santriBaru.kode_pos
    this.santri.rata_rata_penghasilan = this.$store.state.santribaru.santriBaru.santriBaru.rata_rata_penghasilan
    this.santri.no_kk = this.$store.state.santribaru.santriBaru.santriBaru.no_kk
    this.santri.nama_ayah           = this.$store.state.santribaru.santriBaru.santriBaru.nama_ayah
    this.santri.nik_ayah            = this.$store.state.santribaru.santriBaru.santriBaru.nik_ayah
    this.santri.pekerjaan_ayah      = this.$store.state.santribaru.santriBaru.santriBaru.pekerjaan_ayah
    this.santri.pendidikan_ayah      = this.$store.state.santribaru.santriBaru.santriBaru.pendidikan_ayah
    this.santri.telepon_ayah      = this.$store.state.santribaru.santriBaru.santriBaru.telepon_ayah
    this.santri.nama_ibu            = this.$store.state.santribaru.santriBaru.santriBaru.nama_ibu
    this.santri.nik_ibu             = this.$store.state.santribaru.santriBaru.santriBaru.nik_ibu
    this.santri.pekerjaan_ibu       = this.$store.state.santribaru.santriBaru.santriBaru.pekerjaan_ibu
    this.santri.pendidikan_ibu       = this.$store.state.santribaru.santriBaru.santriBaru.pendidikan_ibu
    this.santri.telepon_ibu       = this.$store.state.santribaru.santriBaru.santriBaru.telepon_ibu
    this.santri.rt_rw       = this.$store.state.santribaru.santriBaru.santriBaru.rt_rw
    this.santri.kecamatan       = this.$store.state.santribaru.santriBaru.santriBaru.kecamatan
    this.santri.kabupaten       = this.$store.state.santribaru.santriBaru.santriBaru.kabupaten
    this.santri.provinsi       = this.$store.state.santribaru.santriBaru.santriBaru.provinsi
    this.santri.hubungan_wali       = this.$store.state.santribaru.santriBaru.santriBaru.hubungan_wali
    this.santri.nama_wali       = this.$store.state.santribaru.santriBaru.santriBaru.nama_wali
    this.santri.nik_wali       = this.$store.state.santribaru.santriBaru.santriBaru.nik_wali
    this.santri.pekerjaan_wali       = this.$store.state.santribaru.santriBaru.santriBaru.pekerjaan_wali
    this.santri.alamat              = this.$store.state.santribaru.santriBaru.santriBaru.alamat
    this.santri.no_hp               = this.$store.state.santribaru.santriBaru.santriBaru.no_hp
    this.santri.kelas_id            = this.$store.state.santribaru.santriBaru.santriBaru.kelas_id
    this.santri.angkatan_id         = this.$store.state.santribaru.santriBaru.santriBaru.angkatan_id
    this.santri.rapot_id            = this.$store.state.santribaru.santriBaru.santriBaru.rapot_id
  },

  methods: {
    //handle file upload
    handleFileFotoSantriChange(e) {
      //get foto_santri
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
          text: "Format File Tidak Didukung!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    handleFileIjazahChange(e) {
      //get foto_santri
      if(e.target.files[0]){
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
          text: "Format File Tidak Didukung!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      }
      
    },

    handleFileNISNChange(e) {
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
          text: "Format File Tidak Didukung!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    handleFileAkteChange(e) {
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
          text: "Format File Tidak Didukung!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    handleFileBuktiAkteChange(e) {
      //get foto_santri
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
          text: "Format File Tidak Didukung!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    //method "storeSantri"
    async updateSantri() {
      
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
      // formData.append("foto_santri", this.santri.foto_santri);
      // formData.append("foto_ijazah", this.santri.foto_ijazah);
      // formData.append("foto_nisn", this.santri.foto_nisn);
      // formData.append("akte_santri", this.santri.akte_santri);
      // formData.append("bukti_pembayaran", this.santri.bukti_pembayaran);
      formData.append("password", this.santri.password);
      formData.append("password_confirmation", this.santri.password_confirmation);
      formData.append("_method", 'PATCH');


       await this.$store
        .dispatch("santribaru/santriBaru/updateSantriBaru", {
          santriId: this.$route.params.id,
          payload: formData,
        })

        //success
        .then(() => {
          //sweet alert
          this.$swal.fire({
            title: "BERHASIL!",
            text: "Berhasil Daftar Ulang!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          //redirect route "admin-santris"
          this.$router.push({
            name: "pendaftaran-dashboard-id",
            params: { id: this.$auth.user.id }
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
  label {
    font-size:12px;
  }
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