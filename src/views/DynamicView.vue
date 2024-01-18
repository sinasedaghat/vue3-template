<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import { computed, ref, type Ref } from 'vue';
  type Query = {
    name: string, 
    value: string
  }
  type RouteTarget = {
    name: string,
    params?: {[key:string]: string},
    query?: {[key:string]: string}
  }

  const router = useRouter()
  const params_route: Ref<string> = ref('')
  const query: Ref<Query> = ref({
    name: '',
    value: ''
  })
  const target: Ref<RouteTarget> = ref({
    name: 'dynamic_route'
  })
  const calculateTarget = computed(() => {
    if(params_route.value) target.value.params = { route: params_route.value }
    if(query.value.name && query.value.value) target.value.query = { [query.value.name]: query.value.value }
    return target.value
  })
  const routingToTarget = () => {
    target.value.params = { route: params_route.value }
    target.value.query = { [query.value.name]: query.value.value }
    router.push(target.value)
  }
  const routingToPath = () => {
    const path = `/dynamic/${params_route.value}`
    // const path = `/dynamic/${params_route.value}?${query.value.name}=${query.value.value}`
    console.log('path', path)
    router.push({
      path: path,
      query: { [query.value.name]: query.value.value }
    })
  }
</script>

<template>
  <h2 class="title">This is '/dynamic' route bind to DynamicView component</h2>
  <!-- params -->
  <div style="margin: 50px 0px 10px;" class="row">
    <div class="item">
      <span class="label">Params</span>
      <input v-model="params_route" class="input-text-field">
    </div>
  </div>
  <!-- query -->
  <div style="margin-bottom: 30px;" class="row">
    <!-- name -->
    <div class="item" style="margin-right: 30px;">
      <span class="label">Query Name</span>
      <input v-model="query.name" class="input-text-field">
    </div>
    <!-- value -->
    <div class="item">
      <span class="label">Query Value</span>
      <input v-model="query.value" class="input-text-field">
    </div>
  </div>
  <!-- buttons -->
  <div style="margin-bottom: 5px;" class="row">
    <!-- router push buttons -->
    <div style="margin-right: 30px;" class="item">
      <!-- routingToTarget button -->
      <div>
        <button style="margin: 4px 0px;" @click="routingToTarget">
          Router Push To
          <span style="color: #42b883; font-weight: bold;">&nbsp;&nbsp;&nbsp;dynamic_route&nbsp;&nbsp;&nbsp;</span>
          <small>(use target object bind to function)</small>
        </button>
      </div>
      <!-- routingToPath button -->
      <div>
        <button style="margin: 4px 0px;" @click="routingToPath">
          Router Push To
          <span style="color: #42b883; font-weight: bold;">&nbsp;&nbsp;&nbsp;dynamic_route&nbsp;&nbsp;&nbsp;</span>
          <small>(use path bind to function)</small>
        </button>
      </div>
      <!-- router.push() button -->
      <div>
        <button 
          style="margin: 4px 0px;" 
          @click="router.push({
            path: `/dynamic/${params_route}`,
            query: { [query.name]: query.value }
          })"
        >
          Router Push To
          <span style="color: #42b883; font-weight: bold;">&nbsp;&nbsp;&nbsp;dynamic_route&nbsp;&nbsp;&nbsp;</span>
          <small>(use path)</small>
        </button>
      </div>
    </div>
    <!-- RouterLink component -->
    <div style="margin-right: 30px;" class="item">
      <!-- calculateTarget -->
      <div>
        <!-- If there is no .VALUE output of calculateTarget, we have an ERROR -->
        <RouterLink style="margin: 4px 0px;" class="link-button" to=""> <!-- :to="calculateTarget" -->
          Router Link To
          <span style="color: #35495e; font-weight: bold;">&nbsp;&nbsp;&nbsp;dynamic_route&nbsp;&nbsp;&nbsp;</span>
          <small>(use target bind to computed)</small> <small style="color: rgb(255, 62, 62)">&nbsp;&nbsp;&nbsp;HAS ERROR!</small>
        </RouterLink>
      </div>
      <!-- route object -->
      <div>
        <RouterLink 
          style="margin: 4px 0px;" 
          class="link-button" 
          :to="params_route && query.name && query.value ?
            { name: 'dynamic_route', params: { route: params_route }, query: { [query.name]: query.value }} :
            params_route && !query.name && !query.value ? { name: 'dynamic_route', params: { route: params_route }} : ''"
        >
          Router Link To
          <span style="color: #35495e; font-weight: bold;">&nbsp;&nbsp;&nbsp;dynamic_route&nbsp;&nbsp;&nbsp;</span>
          <small>(use route object)</small>
        </RouterLink>
      </div>
      <!-- string path -->
      <div>
        <RouterLink 
          style="margin: 4px 0px;" 
          class="link-button" 
          :to="params_route && query.name && query.value ? 
            `/dynamic/${params_route}?${query.name}=${query.value}` :
            params_route && !query.name && !query.value ? `/dynamic/${params_route}` : ''"
        >
          Router Link To
          <span style="color: #35495e; font-weight: bold;">&nbsp;&nbsp;&nbsp;dynamic_route&nbsp;&nbsp;&nbsp;</span>
          <small>(use path string)</small>
        </RouterLink>
      </div>
    </div>
  </div>
</template>