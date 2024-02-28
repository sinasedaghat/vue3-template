<script setup lang="ts">
import { toFaNumber, toEnNumber } from '@/utils/persianNumber'

</script>

<template>
  <div style="margin-top: 50px;">
    <div class="chip green bullet">
        1234567890 ===> converted number: {{ toFaNumber(1234567890) }}
    </div>
  
    <div class="chip blue bullet">
        123456789 ===> converted string: {{ toFaNumber('123456789') }}
    </div>
  
    <div class="chip blue bullet">
      ۰۱۲۳۴۵۶۷۸۹ ===> converted string: {{ toEnNumber('۰۱۲۳۴۵۶۷۸۹') }}
    </div>
  </div>

  <div>
    <div class="chip blue striated">
        salam1hi2345hello۱67۰89 ===> converted to Fa : {{ toFaNumber('salam1hi2345hello۱67۰89') }}
    </div>
  </div>
  <div>
    <div class="chip green striated">
      sal۲am1hi2۴۳345h۴۴ello۱67۰89 ===> converted to En : {{ toEnNumber('sal۲am1hi2۴۳345h۴۴ello۱67۰89') }}
    </div>
  </div>
  
</template>
