<template>
  <nav>
    <!-- Vuetify 支持淺色 light 和深色 dark 變體。預設情況下，應用程式將使用 light 主題。但透過添加 dark，可以覆蓋掉它。 -->
    <!-- 加上 app 的話可以固定（類似於 position:fixed） v-app-bar 在最上方 -->
    <!-- https://vuetifyjs.com/en/api/v-app-bar/#props -->
    <!-- 預設有陰影，若想達致扁平化設計（沒有陰影）：可以加上 flat -->
    <v-toolbar app flat dark class="light-green darken-3">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>