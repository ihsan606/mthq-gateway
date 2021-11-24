<template>
  <main class="c-main" style="background-color: #F8F9FD">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
              <h4 class="my-3 text-center">Data Santri</h4>
              <b-card class="rounded shadow border-0">
            <div class="row" style="justify-content: start; align-items: start">
              <nuxt-link
                :to="{ name: 'wali-santri-create' }"
                class="btn btn-warning btn-sm mb-3 mx-3 p-2 shadow-sm rounded-md"
              >
                <i class="fa fa-plus-circle"></i> Daftarkan Santri Baru</nuxt-link
              >
            </div>
            <div class="table-responsive">
              <b-table
                rounded
                table-variant="light"
                responsive
                striped
                bordered
                hover
                head-variant="light"
                :items="santris.data"
                :fields="fields"
                show-empty
              >
                <template v-slot:cell(image)="data">
                  <img class="img-fluid" width="200" :src="data.item.image" />
                </template>
                <template v-slot:cell(actions)="row">
                  <b-button
                    :to="{
                      name: 'wali-santri-show-id',
                      params: { id: row.item.id },
                    }"
                    variant="info"
                    size="sm"
                  >
                    Detail
                  </b-button>
                </template>
              </b-table>
            </div>
            </b-card>
          </div>
        </div>
        
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
      title: "Santri - Wali Santri",
    };
  },

  //data function
  data() {
    return {
      //table header
      fields: [
        {
          label: "Santri",
          key: "name",
          tdClass: "text-left font-weight-light",
          thClass: "text-left font-weight-light",
        },
        {
          label: "NISM",
          key: "nism",
          tdClass: "text-left font-weight-light",
          thClass: "text-left font-weight-light",
        },
        {
          label: "Angkatan",
          key: "angkatan.name",
          tdClass: "text-left font-weight-light",
          thClass: "text-left font-weight-light",
        },
        {
          label: "Kelas",
          key: "kelas.name",
          tdClass: "text-left font-weight-light",
          thClass: "text-left font-weight-light",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-left font-weight-light",
          thClass: "text-left font-weight-light",
        },
      ],

      search: "",

      file: "",

      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("wali/santri/getSantrisData");
  },

  //computed
  computed: {
    //santri
    santris() {
      return this.$store.state.wali.santri.santris;
    },
  },

  //method
  methods: {},
};
</script>

<style>
</style>