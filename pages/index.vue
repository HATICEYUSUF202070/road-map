<script setup >

import Posts from "~/components/post/posts.vue";
</script>

<template>
  <div class="container mx-auto">
    <Nevbar/>
    <div class="content md:w-auto">
      <div class="side-left">
        <top-topic/>
        <categories/>
        <tags/>
      </div>
      <div class="side-right">
        <posts/>
      </div>

    </div>
  </div>
</template>

<style>

</style>