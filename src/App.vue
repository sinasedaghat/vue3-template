<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="router-link-active" class="router-link" to="/">BASIC</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/props">PROPS</RouterLink>
      <!-- <RouterLink to="/about">About</RouterLink> -->
    </nav>
  </header>
  <div style="margin: 50px;">
    <RouterView />
  </div>
</template>
