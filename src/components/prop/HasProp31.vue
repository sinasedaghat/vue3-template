<script setup lang="ts">
  // const props = defineProps<{
  //   foo: string
  //   bar?: number
  // }>()

  // import type { Props } from './foo'
  // const props = defineProps<Props>()

  interface Props {
    propA: string // required
    propB?: number // optional
  }

  const props = defineProps<Props>()

  console.log('HasProp31 PROPA Prop', props.propA)
</script>

<template>
  <div class="border b-pink">
    <h5 class="title">This is HasProp31 component</h5>
    <div class="chip green bullet">PROPA Prop: <b>{{ propA }}</b></div>
    <p>This component has one optional prop</p>
  </div>
</template>