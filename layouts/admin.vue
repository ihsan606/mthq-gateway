<template>
  <div class="c-app">
    <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div class="c-sidebar-brand d-lg-down-none">
        <img src="/images/mthq.png" class="bg-light rounded shadow-sm p-1" width="35"> <span class="ml-2 font-weight-bold">MTHQ GATEWAY</span>
      </div>

      <!-- sidebar -->
      <Sidebar />
      <!-- end sidebar -->

    </div>
    <div class="c-wrapper c-fixed-components">
      
      <!-- header -->
      <Header />
      <!-- end header -->

      <div class="c-body">

        <!-- content -->
        <Nuxt />
        <!-- end content -->

        <footer class="c-footer">
          <div><strong>MTHQ GATEWAY</strong> &copy; 2021 - MTHQ.PONPES.ID</div>
          <div class="ml-auto">Develop by&nbsp;<a href="https://coreui.io/">Suns Development</a></div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from '@/components/admin/header.vue'
  import Sidebar from '@/components/admin/sidebar.vue'

  export default {

    //middleware
    middleware: 'isAdmin',

    //register components
    components: {
      Header,
      Sidebar
    }

  }
</script>

<style>
*{
    font-family: Inter, sans-serif;
}
</style>