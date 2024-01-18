<script setup lang="ts">
import { useRoute } from 'vue-router'
  const route = useRoute()
</script>

<template>
  <h2 class="title">This is '/dynamic/:route' route bind to DynamicRouteView component</h2>



  route.fullPath ==> {{ route.fullPath }} <br>
  route.path ==> {{ route.path }} <br>
  route.params ==> {{ route.params }} <br>
  route.query ==> {{ route.query }}
</template>