<script setup lang="ts">
defineOptions({
    inheritAttrs: false
  })
  import { useAttrs } from 'vue'

  const attrs = useAttrs()
  console.log('attrs from FallthroughView component in  HasFallthrough2 component', attrs)
  const clickedChild = () => {
    console.log('clickedChild');
    (attrs.onClick as () => void)()
  }
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasFallthrough2 component</h4>
    <button class="link-button not-space" @click="attrs.onClick">call clicked() from template</button>
    <button class="link-button not-space" @click="clickedChild">call clicked() from script</button>
  </div>
</template>