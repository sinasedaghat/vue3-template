<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import upperLetter from '@/utils/upper_letter'

  const children = ref([
    {
      path: '/parents/',
      name: 'home',
    },
    {
      path: '/parents/first_child',
      name: 'first_child',
    },
    {
      path: '/parents/second_child',
      name: 'second_child',
    },
    {
      path: '/parents/last_child',
      name: 'last_child',
    },
  ])
</script>

<template>
  <h4 class="title inline-block" style="margin-right: 10px;">This component is common to all <b>'parents'</b> router children</h4>
  <h6 class="title inline-block">(This is '/parents' route bind to ParentsView component)</h6>

  <!-- nav -->
  <div class="row nav" style="width: 80vw;">
    <span><b>NAV</b></span>
    <RouterLink 
      v-for="child in children"
      :key="child.name"
      class="link"
      active-class="link-active" 
      :to="child.path"
    >{{ upperLetter(child.name) }}</RouterLink>
  </div>
  <div>
    <!-- side -->
    <div class="side small">
      <div>
        <span><b>SIDE</b></span>
      </div>
    </div>
    <!-- content -->
    <div class="side large">
      <div>
        <span><b>MIDDLE</b></span>
        <RouterView />
      </div>
    </div>
  </div>
</template>