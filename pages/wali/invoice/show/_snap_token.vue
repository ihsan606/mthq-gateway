<template>
  <main class="c-main">
    <div class="container">
      <div class="row">
        <div class="col d-flex flex-column align-items-left">
          <h4>Pembayaran Tagihan</h4>
          <p style="font-weight: 400; font-size: 1em">Detail Transaksi</p>
        </div>
      </div>
      
      <div class="row mt-3 d-flex justify-content-center">
        <div class="top col d-flex mx-2">
          <div v-if="invoice.jenis_tagihan.name.includes('Makan')||invoice.jenis_tagihan.name.includes('MAKAN')" class="top col d-flex">
            <img class="img-icon" src="/images/iftar.png" width="60" alt="" />
            <h5 class="mt-2">Rp. {{ formatPrice(invoice.grand_total) }}</h5>
          </div>
          <div
            v-if="invoice.jenis_tagihan.name.includes('SPP')"
            class="top col d-flex"
          >
            <img
              class="img-icon d-flex"
              src="/images/mortarboard.png"
              width="60"
              alt=""
            />
            <h5 class="mt-2">Rp. {{ formatPrice(invoice.grand_total) }}</h5>
          </div>
        </div>
      </div>
      <b-list-group class="mt-5">
        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Tanggal</p>
          <p style="font-weight:500">{{invoice.updated_at}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Invoice</p>
          <p style="font-weight:500">{{invoice.invoice}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Jenis</p>
          <p style="font-weight:500">{{invoice.jenis_tagihan.name}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Santri</p>
          <p style="font-weight:500">{{invoice.santri.name}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Tagihan</p>
          <p style="font-weight:500">Rp. {{formatPrice(invoice.grand_total-5000)}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Biaya Admin</p>
          <p style="font-weight:500">Rp. {{formatPrice(5000)}}</p>
        </b-list-group-item>

        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Total</p>
          <p style="font-weight:500">Rp. {{formatPrice(invoice.grand_total)}}</p>
        </b-list-group-item>
        <b-list-group-item
          class="detail d-flex justify-content-between align-items-center"
        >
          <p style="font-weight:500">Status Pembayaran</p>
          <b-badge variant="warning" pill>{{invoice.status}}</b-badge>
        </b-list-group-item>
      </b-list-group>
      <div class="row mt-3">
          <div class="pay col d-flex justify-content-center">
          <button @click="payment(invoice.snap_token)" v-if="invoice.status == 'pending'"
                        class="btn btn-info btn-sm rounded shadow">Lanjutkan Pembayaran</button>
            </div>
      </div>
      <div class="spacer mt-4"><br></div>
      
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
      title: "Dashboard - Administrator",
    };
  },

  data() {
    return {
      snap_token: "",
      education: "images/mortarboard.png",
      meal: "images/iftar.png",
    };
  },

  async asyncData({ store, route }) {
    await store.dispatch(
      "wali/invoice/getDetailInvoice",
      route.params.snap_token
    );
  },

  //computed
  computed: {
    invoice() {
      return this.$store.state.wali.invoice.invoice;
    },
  },

  methods: {
       //method "payment"  
      payment(snap_token) {
        window.snap.pay(snap_token, {

          onSuccess: function () {
            router.push({
              name: 'invoice-show-snap_token',
              params: {
                snap_token: snap_token
              }
            })
          },
          onPending: function () {
            router.push({
              name: 'invoice-show-snap_token',
              params: {
                snap_token: snap_token
              }
            })
          },
          onError: function () {
            router.push({
              name: 'invoice-show-snap_token',
              params: {
                snap_token: snap_token
              }
            })
          }
        })
      },
  }
};
</script>

<style scoped>
.c-main {
  background-color: #f8f9fd;
}

.d-flex {
    display: flex!important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.top.col{
    flex-direction:column;
    align-items: center;
}

.detail.d-flex{

}
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

.invoice-card {
  position: relative;
  z-index: 2;
  top: 100px;
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

h4 {
  margin: 0.1em;
}

@media (max-width: 900px) {
  .pay.col{
      flex-direction: row;
      justify-content:center;
  }

  .d-flex {
    flex-direction: column;
    align-items: center;
  }
  .detail.d-flex{
    flex-direction: row;
  }
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

  p {
    font-size: 0.7em;
  }
}
</style>