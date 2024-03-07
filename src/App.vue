<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="router-link-active" class="router-link" to="/">BASIC</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/props">PROPS</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/emits">EMITS</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/vmodel">V-MODEL</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/fallthrough">FALLTHROUGH</RouterLink>
      <RouterLink active-class="router-link-active" class="router-link" to="/slot">SLOT</RouterLink>
    </nav>
  </header>
  <div style="margin: 50px;">
    <RouterView />
  </div>
</template>
