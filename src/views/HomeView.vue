<script setup lang="ts">
import { computed, reactive, ref, type Ref } from 'vue';
  const refValue: Ref<string> = ref('REF Value String')
  const reactiveValue: {value: string} = reactive({
    value: 'REACTIVE Value String'
  })
  const priceRef: Ref<string> = ref ('')
  const activeRef: Ref<boolean> = ref(false)
  const errorRef: Ref<boolean> = ref(true)
  const conditionRef: Ref<boolean> = ref(true)
  const borderClass: Ref<string> = ref('b-pink')
  const fontSize: Ref<number> = ref(10)
  const arrayObject = ref([{message: 'messageA'}, {message: 'messageB'}, {noMessage: true}])
  const objectObject = ref({a: {message: 'messageA'}, b: {message: 'messageB'}})

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
    <h4 class="title">reactive data</h4>
    <div class="chip green bullet">
      refValue ===> <b>{{ refValue }}</b>
    </div>
  
    <div class="chip blue bullet">
      reactiveValue ===> <b>{{ reactiveValue }}</b>
    </div>
  </div>
  <!-- computed -->
  <div class="border">
    <h4 class="title">computed</h4>
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
    <h4 class="title">class & style</h4>
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
      :style="{ 'font-size': `${fontSize}px` }"
    >
      <div class="border b-green">
        this element has optional class bind to array and has dynamic style
        <br>
        &lt;div class="border [ {{ activeRef }} ? {{ borderClass }} : ' ' ]" style="{ font-size: {{ fontSize }}px }" &gt; &lt;div /&gt;
      </div>
    </div>
  </div>
  <!-- condition -->
  <div class="border">
    <h4 class="title">condition</h4>
    <input type="checkbox" v-model="conditionRef"><span class="subtitle text-blue" style="margin-right: 50px;">conditionRef</span>
    <br>
    <div class="chip blue bullet" v-show="conditionRef">
     test condition v-show
    </div>
    <div class="chip blue bullet" v-if="conditionRef">
     test condition v-if
    </div>
  </div>
  <!-- loop -->
  <div class="border">
    <h4 class="title">loop</h4>
    <div class="border b-pink" style="margin-bottom: 30px;">
      <div
        v-for="(item, index) in arrayObject" 
        class="chip green bullet"
      >
        item[{{ index }}]['message'] ===> {{ item.message }}
      </div>
      <br>
      <div
        v-for="({message}, index) in arrayObject" 
        class="chip green striated"
      >
        item[{{ index }}]['message'] ===> {{ message }}
      </div>
    </div>

    <div class="border b-yellow" style="margin-bottom: 30px;">
      <div
        v-for="(value, key, index) in objectObject" 
        class="chip blue bullet"
      >
        {{ index }} ===> objectObject['{{ key }}']['message'] ===> {{ value.message }}
      </div>
    </div>

    <div class="border b-green" style="margin-bottom: 30px;">
      <template v-for="(item, index) in arrayObject" >
        <div
          v-if="!item.noMessage"
          class="chip green bullet"
        >
          item[{{ index }}]['message'] ===> {{ item.message }}
        </div>
      </template>
    </div>
  </div>



</template>
