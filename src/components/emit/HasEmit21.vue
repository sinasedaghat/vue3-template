<script setup lang="ts">
import { ref, type Ref } from 'vue';

  const payload: Ref<{ email: string, password: string }> = ref({ email: 'Email', password: 'pass' })
  const emit = defineEmits({
    // unvalidatedEvent: null,
    click: null,
    submit(payload: { email: string, password: string }) {
      if (payload.password === 'seda') {
        return true
      } else {
        console.log(`password is not SEDA`)
        return false
      }
    }
  })
</script>

<template>
  <div class="border b-pink">
    <h5 class="title">This is HasEmit21 component</h5>
    <button class="link-button not-space" @click="payload.password = 'seda'">password = 'seda'</button>
    <button class="link-button not-space" @click="$emit('submit', payload)">SUBMIT</button>
  </div>
</template>