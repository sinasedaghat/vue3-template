<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="router-link-active" class="router-link" to="/">Home</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/nested">Nested</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
