<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">

        <div class="row">

          <div class="col-6 col-lg-3">
            <div class="card border-0 rounded shadow-sm overflow-hidden">
              <div class="card-body p-0 d-flex align-items-center">
                <div class="bg-success py-4 px-5 mfe-3">
                  <i class="fas fa-circle-notch fa-spin fa-2x"></i>
                </div>
                <div>
                  <div class="text-black font-weight-medium" style="font-size:1.3em;">{{ statistic.all_santri }}</div>
                  <div class=" text-uppercase font-weight-bold" style="font-size:0.8em;">TOTAL PENDAFTAR</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card border-0 rounded shadow-sm overflow-hidden">
              <div class="card-body p-0 d-flex align-items-center">
                <div class="bg-info py-4 px-5 mfe-3">
                  <i class="fas fa-graduation-cap fa-2x"></i>
                </div>
                <div>
                  <div class="text-black font-weight-medium" style="font-size:1.3em;">{{ statistic.mts_santri }}</div>
                  <div class=" text-uppercase font-weight-bold" style="font-size:0.8em;">SANTRI MTS</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card border-0 rounded shadow-sm overflow-hidden">
              <div class="card-body p-0 d-flex align-items-center">
                <div class="bg-info py-4 px-5 mfe-3">
                  <i class="fas fa-graduation-cap fa-2x"></i>
                </div>
                <div>
                  <div class="text-black font-weight-medium" style="font-size:1.3em;">{{statistic.ma_santri  }}</div>
                  <div class=" text-uppercase font-weight-bold" style="font-size:0.8em;">SANTRI MA</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card border-0 rounded shadow-sm overflow-hidden">
              <div class="card-body p-0 d-flex align-items-center">
                <div class="bg-success py-4 px-5 mfe-3">
                  <i class="fas fa-check-circle fa-2x"></i>
                </div>
                <div>
                  <div class="text-black font-weight-medium" style="font-size:1.3em;">{{ statistic.lulus_santri}}</div>
                  <div class=" text-uppercase font-weight-bold" style="font-size:0.8em;">SANTRI LULUS</div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fas fa-restroom"></i> Santri Baru
                </span>
              </div>
              <div class="card-body">
                <div
                  class="row"
                  style="justify-content: start; align-items: start"
                >
                  <button
                    @click="migrateSantri"
                    v-b-tooltip.hover
                    title="Pindahkan Data Santri Lulus"
                    class="btn btn-warning btn-sm mb-3 mx-3 p-2"
                  >
                    <i class="fa fa-plus-circle"></i>MIGRATE
                  </button>
                  <button
                    @click="destroySantri"
                    type="button"
                    class="btn btn-success btn-sm mb-3 mx-1 p-2"
                    v-b-tooltip.hover
                    title="Hapus Data Santri Tidak Lulus"
                  >
                    <i class="fa fa-file-import"></i>
                    DELETE
                  </button>
                </div>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="search"
                      @keypress.enter="searchData"
                      placeholder="cari berdasarkan nama santri"
                    />
                    <div class="input-group-append">
                      <button @click="searchData" class="btn btn-warning">
                        <i class="fa fa-search"></i>
                        SEARCH
                      </button>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <b-table
                    striped
                    bordered
                    hover
                    :items="santris.data"
                    :fields="fields"
                    show-empty
                  >

                    <template v-slot:cell(actions)="row">
                      <b-button
                        :to="{
                          name: 'admin-pendaftaran-edit-id',
                          params: { id: row.item.id },
                        }"
                        variant="info"
                        size="sm"
                      >
                        UBAH
                      </b-button>
                    </template>
                  </b-table>
                </div>
                <!-- pagination -->
                <b-pagination
                  align="right"
                  :value="santris.current_page"
                  :total-rows="santris.total"
                  :per-page="santris.per_page"
                  @change="changePage"
                  aria-controls="my-table"
                ></b-pagination>
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
      title: "Pendaftaran - Administrator",
    };
  },

  // async asyncData({ $axios }) {

  //     //fetching dashboard
  //     const dashboard = await $axios.$get('/api/admin/pendaftaran-dashboard')

  //     //statistic
  //     const statistic = {
  //       'all_santri': dashboard.data.all_santri,
  //       'mts_santri': dashboard.data.mts_santri,
  //       'ma_santri': dashboard.data.ma_santri,
  //       'lulus_santri': dashboard.data.lulus_santri,
  //       'gagal_santri': dashboard.data.gagal_santri,
  //     }



  //     return {
  //       statistic
  //     }
  //   },

  //data function
  data() {
    return {
      //table header
      fields: [
        {
          label: "No. Pendaftaran",
          key: "no_pendaftaran",
          tdClass: "text-left",
        },
        {
          label: "Santri",
          key: "name",
          tdClass: "text-left",
        },
        {
          label: "Tingkat",
          key: "jenis_tingkatan.name",
          tdClass: "text-left",
        },
        {
          label: "Status",
          key: "status",
          tdClass: "text-left",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],

      search: "",

      file: "",

      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store,$axios }) {
    await store.dispatch("admin/santriBaru/getSantriBarusData");


     //fetching dashboard
      const dashboard = await $axios.$get('/api/admin/pendaftaran-dashboard')

      //statistic
      const statistic = {
        'all_santri': dashboard.data.all_santri,
        'mts_santri': dashboard.data.mts_santri,
        'ma_santri': dashboard.data.ma_santri,
        'lulus_santri': dashboard.data.lulus_santri,
        'gagal_santri': dashboard.data.gagal_santri,
      }



      return {
        statistic
      }
  },

  //computed
  computed: {
    //santri
    santris() {
      return this.$store.state.admin.santriBaru.santribarus;
    },
  },

  //method
  methods: {
    //method "searchData"
    searchData() {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/santriBaru/SET_PAGE", 1);

      //dispatch on action "getSantriBarusData"
      this.$store.dispatch("admin/santriBaru/getSantriBarusData", this.search);
    },

    //method "changePage"
    changePage(page) {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/santriBaru/SET_PAGE", page);

      //dispatch on action "getSantriBarusData"
      this.$store.dispatch("admin/santriBaru/getSantriBarusData", this.search);
    },

    //destroySantri
    destroySantri() {
      let status = 0;
      for (let i = 0; i < this.santris.data.length; i++) {
        if (this.santris.data[i].status == "belum_lulus") {
          status++;
        }
      }
      if (status > 0) {
        this.$swal
          .fire({
            title: "APAKAH ANDA YAKIN ?",
            text: "Ingin Menghapus Data Santri Yang Tidak Lulus!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "YA, HAPUS!",
            cancelButtonText: "TIDAK",
          })
          .then((result) => {
            if (result.isConfirmed) {
              //dispatch to action "destroySantriBaru" vuex
              this.$store
                .dispatch("admin/santriBaru/destroySantriBaru")
                .then(() => {
                  //refresh data
                  this.$nuxt.refresh();

                  //alert
                  this.$swal.fire({
                    title: "BERHASIL!",
                    text: "Data Santri Tidak Lulus Berhasil Dihapus!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                });
            }
          });
      } else {
        //alert
        this.$swal.fire({
          title: "MAAF!",
          text: "Semua Santri Tidak Lulus Sudah Dihapus",
          icon: "warning",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    migrateSantri() {
      let status = 0;
      for (let i = 0; i < this.santris.data.length; i++) {
        if (this.santris.data[i].status == "lulus") {
          status++;
        }
      }
      if (status > 0) {
        this.$swal
          .fire({
            title: "APAKAH ANDA YAKIN ?",
            text: "Ingin Memindahkan Semua Santri Baru Yang Lulus Ke Database Utama",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "YA, Pindahkan!",
            cancelButtonText: "TIDAK",
          })
          .then((result) => {
            if (result.isConfirmed) {
              //dispatch to action "migrateSantriBaru" vuex
              this.$store
                .dispatch("admin/santriBaru/migrateSantriBaru")
                .then(() => {
                  //refresh data
                  this.$nuxt.refresh();

                  //alert
                  this.$swal.fire({
                    title: "BERHASIL!",
                    text: "Data Santri Lulus Berhasil Dipindahkan!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                });
            }
          });
      } else {
        //alert
        this.$swal.fire({
          title: "MAAF!",
          text: "Semua Santri Lulus Sudah Dipindahkan",
          icon: "warning",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
};
</script>

<style>
</style>
