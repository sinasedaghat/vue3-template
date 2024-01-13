<script setup lang="ts">  
  import { inject } from 'vue';
  import { useInfoStore } from '@/stores/info'
  
  const infoStore = inject('infoStore') as ReturnType<typeof useInfoStore>

  console.log(infoStore)
  infoStore.printInfo()
</script>

<template>
  <h3 class="title">This is '/info' route bind to InfoView</h3>
  <div>
    <div class="chip blue bullet" style="padding: 10px 100px;">
      <h3>count from useInfoStore inject() data from provide() in main.ts (globally access to info.ts file pinia state management)</h3>
      <!-- id -->
      <div>
        <b>id</b>: <span v-html="infoStore.information.id" />
      </div>
      <!-- name -->
      <div>
        <b>name</b>: <span v-html="infoStore.information.name" />
      </div>
      <!-- language -->
      <div>
        <b>guage</b>: <span v-html="infoStore.information.language" />
      </div>
      <!-- description -->
      <div>
        <b>description</b>: <span v-html="infoStore.information.description" />
      </div>
      <!-- ip -->
      <div>
        <b>ip</b>: <span v-html="infoStore.information.ip" />
      </div>
  </div>
  </div>
</template>
