<script setup lang="ts">
import { ref, type Ref } from 'vue'
import HasSlot1 from '@/components/slot/HasSlot1.vue'
import HasSlot2 from '@/components/slot/HasSlot2.vue'
  const msg: Ref<string> = ref('this text from SlotView.vue component use default slot')
  const slotNameTop: Ref<string> = ref('top-slot')
  const slotNameBottom: Ref<string> = ref('bottom-slot')
</script>

<template>
  <div class="border">
    <h3 class="title text-green">This is Slot Page</h3>
    <HasSlot1>
      <template v-slot:top-slot>
        <p class="subtitle text-blue">this is top-slot content from component itself (this text from SlotView.vue component use top-slot slot)</p>
      </template>
      <h4 class="title text-green">This is HasSlot1 component (<span class="text-blue">{{ msg }}</span>)</h4>
      <template #bottom-slot>
        <p class="subtitle text-blue">this is bottom-slot content from component itself (this text from SlotView.vue component use bottom-slot slot)</p>
      </template>
      <template #data-slot="dataSlot">
        <div class="boredr-left green">
          <p class="subtitle text-blue">
            This TEXT from child (Scoped Slots) dataSlot.text <span class="text-green">{{ dataSlot.text }}</span>
          </p>
          <p class="subtitle text-blue">
            This ID from child (Scoped Slots) dataSlot.id <span class="text-green">{{ dataSlot.id }}</span>
          </p>
        </div>
      </template>
    </HasSlot1>

    <HasSlot1>
      <template #[slotNameTop]>
        <small class="subtitle text-green">this is top-slot content from component itself (this text from SlotView.vue component use <b class="text-blue">dynamic</b> slot)</small>
      </template>
      <template v-slot:[slotNameBottom]>
        <small class="subtitle text-green">this is bottom-slot content from component itself (this text from SlotView.vue component use <b class="text-blue">dynamic</b> slot)</small>
      </template>
      <template #default>
        <h4 class="title text-green">This is HasSlot1 component (this text from SlotView.vue component use default slot)</h4>
      </template>
    </HasSlot1>

    <HasSlot1 v-slot="{textDefault, idDefault}">
      <h4 class="title text-green">This is HasSlot1 component (this text from SlotView.vue component use default slot)</h4>
      <div class="boredr-left blue">
        <p class="subtitle text-green">
          This TEXT from child (Scoped Slots) <span class="text-blue">text ==>{{ textDefault }}</span>
        </p>
        <p class="subtitle text-green">
          This ID from child (Scoped Slots) <span class="text-blue">id ==> {{ idDefault }}</span>
        </p>
      </div>
    </HasSlot1>

    <HasSlot2>
      <h4 class="title text-green">This is message from SlotView component for HasSlot2's slot component</h4>
      <!-- <template #item="item">
        {{ item }} -->
      <template #item="{id, title, subtitle, color}">
        <div class="border b-pink">
          <h3 class="title text-blue">{{ title }}</h3>
          <p class="subtitle text-green inline-block">{{ subtitle }}</p>
          <div :class="`chip bullet ${color}`">
            ID from SlotView ===> <b>{{ id }}</b>
          </div>
        </div>
      </template>
    </HasSlot2>
  </div>
</template>
