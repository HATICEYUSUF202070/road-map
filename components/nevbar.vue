<script setup>
let NevItems =ref( [
  {
    name : 'Ana Sayfa',
    color: '#4B47FF'
  },
  {
    name : 'Yol Haritasi',
    color: '#FFA800'
  },
  {
    name : 'Blog',
    color: '#0085FF'
  },

]);

</script>
<template>
  <div class="nev-bar">
    <div class="logo">
      <img src="~/public/logo.png" alt="">
    </div>
    <div class="nev-menu" >
      <template v-for=" item in NevItems" :key="index">
        <div class="nev-item"  :style="`background-color: ${item.color}`">
        </div>
        <span>{{ item.name }}</span> </template>
    </div>
    <search/>
  </div>
</template>



<style scoped>
/* Add your scoped styles here if needed */
</style>
