<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="router-link-active" class="router-link" to="/">Home</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/about">About</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/parents">Parents</RouterLink>
      
    </nav>
  </header>

  <RouterView />
</template>
