<script setup>
function search() {
  console.log("search")

}
</script>

<template>
  <div class="search-bar" @click="search">

    <img class="search-icon" src="~/public/Search.png" alt="">
    <span class="search-text">Arama... </span>

  </div>

</template>

<style scoped>

.search-bar {
  @apply flex justify-start items-center px-2 py-1 ;
  background-color: var(--primary-color);
  border-radius: 15px;
  transition: 0.5s;
}

.search-bar:hover {
  transform: scale(1.03);
  transition: 0.5s;
}

.search-bar:hover .search-icon {
  transform: rotate(-45deg);
  transition: 0.5s;
}

.search-icon {
  @apply w-7 mx-1 py-2;
  transform: rotate(0deg);
  transition: 0.5s;
}

.search-text {
  @apply mx-2 py-2 pe-2 text-xl;
}

</style>