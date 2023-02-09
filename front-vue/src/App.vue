<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/create-project">Create</RouterLink>
        <RouterLink to="/update-project/2">update</RouterLink>
        <!--<RouterLink to="/about">About</RouterLink>-->
      </nav>
  </header>

  <RouterView />
</template>

