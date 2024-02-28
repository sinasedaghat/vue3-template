<script setup lang="ts">

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

  // const props = defineProps<{
  //   foo: string
  //   bar?: number
  // }>()

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

  // interface Props {
  //   foo: string
  //   bar?: number
  // }

  // const props = defineProps<Props>()

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

  // import type { Props } from './foo'

  // const props = defineProps<Props>()

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

  // export interface Props {
  //   msg?: string
  //   labels?: string[]
  // }

  // const props = withDefaults(defineProps<Props>(), {
  //   msg: 'hello',
  //   labels: () => ['one', 'two']
  // })

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// https://vuejs.org/guide/typescript/composition-api#complex-prop-types

</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasProp3 component</h4>
    <p class="subtitle">this component has props definition with generics</p>
  </div>
</template>