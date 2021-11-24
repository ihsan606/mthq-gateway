<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-shopping-cart"></i> DETAIL INVOICE</span
                >
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <tr>
                      <td style="width: 25%">NO. INVOICE</td>
                      <td style="width: 1%">:</td>
                      <td>
                        {{ invoice.invoice }}
                      </td>
                    </tr>
                    <tr>
                      <td>NAMA TAGIHAN</td>
                      <td>:</td>
                      <td>
                        {{ invoice.jenis_tagihan.name }}
                      </td>
                    </tr>
                    <tr>
                      <td>NAMA SANTRI</td>
                      <td>:</td>
                      <td>
                        {{ invoice.santri.name }}
                      </td>
                    </tr>
                    <tr>
                      <td>NAMA WALI SANTRI</td>
                      <td>:</td>
                      <td>
                        {{ invoice.wali.name }}
                      </td>
                    </tr>
                    <tr>
                      <td>NO HP</td>
                      <td>:</td>
                      <td>
                        {{ invoice.santri.no_hp }}
                      </td>
                    </tr>
                    <tr>
                      <td>ALAMAT</td>
                      <td>:</td>
                      <td>
                        {{ invoice.santri.alamat }}
                      </td>
                    </tr>
                    <tr>
                      <td>GRAND TOTAL</td>
                      <td>:</td>
                      <td>Rp. {{ formatPrice(invoice.grand_total) }}</td>
                    </tr>

                    <tr>
                      <td>STATUS</td>
                      <td>:</td>
                      <td>
                        <form @submit.prevent="updateStatusInvoice">
                          <div class="form-group">
                            <select class="form-control" v-model="status">
                              <option value="">-- Pilih Status --</option>
                              <option
                                v-for="status in statuses"
                                :key="status"
                                :value="status"
                              >
                                {{ status }}
                              </option>
                            </select>
                            <div v-if="validation.status" class="mt-2">
                              <b-alert show variant="danger">{{
                                validation.status[0]
                              }}</b-alert>
                            </div>
                          </div>
                          <button
                            v-if="invoice.status == 'pending'"
                            class="btn btn-primary"
                          >
                            <i class="fa fa-circle-notch fa-spin"></i>
                            {{ invoice.status }}
                          </button>
                          <button
                            v-else-if="invoice.status == 'success'"
                            class="btn btn-success"
                          >
                            <i class="fa fa-check-circle"></i>
                            {{ invoice.status }}
                          </button>
                          <button
                            v-else-if="invoice.status == 'expired'"
                            class="btn btn-warning-2"
                          >
                            <i class="fa fa-exclamation-triangle"></i>
                            {{ invoice.status }}
                          </button>
                          <button
                            v-else-if="invoice.status == 'failed'"
                            class="btn btn-danger"
                          >
                            <i class="fa fa-times-circle"></i>
                            {{ invoice.status }}
                          </button>
                          <button
                            class="btn btn-info mr-1 btn-submit"
                            type="submit"
                          >
                            <i class="fa fa-paper-plane"></i> SAVE
                          </button>
                          <button
                            class="btn btn-warning btn-reset"
                            type="reset"
                          >
                            <i class="fa fa-redo"></i> RESET
                          </button>
                        </form>
                      </td>
                    </tr>
                  </table>
                </div>
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
      title: "Detail Invoices - Administrator",
    };
  },

  data() {
    return {
      status: "",

      statuses: ["pending", "success", "expired", "failed"],
      //state validation
      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch("admin/invoice/getDetailinvoice", route.params.id);
  },

  mounted() {
      this.status = this.$store.state.admin.invoice.invoice.status;
  },

  //computed
  computed: {
    invoice() {
      return this.$store.state.admin.invoice.invoice;
    },
  },

  methods: {

      //method "updateStatusInvoice"
      async updateStatusInvoice() {

        //define formData
        let formData = new FormData();

        formData.append('status',this.status);
   
        formData.append("_method", "PATCH")

        //sending data to action "updatejenisTagihan" vuex
        await this.$store.dispatch('admin/invoice/updateInvoice', {
            invoiceId: this.$route.params.id,
            payload: formData
        })

          //success
          .then(() => {

            //sweet alert
            this.$swal.fire({
              title: 'BERHASIL!',
              text: "Data Berhasil Diupdate!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })

            //redirect route "admin-users"
            this.$router.push({
              name: 'admin-invoice'
            })

          })

          //error
          .catch(error => {

            //assign error to state "validation"
            this.validation = error.response.data
          })
      }
    }
};
</script>

<style>
</style>