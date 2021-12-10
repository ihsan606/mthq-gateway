<template>
  <main>
    <div class="container-fluid">
      <div class="fade-in">
        <div class="col-md-12">
          <h4 class="my-4">Detail Pendaftaran Santri : {{ user.name }}</h4>
          <div class="card rounded shadow-sm border-top-blue">
            <b-list-group class="my-5">
              <b-list-group-item
                class="detail d-flex justify-content-between align-items-center"
              >
                <p style="font-weight: 500">Status Pendaftaran</p>
                <span
                  style="font-weight: 500; font-size: 14px"
                  class="badge bg-warning text-dark"
                  >{{ santri.status }}</span
                >
              </b-list-group-item>

              <b-list-group-item
                class="detail d-flex justify-content-between align-items-center"
              >
                <p style="font-weight: 500">No Pendaftaran</p>
                <p style="font-weight: 500">{{ santri.no_pendaftaran }}</p>
              </b-list-group-item>

              <b-list-group-item
                class="detail d-flex justify-content-between align-items-center"
              >
                <p style="font-weight: 500">Nama Lengkap</p>
                <p style="font-weight: 500">{{ santri.name }}</p>
              </b-list-group-item>

              <b-list-group-item
                class="detail d-flex justify-content-between align-items-center"
              >
                <p style="font-weight: 500">NISN</p>
                <p style="font-weight: 500">{{ santri.nisn }}</p>
              </b-list-group-item>

              <b-list-group-item
                class="detail d-flex justify-content-between align-items-center"
              >
                <p style="font-weight: 500">NIK</p>
                <p style="font-weight: 500">{{ santri.nik }}</p>
              </b-list-group-item>

              <b-list-group-item
                class="detail d-flex justify-content-between align-items-center"
              >
                <p style="font-weight: 500">Tingkat</p>
                <p style="font-weight: 500">{{ jenis_tingkatan }}</p>
              </b-list-group-item>
            </b-list-group>
          </div>

          <div class="card rounded shadow-sm">
            <nuxt-link
            target="_blank"
              :to="{
                name: 'pendaftaran-cetak_kartu-id',
                params: { id: this.$auth.user.id },
              }"
              class="btn btn-success shadow my-2 mx-5"
              >Cetak Kartu Ujian</nuxt-link
            >
            <nuxt-link
              v-if="santri.status == 'lulus'"
              :to="{
                name: 'pendaftaran-daftarulang-id',
                params: { id: this.$auth.user.id },
              }"
              class="btn btn-info shadow my-2 mx-5"
              >Daftar Ulang</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "santri",
  computed: {
    user() {
      return this.$auth.user;
    },
  },

  data() {
    return {
      //state santri
      santri: {},
      jenis_tingkatan: "",

      agama: ["islam", "kristen", "hindu", "buddha", "konghucu"],
      //state validation
      validation: [],
    };
  },

  //   hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch(
      "santribaru/santriBaru/getDetailSantriBaru",
      route.params.id
    );
  },
  //mounted
  mounted() {
    this.jenis_tingkatan =
      this.$store.state.santribaru.santriBaru.santriBaru.jenis_tingkatan.name;
    this.santri = this.$store.state.santribaru.santriBaru.santriBaru;
  },
};
</script>

<style>
</style>