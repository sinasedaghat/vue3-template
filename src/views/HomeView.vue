<script setup lang="ts">
import { computed, reactive, ref, type Ref } from 'vue';

  const priceRef: Ref<string> = ref ('')
  const activeRef: Ref<boolean> = ref(false)
  const errorRef: Ref<boolean> = ref(true)
  const conditionRef: Ref<boolean> = ref(true)
  const borderClass: Ref<string> = ref('b-pink')
  const fontSize: Ref<number> = ref(10)
  const refValue: Ref<string> = ref('REF Value String')
  const reactiveValue: {value: string} = reactive({
    value: 'REACTIVE Value String'
  })

  const computedValue = computed<string>(() => 'COMPUTED Value String')
  const priceComputed = computed<string>({
    get() {
      return `$${priceRef.value}`
    },
    set(newValue: string) {
      priceRef.value = newValue.replace(/\$/g, "").toString()
    } 
  })
  const computedClass = computed(() => ({
    'b-error': !activeRef.value && errorRef.value,
    'b-success': !activeRef.value && !errorRef.value,
    'text-blue': activeRef.value && !errorRef.value
  }))


</script>

<template>
  <h4 class="title text-green">This is HomeView Page</h4>
  <!-- reactive data -->
  <div class="border">
    <div class="chip green bullet">
      refValue ===> <b>{{ refValue }}</b>
    </div>
  
    <div class="chip blue bullet">
      reactiveValue ===> <b>{{ reactiveValue }}</b>
    </div>
  </div>
  <!-- computed -->
  <div class="border">
    <div class="chip green bullet">
      computedValue ===> <b>{{ computedValue }}</b>
    </div>
    <br>
    <input type="text" v-model="priceComputed" style="margin-left: 10px;">
    <div class="chip green bullet">
      priceRef ===> <b>{{ priceRef }}</b>
    </div>
  </div>
  <!-- class & style -->
  <div class="border">
    <input type="checkbox" label="activeRef" v-model="activeRef"><span class="subtitle text-blue" style="margin-right: 50px;">activeRef</span>
    <input type="checkbox" label="activeRef" v-model="errorRef"><span class="subtitle text-blue" style="margin-right: 50px;">errorRef</span>
    <span class="subtitle text-blue" style="margin-right: 8px;">fontSize</span><input type="number" v-model="fontSize">
    <!--  -->
    <div :class="{ border: activeRef, 'text-error': errorRef }" style="margin-bottom: 30px;">
      <div class="border b-green">
        this element has optional class
        <br>
        &lt;div class="{ border: {{ activeRef }}, 'text-error': {{ errorRef }} }" &gt; &lt;div /&gt;
      </div>
    </div>

    <div 
      class="border" 
      :class="computedClass"
      style="margin-bottom: 30px;"
    >
      <div class="border b-green">
        this element has optional class from computed
        <br>
        &lt;div class="{ border {{ computedClass }} }" &gt; &lt;div /&gt;
      </div>
    </div>

    <div 
      class="border" 
      :class="[ activeRef ? borderClass : '' ]" 
      style="margin-bottom: 30px;"
      :style="{ 'font-size': `${fontSize}px` }"
    >
      <div class="border b-green">
        this element has optional class bind to array and has dynamic style
        <br>
        &lt;div class="border [ {{ activeRef }} ? {{ borderClass }} : ' ' ]" style="{ font-size: {{ fontSize }}px }" &gt; &lt;div /&gt;
      </div>
    </div>


    <!-- <div class="border" :class="[ activeRef ? borderClass : '' ]" style="margin-bottom: 30px;">
      <div class="border b-green">
        this element has optional class bind to array
        <br>
        &lt;div class="border [ {{ activeRef }} ? {{ borderClass }} : ' ' ]" &gt; &lt;div /&gt;
      </div>
    </div> -->

  </div>
  <!-- condition -->
  <div class="border">
    <input type="checkbox" v-model="conditionRef">
    <br>
    <div class="chip blue bullet" v-show="conditionRef">
     test condition v-show
    </div>
    <div class="chip blue bullet" v-if="conditionRef">
     test condition v-if
    </div>
  </div>
</template>
