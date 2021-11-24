<template>
  <div class="fade-in">
    <div class="text-center mb-4">
      <nuxt-link to="/" class="text-black">
        <img src="/images/mthq.png" width="80" />
        <div class="row justify-content-center">
          <h3 data-text="MTHQ" id="front-text" class="mt-2 font-weight-bold">MTHQ&nbsp;</h3>
          <h3 data-text="GATEWAY" id="front-text" class="mt-2 font-weight-bold" style="color:black">GATEWAY</h3>
        </div>
      </nuxt-link>
    </div>
    <div class="card-group shadow-lg">
      <div class="card border-top-blue border-0 shadow-sm rounded">
        <div class="card-body">
          <h1>Login Wali Santri</h1>
          <p class="text-muted">Sign In to your account</p>
          <div v-if="validation.message" class="mt-2">
            <b-alert show variant="danger">{{ validation.message }}</b-alert>
          </div>
          <form @submit.prevent="login">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-phone"></i>
                </span>
              </div>
              <input
                class="form-control"
                v-model="user.mobile_number"
                :class="{ 'is-invalid': validation.mobile_number }"
                type="text"
                placeholder="No Hp cth:0819xxxxxx"
              />
            </div>
            <div v-if="validation.mobile_number" class="mt-2">
              <b-alert show variant="danger">{{ validation.mobile_number[0] }}</b-alert>
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                v-model="user.password"
                :class="{ 'is-invalid': validation.password }"
                type="password"
                placeholder="Password"
              />
            </div>
            <div v-if="validation.password" class="mt-2">
              <b-alert show variant="danger">{{
                validation.password[0]
              }}</b-alert>
            </div>
            <div class="row">
              <div class="col-12">
                <button
                  class="btn btn-warning shadow-sm rounded-sm px-4 w-100"
                  type="submit"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //middleware
  middleware: "authenticated",

  //layout
  layout: "auth",

  //meta
  head() {
    return {
      title: "Login - Wali",
    };
  },

  data() {
    return {
      //state user
      user: {
        mobile_number: "",
        password: "",
      },
      //validation
      validation: [],
    };
  },

  methods: {
    async login() {
      await this.$auth
        .loginWith("wali", {
          data: {
            mobile_number: this.user.mobile_number,
            password: this.user.password,
          },
        })

        .then(() => {
          //redirect
          this.$router.push({
            name: "wali-dashboard",
          });
        })

        .catch((error) => {
          //assign validation
          this.validation = error.response.data;
        });
    },
  },
};
</script>

<style scoped>
.card {
  background: #ffffff;
  box-shadow: 20px 21px 43px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
}
#front-text {
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 56px;
  letter-spacing: 0.095em;
  color: #14adef;

  text-shadow: 5px 6px 12px rgba(0, 0, 0, 0.25);
}

.input-group-text {
  color: #fff;
  background-color: #14adef;
}


</style>