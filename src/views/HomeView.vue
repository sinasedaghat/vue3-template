<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useStaticData } from '@/stores/staticData'

const staticData = useStaticData()
</script>

<template>
  {{ staticData.allStatics }}
</template>
