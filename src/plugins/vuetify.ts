import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    background: "#ecf0f1",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#8e44ad",
    secondary: "#d35400",
    background: "#2f3640",
    error: "#27ae60",
    info: "#f1c40f",
    success: "#c0392b",
    warning: "#2980b9",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
});