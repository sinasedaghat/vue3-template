<script setup lang="ts">
  const props =defineProps({
    title: String,
    counter: Number
  })

  console.log('HasProp1 TITLE Prop', props.title)
  console.log('HasProp1 COUNTER Prop', props.counter)
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasProp1 component</h4>
    <p class="subtitle">this component has basic & simple props</p>
    <div class="chip green bullet">TITLE Prop: <b>{{ title }}</b></div>
    <div class="chip green bullet">COUNTER Prop: <b>{{ counter }}</b></div>
  </div>
</template>