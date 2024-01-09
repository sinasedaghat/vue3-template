<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const changeLocale = () => {
  i18n.locale.value = i18n.locale.value == 'en' ? 'fa' : 'en'
}
</script>

<template>
  <h2>{{ $t('HI') }}</h2>
  <button 
    style="border: 0px solid skyblue; color: white; background-color: blue; border-radius: 10;"
    @click="changeLocale"
  > Change Locale </button>
</template>


