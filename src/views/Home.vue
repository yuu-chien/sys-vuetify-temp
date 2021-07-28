<template>
  <v-container>
    <!-- <v-bottom-navigation
      color="orange"
      horizontal
      max-height="52"
      class="mx-auto"
    >
      <v-btn x-large color="white" max-width="100%">
        <span>我要打卡</span>
        <v-icon>mdi-account-check</v-icon>
      </v-btn>
      <v-btn x-large color="white" max-width="100%">
        <span>打卡紀錄</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn x-large color="white" max-width="100%">
        <span>補登申請</span>
        <v-icon>mdi-book-plus-multiple-outline</v-icon>
      </v-btn>
      <v-btn x-large color="white" max-width="100%">
        <span>補登審核</span>
        <v-icon>mdi-account-multiple-check-outline</v-icon>
      </v-btn>
      <v-btn x-large color="white" max-width="100%">
        <span>人事查詢</span>
        <v-icon>mdi-key-link</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
    <v-card max-width="360">
      <v-list shaped>
        <!-- <v-subheader>REPORTS</v-subheader> -->
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
    </v-card>
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

    <v-card class="mx-auto mt-5">
      <v-card-title> Hi 王小明 </v-card-title>
      <v-card-text>
        <p>2021年07月28日</p>
        <p>星期三</p>
        <p>09:30</p>
      </v-card-text>
    </v-card>
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
        { text: "補登審核", icon: "mdi-account-multiple-check-outline" },
        { text: "人事查詢", icon: "mdi-key-link" },
      ],
    };
  },
};
</script>