<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="router-link-active" class="router-link" to="/">Home</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/about">About</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/parents">Parents</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/multiple">Multiple</RouterLink>
    </nav>
  </header>

  <router-view class="multi-header" name="Header" />
  <router-view class="multi-home" />
  <router-view class="multi-footer" name="Footer" />
</template>
