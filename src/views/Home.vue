<template>
  <v-container>
    <v-bottom-navigation
      absolute
      shift
      color="orange"
      class="p-0"
      height="auto"
    >
      <v-btn v-for="(item, i) in items" :key="i" x-large color="white">
        <span class="mt-1">{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <router-view></router-view>
    <!-- <v-card max-width="360">
      <v-list shaped>
        <v-list-item-group v-model="selectedItem" color="orange">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card> -->

    <v-dialog v-model="dialog" persistent max-width="360">
      <v-card>
        <v-card-title class="text-h5">溫馨提醒</v-card-title>
        <v-card-text>您有 N 筆補登審核未處理</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >知道了</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selectedItem: 1,
      items: [
        { text: "我要打卡", icon: "mdi-account-check" },
        { text: "打卡紀錄", icon: "mdi-history" },
        { text: "補登申請", icon: "mdi-book-plus-multiple-outline" },
        // { text: "補登審核", icon: "mdi-account-multiple-check-outline" },
        // { text: "人事查詢", icon: "mdi-key-link" },
      ],
    };
  },
};
</script>