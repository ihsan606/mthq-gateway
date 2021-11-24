<template>
  <main class="c-main" style="background-color: #f8f9fd">
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <h4 style="font-weight: 500">Histori Tagihan</h4>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="invoice-card container">
            <div
              class="invoice-list"
              v-for="invoice in invoices"
              :key="invoice.id"
            >
              <CardInvoice :invoice="invoice" />
            </div>
          </div>
          <div class="spacer my-4"><br></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CardInvoice from "@/components/wali/CardInvoice.vue";
export default {
  components: {
    CardInvoice,
  },
  //layout
  layout: "wali",

  //meta
  head() {
    return {
      title: "Invoices - wali",
    };
  },

  //data function
  data() {
    return {
      //table header

      //state search
      search: "",
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("wali/invoice/getInvoicesData");
  },

  //computed
  computed: {
    //invoices
    invoices() {
      return this.$store.state.wali.invoice.invoices;
    },
  },

  //method
  methods: {
    //method "searchData"
    searchData() {
      //commit to mutation "SET_PAGE"
      this.$store.commit("wali/invoice/SET_PAGE", 1);

      //dispatch on action "getInvoicesData"
      this.$store.dispatch("wali/invoice/getInvoicesData", this.search);
    },

    //method "changePage"
    changePage(page) {
      //commit to mutation "SET_PAGE"
      this.$store.commit("admin/invoice/SET_PAGE", page);

      //dispatch on action "getInvoicesData"
      this.$store.dispatch("admin/invoice/getInvoicesData", this.search);
    },
  },
};
</script>

<style scoped>
.invoice-card {
  position: relative;
  z-index: 2;
  top: 10px;
}

.verticalLine {
  border-left: 2px solid #afbabd;
}
.row {
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

p {
  margin: 0.1em;
}

@media (max-width: 600px) {
  .img-icon {
    width: 40px;
  }
  .img-next {
    width: 40px;
  }

  p.info-text {
    font-size: 14px;
    font-weight: 300;
  }
  p.info-value {
    margin-top: 5px;
    font-size: 16px;
  }
  p {
    font-size: 0.5em;
  }
}
</style>