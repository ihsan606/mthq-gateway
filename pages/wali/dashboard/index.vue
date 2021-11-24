<template>
  <main class="c-main" style="background-color: #f8f9fd">
    <div class="main container-fluid">
      <div class="fade-in">
        <div class="info container bg-white">
          <div class="col info-kiri justify-content-center">
            <p class="info-text mt-2" style="font-weight: 300">Total Tagihan</p>
            <p class="info-value" style="font-weight: 500">
              Rp. {{ formatPrice(statistic.total_tagihan.total) }}
            </p>
          </div>

          <div class="verticalLine"></div>
          <div class="col info-kanan justify-content-center">
            <p class="info-text mt-2" style="font-weight: 300">Jumlah Anak</p>
            <p class="info-value" style="font-weight: 500">
              {{ statistic.count.santri }} santri
            </p>
          </div>
        </div>
        <div class="invoice-card container mt-5" style="top: 110px">
          <p style="font-weight: 500">Tagihan Terbaru</p>
          <div v-if="invoices==''" class="mt-3">
            <!-- component -->
            <div class="-m-2 text-center">
              <div class="p-1">
                <div
                  class="
                    inline-flex
                    items-center
                    bg-white
                    leading-none
                    text-purple-600
                    rounded-full
                    p-2
                    shadow
                    text-teal text-sm
                  "
                >
                  <p
                    class="
                      inline-flex
                      bg-indigo-600
                      text-white
                      rounded-full
                      h-6
                      px-3
                      justify-center
                      items-center
                    "
                    >Horeee</p
                  >
                 
                    <p class="inline-flex px-2">Tenang aja🤣, Tagihan Belum Ada Kok</p>
                </div>
              </div>

            </div>
          </div>
          <!-- <b-alert v-if="invoices == ''" show variant="success"
            ><p>Horee🤩, Tagihan Belum Ada</p></b-alert
          > -->

          <div
            class="invoice-list"
            v-for="invoice in invoices"
            :key="invoice.id"
          >
            <CardInvoice :invoice="invoice" />
          </div>
        </div>
      </div>
    </div>
    <div class="spacer my-4">.</div>
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
      title: "Dashboard - Wali Santri",
    };
  },

  //hook "asyncData"
  async asyncData({ store, $axios }) {
    await store.dispatch("wali/invoice/getInvoicesData");
    await store.dispatch("wali/dashboard/getDashboardData");
  },

  //computed
  computed: {
    //jenisTagihan
    invoices() {
      return this.$store.state.wali.invoice.invoices;
    },

    statistic() {
      return this.$store.state.wali.dashboard.dashboard;
    },
  },
};
</script>

<style >
.info {
  padding: 1em;
  display: flex;
  position: relative;
  z-index: 2;
  height: 90px;
  top: 25%;
  background: #ffffff;
  box-shadow: 5px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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
    font-size: 0.7em;
  }
}
</style>