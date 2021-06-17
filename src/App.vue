<template>
  <!-- Vuetify 有兩個主要組件，v-app 和 v-main -->
  <!-- v-app 是應用程式根節點，直接替換預設的 Vue 入口 <div id="app"> -->
  <!-- v-main 是替換 mainHTML 元素應用程式的根節點內容 -->
  <v-app>
    <Navbar />
    <v-main class="grey lighten-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return;
  },
};
</script>
