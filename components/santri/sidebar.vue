<template>
  <ul class="c-sidebar-nav">

    <li  class="c-sidebar-nav-item"><nuxt-link :to="{name: 'pendaftaran-dashboard-id',params:{id: this.$auth.user.id}}"  class="c-sidebar-nav-link" href="index.html">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"></use>
        </svg> Dashboard</nuxt-link></li>

   
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
        name: "pendaftaran-login",
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