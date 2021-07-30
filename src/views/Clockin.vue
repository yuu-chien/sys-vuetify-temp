<template>
  <v-card outlined class="mx-auto mt-5">
    <v-card-title text-color="orange"
      >Good morning！<span>吳小熊</span></v-card-title
    >
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="orange"> mdi-map-marker </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>今天日期</v-list-item-title>
          <v-list-item-subtitle>YYYY年MM月DD日</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>打卡地點</v-list-item-title>
          <v-list-item-subtitle
            >臺北市大安區敦化南路一段205號</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>現在時間</v-list-item-title>
          <v-list-item-subtitle>HH:MM</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>打卡備註</v-list-item-title>
          <v-text-field
            :rules="rules"
            counter="20"
            hint=""
            label=""
            color="orange"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-dialog transition="dialog-top-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on"
            >資訊確認完畢，打卡</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-title class="text-h4">打卡成功！</v-card-title>
            <v-card-actions class="justify-end">
              <v-btn text color="orange" @click="dialog.value = false"
                >上班嘍</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-list>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      description: "California is a state in the western United States",
      rules: [(v) => v.length <= 20 || "Max 20 characters"],
    };
  },
};
</script>