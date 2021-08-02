<template>
  <div>
    <v-card class="rounded-lg">
      <v-card-title>本月未打卡紀錄如下，請申請補登</v-card-title>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>YYYY 年 MM 月 DD 日</v-list-item-title>
            <v-list-item-subtitle class="pt-4"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>YYYY 年 MM 月 DD 日</v-list-item-title>
            <v-list-item-subtitle class="pt-4"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
};
</script>