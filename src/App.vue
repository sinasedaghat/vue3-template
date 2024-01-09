<script setup lang="ts">
import { useTheme } from 'vuetify';
const theme = useTheme()
const changeTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
 <v-row align="center" justify="center">
    <v-col>
      <div class="d-flex justify-center ga-2 mt-7">
        <v-chip @click="changeTheme">
          Change Theme
        </v-chip>
    
        <v-chip color="primary">
          Primary
        </v-chip>
    
        <v-chip color="secondary">
          Secondary
        </v-chip>
    
        <v-chip color="error">
          Error
        </v-chip>
    
        <v-chip color="info">
          Info
        </v-chip>
    
        <v-chip color="success">
          Success
        </v-chip>

        <v-chip color="warning">
          Warning
        </v-chip>
      </div>
    </v-col>
   </v-row>
</template>

