<template>
  <header
    class="c-header c-header-light fixed-bottom c-header-with-subheader "
    style="background-color:#fff;"
  >
    <button
      class="c-header-toggler c-class-toggler d-lg-none mfe-auto"
      v-b-toggle.sidebar-backdrop
      type="button"
      data-target="#sidebar"
      data-class="c-sidebar-show"
      style="color:black"
    >
      <i class="fa fa-bars"></i>
    </button>
    <button
      class="c-header-toggler c-class-toggler mfs-3 d-md-down-none"
      type="button"
      data-target="#sidebar"
      data-class="c-sidebar-lg-show"
      responsive="true"
      style="color:black"
    >
      <i class="fa fa-bars"></i>
    </button>
    <div class="d-flex align-items-stretch flex-shrink-0">
      <div class="d-flex align-items-stretch ms-1 ms-lg-3 mt-3 d-lg-none">
      <nuxt-link :to="{name:'pendaftaran-dashboard-id',params:{id: this.$auth.user.id}}">
        <i class="fa fa-home" style="font-size:20px"></i>
      </nuxt-link>
      </div>
    </div>
      <div class="c-avatar ml-auto mr-4 mt-2 ml-2">
            <img
              class="c-avatar-img"
              :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=4e73df&amp;color=ffffff&amp;size=100`"
            />
      </div>
      
      
  </header>
</template>

<script>
export default {
  //computed
  computed: {
    user() {
      return this.$auth.user;
    },
  },

  //method
  methods: {
    //method "logout"
    async logout() {
      //logout auth
      await this.$auth.logout();

      //redirect route admin login
      this.$router.push({
        name: "admin-login",
      });
    },
  },
};
</script>

<style scoped>
.c-header .c-header-toggler{
  color: #fff;
}
</style>