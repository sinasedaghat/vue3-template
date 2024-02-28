<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="router-link-active" class="router-link" to="/">Home</RouterLink>
      <!-- <RouterLink to="/about">About</RouterLink> -->
    </nav>
  </header>

  <RouterView />
</template>
