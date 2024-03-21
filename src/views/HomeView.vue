<script setup lang="ts">
import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue';
import type { Ref } from 'vue';
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
  const lazyRef: Ref<string> = ref('lazy')
  const numberRef: Ref<number> = ref(0)
  const trimRef: Ref<string> = ref('trim')
  const refWatch: Ref<string> = ref('old value')
  const refObjectWatch: Ref<{[index: string]: string}> = ref({a: 'old value A', b: 'old value B'})
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

  const ChangeConditionRef = () => {
    conditionRef.value = !conditionRef.value
  }
  const getEvent = (event: Event) => {
    console.log('event object', event)
  }
  const getEventMESSAGE = (msg: string, event: Event) => {
    console.log(msg, ' ===> ', event )
  }
  const logged = (msg: string) => {
    console.log(msg)
  }
  const handleChange = (event: Event) => {
    console.log('value of fontSize from input event', (event.target as HTMLInputElement).value)
  }

  watch(
    refWatch,
    () => {
      console.log('[watch on refWatch (without old and new value)] refWatch ===> ', refWatch.value)
    }
  )
  watch(
    refWatch, 
    (newValue) => {
      console.log('[watch on refWatch with once option (with new value)] newValue ===> ', newValue)
    }, 
    {
      once: true
    }
  )
  watch(
    () => `${refWatch.value} ${trimRef.value}`, 
    (str) => {
      console.log('[watch on refWatch + trimRef (with str = ${refWatch.value} ${trimRef.value})] ${refWatch.value} ${trimRef.value} ===> ', str)
    }
  )
  watch(
    [refWatch, trimRef], 
    // [refWatch, () => trimRef.value], 
    ([newValue1, newValue2]) => {
      console.log('[watch on refWatch & trimRef (with newValue1 & newValue2)] newValue1 ===> ', newValue1, 'newValue2 ===> ', newValue2)
    }
  )
  watch(
    () => refObjectWatch.value.a, 
    (newA) => {
      console.log('[watch on refObjectWatch.value.a (with new value)] newA ===> ', newA)
    }
  )
  watch(
    refWatch, 
    (newValue, oldValue) => {
      console.log('[watch on refWatch with immediate option (with new value and old value)] newValue ===> ', newValue, 'oldValue ===> ', oldValue)
    },
    {
      immediate: true
    }
  )
  watch(
    refObjectWatch, 
    (newValue, oldValue) => {
      console.log('[watch on refObjectWatch with deep option (with new value and old value)] newValue ===> ', newValue, 'oldValue ===> ', oldValue)
    },
    { 
      deep: true 
    }
  )
  watchEffect(() => {
    console.log('use watchEffect for track change refWatch.value ===>', refWatch.value)
    console.log('use watchEffect for track change trimRef.value ===>', trimRef.value)
  })
  

  console.log('first message from out outside any Hook')
  onBeforeMount(() => {
    console.log('message from onBeforeMount Hook')
  })
  onMounted(() => {
    console.log('message from onMounted Hook')
  })
  onBeforeUpdate(() => {
    console.log('message from onBeforeUpdate Hook')
  })
  onUpdated(() => {
    console.log('message from onUpdated Hook')
  })
  onBeforeUnmount(() => {
    console.log('message from onBeforeUnmount Hook')
  })
  onUnmounted(() => {
    console.log('message from onUnmounted Hook')
  })
  console.log('last message from out outside any Hook')
  
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

    <div class="border b-green">
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
  <!-- event -->
  <div class="border">
    <h4 class="title">event</h4>
    <button class="link-button not-space blue" @click="conditionRef = !conditionRef">CHANGE CONDITION REF INLINE</button>
    <button class="link-button not-space green" @click="ChangeConditionRef">CHANGE CONDITION REF FUNCTION</button>
    <br>
    <button class="link-button not-space info" @click="logged('HELLO')">SHOW HELLO CONSOLE</button>
    <button class="link-button not-space error" @click="logged('BYE')">SHOW BYE CONSOLE</button>
    <br>
    <button class="link-button not-space blue" @click="getEvent">SHOW EVENT CONSOLE</button>
    <button class="link-button not-space blue" @click="getEventMESSAGE('this is event' ,$event)">SHOW EVENT & MESSAGE CONSOLE</button>
    <br>
    <span class="subtitle text-green" style="margin-right: 8px;">change <span class="text-blue">fontSize</span> for call @CHANGE event</span>
    <input type="number" v-model="fontSize" @change="handleChange">
    <div class="border b-pink">
      <button class="link-button not-space info" @click="logged('BLUE')">
        @click="logged('BLUE')"
        <button class="link-button not-space error" @click="logged('RED')">@click="logged('RED')"</button>
      </button>
      <button class="link-button not-space info" @click="logged('BLUE')">
        @click="logged('BLUE')"
        <button class="link-button not-space error" @click.stop="logged('RED')">@click.stop="logged('RED')"</button>
      </button>
      <button class="link-button not-space info" @click.self="logged('BLUE')">
        @click.self="logged('BLUE')"
        <button class="link-button not-space error" @click="logged('RED')">@click="logged('RED')"</button>
      </button>
      <!-- https://chat.openai.com/share/b3b01228-48de-4d98-9fb9-51efaf94a828 -->
      <br>
      <button class="link-button not-space green" @click.once="logged('GREEN')">
        @click.once="logged('GREEN')"
      </button>
      <br>
      <a @click.prevent="logged('GOOGLE')" href="google.com">google.com (@click.prevent="logged('GOOGLE'))</a>
      <br style="margin-bottom: 16px !important;">
      <span class="subtitle text-blue" style="margin-right: 8px;"><span class="text-green">Enter</span> key event (@keyup.enter)</span> |
      <span class="subtitle text-blue" style="margin-right: 8px;"><span class="text-green">ArrowDown</span> key event (keydown.arrow-down.prevent)</span> |
      <span class="subtitle text-blue" style="margin-right: 8px;"><span class="text-green">ArrowUp</span> key event (keydown.arrow-up)</span> 
      <input 
        type="number" 
        v-model="fontSize" 
        @keyup.enter="logged('keyup.enter')"
        @keydown.arrow-up="logged('keydown.arrow-up')"
        @keydown.arrow-down.prevent="logged('keydown.arrow-down.prevent')"
      >
      <br>
      <button class="link-button not-space error" @click.shift="logged('click.shift')">@click.shift="logged('click.shift')"</button>
      <button class="link-button not-space green" @click.exact="logged('click.exact')">@click.exact="logged('click.exact')"</button>
      <br>
      <button class="link-button not-space info" @click.control="logged('click.ctrl')">@click.ctrl="logged('click.ctrl')" | @click.shift="logged('click.ctrl')" | @click.alt="logged('click.ctrl')" </button>
    </div>
  </div>
  <!-- form -->
  <div class="border">
    <h4 class="title">form</h4>
    <label class="subtitle text-green" style="margin-right: 8px;" for="lazy">v-model.lazy (after unfocus value update)</label>
    <input id="lazy" v-model.lazy="lazyRef">
    <span class="subtitle text-blue" style="margin-left: 8px;">lazyRef ===> {{ lazyRef.toUpperCase() }}</span>
    <br style="margin-bottom: 8px;">
    <label class="subtitle text-green" style="margin-right: 8px;" for="number">v-model.number (type of this mode is number)</label>
    <input v-model.number="numberRef" />
    <span class="subtitle text-blue" style="margin-left: 8px;">numberRef ===> {{ numberRef }} : {{ (typeof numberRef).toUpperCase() }}</span>
    <br style="margin-bottom: 8px;">
    <label class="subtitle text-green" style="margin-right: 8px;" for="trim">v-model.trim (remove white space)</label>
    <input v-model.trim="trimRef" />
    <span class="subtitle text-blue" style="margin-left: 8px;">trimRef ===> "{{ trimRef }}"</span>
  </div>
  <!-- lifecycle -->
  <div class="border">
    <h4 class="title">lifecycle</h4>
    <span class="subtitle"> See your browser console</span>
  </div>
  <!-- watch -->
  <div class="border">
    <h4 class="title">watch</h4>
    <button 
      class="link-button not-space error" 
      @click="
        (refWatch = 'old value'), 
        (refObjectWatch.a = 'old value A'),
        (refObjectWatch.b = 'old value B')
      "
    >
      reset all value in sction
    </button>
    <br>
    <button class="link-button not-space info" @click="refWatch = 'new value'">change <span class="text-blue">refWatch</span> see your browser console</button>
    <br>
    <button class="link-button not-space green" @click="refObjectWatch.a = 'new value A'">change <span class="text-blue">refObjectWatch.a</span> see your browser console</button>
    <button class="link-button not-space green" @click="refObjectWatch.b = 'new value B'">change <span class="text-blue">refObjectWatch.b</span> see your browser console</button>

  </div>
</template>
