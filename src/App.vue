<template>
  <!-- Vuetify 有兩個主要組件，v-app 和 v-main -->
  <!-- v-app 是應用程式根節點，直接替換預設的 Vue 入口 <div id="app"> -->
  <!-- v-main 是替換 mainHTML 元素應用程式的根節點內容 -->
  <!-- Vuetify 支持淺色 light 和深色 dark 變體。預設情況下，您的應用程式將使用 light 主題。但透過添加 dark，可以覆蓋掉它。 -->
  <!-- 加上 app 的話可以固定（類似於 position:fixed） v-app-bar 在最上方 -->
  <!-- https://vuetifyjs.com/en/api/v-app-bar/#props -->
  <v-app>
    <v-app-bar app dark class="light-green darken-3">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
