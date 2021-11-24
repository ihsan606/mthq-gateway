<template>
  <main class="c-main" style="background-color:#F8F9FD">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
              <h4 class="my-3 text-center">Data Hafalan Santri</h4>
              <b-card class="shadow rounded border-0">
              <b-table
                table-variant="light" 
                responsive
                striped
                bordered
                hover
                head-variant="light"
                :items="hafalans.data"
                :fields="fields"
                show-empty
              >
              </b-table>
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
      title: "Hafalan - Wali",
    };
  },

  //data function
  data() {
    return {
      //table header
      fields: [
        {
          label: "Nama Santri",
          key: "santri.name",
          tdClass: "text-left font-weight-light",
          thClass: "text-left font-weight-light",
          thStyle: "font-size:1em",
        },
        {
          label: "Jumlah Juz",
          key: "jumlah_juz",
          tdClass: "text-left font-weight-light",
          thClass: "text-left font-weight-light",
        },
        {
          label: "Angkatan",
          key: "santri.angkatan.alias",
          sortable: true,
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
    await store.dispatch("wali/hafalan/getHafalansData");
  },

  //computed
  computed: {
    //hafalans
    hafalans() {
      return this.$store.state.wali.hafalan.hafalans;
    },
    user() {
      return this.$auth.user;
    },
  },

  //method
  methods: {},
};
</script>

<style>
</style>