<template>
  <ul class="c-sidebar-nav">

    <li  class="c-sidebar-nav-item"><nuxt-link :to="{name: 'admin-dashboard'}"  class="c-sidebar-nav-link" href="index.html">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"></use>
        </svg> Dashboard</nuxt-link></li>

    <li class="c-sidebar-nav-title">MASTER DATA</li>

    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'wali-santri'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-education"></use>
        </svg> Santri</nuxt-link>
    </li>
    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'wali-hafalan'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-book"></use>
        </svg> Hafalan</nuxt-link>
    </li>

    <li class="c-sidebar-nav-title">Pembayaran</li>
    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'wali-invoice'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-cart"></use>
        </svg> Tagihan</nuxt-link>
    </li>
    <li class="c-sidebar-nav-title">Akun</li>
    <li class="c-sidebar-nav-item"><a role="button" @click="logout" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-account-logout"></use>
        </svg> Logout</a>
    </li>


    <li class="c-sidebar-nav-divider"></li>
  </ul>
</template>

<script>
  export default {

     //method
  methods: {
    //method "logout"
    async logout() {
      //logout auth
      await this.$auth.logout();

      //redirect route admin login
      this.$router.push({
        name: "wali-login",
      });
    },
  },

  }
</script>

<style scoped>
  a.nuxt-link-active {
    background: rgba(255,255,255,.05)!important;
  }


</style>