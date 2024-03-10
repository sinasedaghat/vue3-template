<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="router-link-active" class="router-link" to="/">HOME</RouterLink>
    </nav>
  </header>
  <div style="margin: 50px;">
    <RouterView />
  </div>
</template>