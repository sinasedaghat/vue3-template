<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { standardLocalDate, localTime } from '@/utils/dateDecoration'

const date: Ref<Date> = ref(new Date())
</script>

<template>
  <div style="margin-top: 50px;">
    <div class="chip blue bullet">
      standardLocalDate({{ date }}) =====> {{ standardLocalDate(date) }}
    </div>

    <div class="chip green bullet">
      standardLocalDate({{ date }}, true) =====> {{ standardLocalDate(date, true) }}
    </div>
  </div>

  <div style="margin-top: 50px;">
    <div class="chip blue bullet">
      localTime({{ date }}, false) =====> {{ localTime(date, false) }}
    </div>

    <div class="chip green bullet">
      localTime({{ date }}, true) =====> {{ localTime(date, true) }}
    </div>
  </div>
</template>


