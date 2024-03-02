<script setup lang="ts">
  export interface Props {
    msg?: string
    labels?: string[]
  }

  const props = withDefaults(defineProps<Props>(), {
    msg: 'hello',
    labels: () => ['one', 'two']
  })

  console.log('HasProp32 MSG Prop', props.msg)
  console.log('HasProp32 LABELS Prop', props.labels)
</script>

<template>
  <div class="border b-pink">
    <h5 class="title">This is HasProp32 component</h5>
    <div class="chip green bullet">MSG Prop: <b>{{ msg }}</b></div>
    <div class="chip green bullet">LABELS Prop: <b>{{ labels }}</b></div>
    <p>This component has optional prop with default value</p>
  </div>
</template>