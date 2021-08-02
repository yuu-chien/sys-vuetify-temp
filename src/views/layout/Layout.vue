<template>
  <v-container class="pa-4">
    <router-view></router-view>
    <v-bottom-navigation app shift color="orange" height="auto" class="pa-0">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="{ path: item.link }"
        x-large
        color="white"
      >
        <span class="mt-1">{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "我要打卡", icon: "mdi-account-check", link: "clock-in" },
        { text: "打卡紀錄", icon: "mdi-history", link: "records" },
        {
          text: "補登申請",
          icon: "mdi-book-plus-multiple-outline",
          link: "mending",
        },
        // { text: "補登審核", icon: "mdi-account-multiple-check-outline" },
        // { text: "人事查詢", icon: "mdi-key-link" },
      ],
    };
  },
};
</script>