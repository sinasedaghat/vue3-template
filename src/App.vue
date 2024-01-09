<script setup lang="ts">
import { useTheme } from 'vuetify';
const theme = useTheme()
const changeTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const changeLocale = () => {
  i18n.locale.value = i18n.locale.value == 'en' ? 'fa' : 'en'
}

</script>

<template>
  <v-locale-provider> <!-- This component enables vuetify RTL and more -->
    <v-row align="center" justify="center">
      <!-- buttons -->
      <v-col>
        <div class="d-flex justify-center ga-2 mt-7">
          <!-- change theme button -->
          <v-chip @click="changeTheme">
            Change Theme
          </v-chip>
        </div>
        <div class="d-flex justify-center ga-2 mt-2">
          <!-- change locale button -->
          <v-chip @click="changeLocale">
            Change Locale
          </v-chip>
        </div>
      </v-col>

      <v-col cols="12">
        <!-- vuetify component -->
        <div class="d-flex justify-center ga-2 mt-7">
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
        <!-- i18n locale -->
        <div class="d-flex justify-start ga-2 mt-7 mx-3">
          <v-chip color="success">
            {{ $t('HI') }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-locale-provider>
 
</template>
