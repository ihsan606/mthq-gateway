<template>
  <main class="c-main bg-white">
    <div class="container-fluid">
      <div class="card">
        <h4 class="text-center t-top mx-3 my-5"></h4>
        <div class="col image-box mt-5">
          <img
            class="d-flex justify-content-center mx-auto rounded mb-3"
            :src="santri.foto_santri"
            width="150"
            alt=""
          />
          <h5 class="text-center text-bold mb-1">
            No. Pendaftaran : {{ santri.no_pendaftaran }}
          </h5>
          <table class="mx-auto">
            <tr>
              <td><h4>Nama</h4></td>
              <td>
                <h5>: {{ santri.name }}</h5>
              </td>
            </tr>
            <tr>
              <td><h4>Kabupaten</h4></td>
              <td>
                <h5>: {{ santri.kabupaten }}</h5>
              </td>
            </tr>
            <tr>
              <td><h4>Asal Sekolah</h4></td>
              <td>
                <h5>: {{ santri.nama_sekolah_asal }}</h5>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
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

  async asyncData({ store, route }) {
    await store.dispatch(
      "santribaru/santriBaru/getDetailSantriBaru",
      route.params.id
    );
  },
  mounted() {
    this.santri = this.$store.state.santribaru.santriBaru.santriBaru;
    window.print();
  },
};
</script>

<style scoped>
img {
  margin-top: 270px;
}
table {
  margin-top: 20px;
}

p {
  margin-top: 0;
  margin-bottom: 0rem;
}
.card {
  width: 600px;
  height: 920px;
  background-image: url("/images/ujian/kartu_ujian_bg.png");
  background-size: cover;
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.t-top {
  letter-spacing: 3px;
}

@media (max-width: 600px) {
}
</style>
