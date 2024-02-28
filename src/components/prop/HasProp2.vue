<script setup lang="ts">
  const props = defineProps({
    a: Number, // Basic type check (`null` and `undefined` values will allow any type)
    b: [String, Number], // Multiple possible types
    c: { // Required string
      type: String,
      required: true
    },
    d: { // Number with a default value
      type: Number,
      default: 100
    },
    e: { // Object with a default value (Object or array defaults must be returned from a factory function.)
      type: Object,
      default(rawProps: any) { // The function receives the raw props received by the component as the argument. (access other component's props)
        console.log('other props of this component', rawProps)
        return { message: 'hello' }
      }
    },
    f: { // Custom validator function
      type: String,
      validator(value: string, props) { // full props passed as 2nd argument in 3.4+ reactivate data
        console.log('full props passed', props)
        console.log('value', value)
        return ['success', 'warning', 'danger'].includes(value) // The value must match one of these strings
      }
    },
    g: {
      type: Array,
    }
  })
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasProp2 component</h4>
    <p class="subtitle">this component has multi type props</p>
    <h5>List of props</h5>
    <div class="chip blue bullet">a: <b>{{ a }}</b> <small>simple prop</small></div>
    <div class="chip blue bullet">b: <b>{{ b }}</b> <small>multi type prop</small></div>
    <br>
    <div class="chip blue bullet">c: <b>{{ c }}</b> <small>required prop</small></div>
    <div class="chip blue bullet">d: <b>{{ d }}</b> <small>prop has default</small></div>
    <br>
    <div class="chip blue bullet">e: <b>{{ e }}</b> <small>prop has default & object type</small></div>
    <br>
    <div class="chip blue bullet">f: <b>{{ f }}</b> <small>prop has validator</small></div>
    <div class="chip blue bullet">g: <b>{{ g }}</b> <small>prop has array type</small></div>
  </div>
</template>