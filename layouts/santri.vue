<template>
  <div class="c-app">
    <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar" >
      <div class="c-sidebar-brand d-lg-down-none">
        <img src="/images/mthq.png" class="bg-light rounded shadow-sm p-1" width="35"> <span style="color:white;font-weight:300" class="ml-2 font-weight-bold">MTHQ GATEWAY</span>
      </div>

      <!-- sidebar -->
      <Sidebar />
      <!-- end sidebar -->

    </div>
    <div class="c-wrapper c-fixed-components">
      

      <div class="c-body">
        
        <!-- content -->
        <Nuxt />
        <!-- end content -->

        <!-- <footer class="c-footer">
          <div><strong>MTHQ GATEWAY</strong> &copy; 2021 - MTHQ.PONPES.ID</div>
          <div class="ml-auto">Develop by&nbsp;<a href="https://coreui.io/">Suns Development</a></div>
        </footer> -->
      </div>
      <!-- header -->
      <Header />
      <!-- end header -->
    </div>
  </div>
</template>

<script>

  import Header from '@/components/santri/header.vue'
  import Sidebar from '@/components/santri/sidebar.vue'

  export default {

    //middleware
    middleware: 'isSantri',

    //register components
    components: {
      Header,
      Sidebar
    }

  }
</script>

<style scoped>

.bg-base {
  position: absolute;
  z-index: -1;
  height: 75%;
  /* top: 25%; */
  bottom: 0px;
  background: #F8F9FD;
  box-shadow: 7px -7px 94px rgba(0, 0, 0, 0.15);
  border-radius: 15px 15px 0px 0px;
}
*{
    font-family: Inter, sans-serif;
    font-weight: bold;
    color: rgba(32, 32, 32, 0.856)
}


</style>