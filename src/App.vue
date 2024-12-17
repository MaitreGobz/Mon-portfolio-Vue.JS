<script setup>

import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';

</script>

<template>

  <HeaderPage/>
  <RouterView />
  <FooterPage/>

</template>



