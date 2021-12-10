<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> Angkatans</span
                >
              </div>
              <div class="card-body">
                <nuxt-link
                  :to="{ name: 'admin-angkatans-create' }"
                  class="btn btn-warning btn-sm mb-3 p-2"
                >
                  <i class="fa fa-plus-circle"></i> ADD NEW</nuxt-link
                >
                <div class="table-responsive">
                <b-table
                  striped
                  bordered
                  hover
                  :items="angkatans.data"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(image)="data">
                    <img class="img-fluid" width="200" :src="data.item.image" />
                  </template>
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'admin-angkatans-edit-id',
                        params: { id: row.item.id },
                      }"
                      variant="info"
                      size="sm"
                    >
                      DETAIL
                    </b-button>
                    <b-button variant="danger" size="sm" @click="destroyAngkatan(row.item.id)">DELETE</b-button>
                  </template>
                </b-table>
                </div>
                <!-- pagination -->
                <b-pagination
                  align="right"
                  :value="angkatans.current_page"
                  :total-rows="angkatans.total"
                  :per-page="angkatans.per_page"
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
      title: "Angkatans - Administrator",
    };
  },

  //data function
  data() {
    return {
      //table header
      fields: [
        {
          label: "Angkatan",
          key: "name",
          tdClass: "text-left",
        },
        {
          label: "Alias",
          key: "alias",
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
    await store.dispatch("admin/angkatan/getAngkatansData");
  },

  //computed
  computed: {
    //angkatans
    angkatans() {
      return this.$store.state.admin.angkatan.angkatans;
    },
  },

  //method
  methods: {
    //method "searchData"
    searchData() {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/angkatan/SET_PAGE", 1);

      //dispatch on action "getAngkatansData"
      this.$store.dispatch("admin/angkatan/getAngkatansData", this.search);
    },

    //method "changePage"
    changePage(page) {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/angkatan/SET_PAGE", page);

      //dispatch on action "getAngkatansData"
      this.$store.dispatch("admin/angkatan/getAngkatansData", this.search);
    },

    //destroyAngkatan
    destroyAngkatan(id) {
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
              this.$store.dispatch('admin/angkatan/destroyAngkatan', id)
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