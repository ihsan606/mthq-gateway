<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fas fa-door-open"></i>JENIS TINGKATAN</span
                >
                <p>{{jenisTingkatans}}</p>
              </div>
              <div class="card-body">
                <nuxt-link
                  :to="{ name: 'admin-tingkatan-create' }"
                  class="btn btn-warning btn-sm mb-3 p-2"
                >
                  <i class="fa fa-plus-circle"></i> ADD NEW</nuxt-link
                >
                <div class="table-responsive">
                <b-table
                  striped
                  bordered
                  hover
                  :items="jenisTingkatans.data"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(image)="data">
                    <img class="img-fluid" width="200" :src="data.item.image" />
                  </template>
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'admin-tingkatan-edit-id',
                        params: { id: row.item.id },
                      }"
                      variant="info"
                      size="sm"
                    >
                      EDIT
                    </b-button>
                    <b-button variant="danger" size="sm" @click="destroyTingkatan(row.item.id)">DELETE</b-button>
                  </template>
                </b-table>
                </div>
                <!-- pagination -->
                <b-pagination
                  align="right"
                  :value="jenisTingkatans.current_page"
                  :total-rows="jenisTingkatans.total"
                  :per-page="jenisTingkatans.per_page"
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
      title: "Tingkatan - Administrator",
    };
  },

  //data function
  data() {
    return {
      //table header
      fields: [
        {
          label: "Tingkat",
          key: "name",
          tdClass: "text-left",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],

      search: "",
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("admin/jenisTingkatan/getJenisTingkatansData");
  },

  //computed
  computed: {
    //kelas
    jenisTingkatans() {
      return this.$store.state.admin.jenisTingkatan.jenisTingkatans;
    },
  },

  //method
  methods: {
    //method "searchData"
    searchData() {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/jenisTingkatan/SET_PAGE", 1);

      //dispatch on action "getJenisTingkatansData"
      this.$store.dispatch("admin/jenisTingkatan/getJenisTingkatansData", this.search);
    },

    //method "changePage"
    changePage(page) {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/jenisTingkatan/SET_PAGE", page);

      //dispatch on action "getJenisTingkatansData"
      this.$store.dispatch("admin/jenisTingkatan/getJenisTingkatansData", this.search);
    },

    //destroyTingkatan
    destroyTingkatan(id) {
          this.$swal.fire({
            title: 'APAKAH ANDA YAKIN ?',
            text: "INGIN MENGHAPUS DATA INI !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'YA, HAPUS!',
            cancelButtonText: 'TIDAK',
          }).then((result) => {
            if (result.isConfirmed) {

              //dispatch to action "destroyAngkatan" vuex
              this.$store.dispatch('admin/jenisTingkatan/destroyTingkatan', id)
                .then(() => {

                  //refresh data
                  this.$nuxt.refresh()

                  //alert
                  this.$swal.fire({
                    title: 'BERHASIL!',
                    text: "Data Berhasil Dihapus!",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                  })

                })
            }
          })
        }
  },
};
</script>

<style>
</style>