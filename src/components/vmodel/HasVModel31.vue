<script setup lang="ts">
  // const model = defineModel()
  const titleChild = defineModel('title')
  const subtitleChild = defineModel('subtitle')

  // console.log('mode from HasVModel31.vue component', model.value)
</script>

<template>
  <div class="border b-pink">
    <h5 class="title">This is HasVModel31 component</h5>
    <p class="title">TITLE-CHILD from HasVModel31: {{ titleChild }}</p>
    <p class="title">SUBTITLE-CHILD from HasVModel31: {{ subtitleChild }}</p>
    <div style="margin-bottom: 5px;">
      <span>Title</span> <input type="text" v-model="titleChild">
    </div>
    <div>
      <span>Subtitle</span> <input type="text" v-model="subtitleChild">
    </div>
    <button class="link-button not-space" @click="titleChild = 'title Change from child'">CHANGE TITLE</button>
  </div>
</template>