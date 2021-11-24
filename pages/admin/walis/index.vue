<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-blue">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fas fa-restroom"></i> WaliSantri</span
                >
              </div>
              <div class="card-body">
                <div class="row" style="justify-content:start;align-items:start;">
                <nuxt-link
                  :to="{ name: 'admin-walis-create' }"
                  class="btn btn-warning btn-sm mb-3 mx-3 p-2"
                >
                  <i class="fa fa-plus-circle"></i> ADD NEW</nuxt-link
                >
                <button
                  type="button"
                  class="btn btn-success p-2"
                  @click="toggleModal"
                  data-target="#import"
                  id="toggle-btn"
                >
                <i class="fa fa-file-import"></i>
                  IMPORT
                </button>
                </div>
                <div class="table-responsive">
                  <b-table
                    striped
                    bordered
                    hover
                    :items="walis.data"
                    :fields="fields"
                    show-empty
                  >
                    <template v-slot:cell(image)="data">
                      <img
                        class="img-fluid"
                        width="200"
                        :src="data.item.image"
                      />
                    </template>
                    <template v-slot:cell(actions)="row">
                      <b-button
                        :to="{
                          name: 'admin-walis-edit-id',
                          params: { id: row.item.id },
                        }"
                        variant="info"
                        size="sm"
                      >
                        EDIT
                      </b-button>
                      <b-button
                        variant="danger"
                        size="sm"
                        @click="destroyWali(row.item.id)"
                        >DELETE</b-button
                      >
                    </template>
                  </b-table>
                </div>
                <p>{{ walis.name }}</p>
                <!-- pagination -->
                <b-pagination
                  align="right"
                  :value="walis.current_page"
                  :total-rows="walis.total"
                  :per-page="walis.per_page"
                  @change="changePage"
                  aria-controls="my-table"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal import -->
     <b-modal ref="my-modal" hide-footer title="Import Data WaliSantri">
       
  
            <form @submit.prevent="importWali" enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="form-group">
                        <label>PILIH FILE</label>
                        <input type="file" name="file" @change="handleFileChange" class="form-control" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="toggleModal">TUTUP</button>
                    <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    IMPORT</button>
                </div>
            </form>
      
      </b-modal>
  </main>
</template>

<script>
export default {
  //layout
  layout: "admin",

  //meta
  head() {
    return {
      title: "WaliSantri - Administrator",
    };
  },

  //data function
  data() {
    return {
      //table header
      fields: [
        {
          label: "WaliSantri",
          key: "name",
          tdClass: "text-left",
        },
        {
          label: "No Hp",
          key: "mobile_number",
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

      validation:[],

      
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("admin/waliSantri/getWalisData");
  },

  //computed
  computed: {
    //wali
    walis() {
      return this.$store.state.admin.waliSantri.walis;
    },
  },

  //method
  methods: {
    toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
    //method "searchData"
    searchData() {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/waliSantri/SET_PAGE", 1);

      //dispatch on action "getWalisData"
      this.$store.dispatch("admin/waliSantri/getWalisData", this.search);
    },

    //method "changePage"
    changePage(page) {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/waliSantri/SET_PAGE", page);

      //dispatch on action "getWalisData"
      this.$store.dispatch("admin/waliSantri/getWalisData", this.search);
    },

    //destroyWali
    destroyWali(id) {
      this.$swal
        .fire({
          title: "APAKAH ANDA YAKIN ?",
          text: "INGIN MENGHAPUS DATA INI !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "YA, HAPUS!",
          cancelButtonText: "TIDAK",
        })
        .then((result) => {
          if (result.isConfirmed) {
            //dispatch to action "destroyAngkatan" vuex
            this.$store
              .dispatch("admin/waliSantri/destroyWali", id)
              .then(() => {
                //refresh data
                this.$nuxt.refresh();

                //alert
                this.$swal.fire({
                  title: "BERHASIL!",
                  text: "Data Berhasil Dihapus!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                });
              });
          }
        });
    },

    //handle file upload
    handleFileChange(e) {
      //get file
      let file = (this.file = e.target.files[0]);
      

      //check fileType
      if (!file.type.match("application.[csv|xls|xlsx]")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "product.image" to null
        this.file = null;

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

    async importWali(){
      //sending data to action "importWali" vuex
      let formData = new FormData();
      formData.append('file',this.file)
      await this.$store
        .dispatch("admin/waliSantri/importWali", formData)

        //success
        .then(() => {
          
          //sweet alert
          this.$swal.fire({
            title: "BERHASIL!",
            text: "Data Berhasil Diimport!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          this.toggleModal();

          //redirect route "admin-walis"
          this.$router.push({
            name: "admin-walis",
          });
        })

        //error
        .catch((error) => {
          //assign error to state "validation"
          this.validation = error.response.file
        });
    }
  },
};
</script>

<style>
</style>