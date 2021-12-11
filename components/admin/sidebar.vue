<template>
  <ul class="c-sidebar-nav">

    <li class="c-sidebar-nav-item"><nuxt-link :to="{name: 'admin-dashboard'}" class="c-sidebar-nav-link" href="index.html">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"></use>
        </svg> Dashboard</nuxt-link></li>

    <li class="c-sidebar-nav-title">MASTER DATA</li>

    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-angkatans'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-folder"></use>
        </svg> Angkatan</nuxt-link>
    </li>

    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-kelas'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-room"></use>
        </svg> Kelas</nuxt-link>
    </li>
    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-walis'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-wc"></use>
        </svg> Wali Santri</nuxt-link>
    </li>
    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-santris'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-education"></use>
        </svg> Santri</nuxt-link>
    </li>
    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-hafalan'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-book"></use>
        </svg> Hafalan</nuxt-link>
    </li>

    <li class="c-sidebar-nav-title">Pembayaran</li>
    
    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-jenis_tagihan'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-cart"></use>
        </svg> Jenis Tagihan</nuxt-link>
    </li>
    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-invoice'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-cart"></use>
        </svg> Tagihan</nuxt-link>
    </li>

    <li class="c-sidebar-nav-title">OTHERS</li>

    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-pendaftaran'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
        </svg> Pendaftaran</nuxt-link>
    </li>

    <li class="c-sidebar-nav-item"><nuxt-link :to="{name:'admin-user'}" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-group"></use>
        </svg> Users</nuxt-link>
    </li>

    <li class="c-sidebar-nav-divider"></li>
  </ul>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  a.nuxt-link-active {
    background: rgba(255,255,255,.05)!important;
  }
</style>