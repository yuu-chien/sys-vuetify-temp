<template>
  <v-card outlined class="mx-auto mt-5">
    <v-card-title text-color="orange">
      <v-icon color="orange" class="mr-4"> mdi-map-check-outline </v-icon>
      <div>Good morning！<span>吳小熊</span></div>
    </v-card-title>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>今天日期</v-list-item-title>
          <v-list-item-subtitle class="pt-4"
            >YYYY 年 MM 月 DD 日</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>現在時間</v-list-item-title>
          <v-list-item-subtitle class="pt-4">HH : MM</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>打卡地點</v-list-item-title>
          <v-list-item-subtitle class="pt-4"
            >臺北市大安區敦化南路一段205號</v-list-item-subtitle
          >
          <div></div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
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
      <!-- <v-divider inset></v-divider> -->
    </v-list>
    <v-card-actions class="flex-column">
      <v-dialog transition="dialog-top-transition" max-width="360">
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain text depressed disabled color="orange" class="px-0"
            >資訊確認完畢，上班</v-btn
          >
          <v-btn plain text v-bind="attrs" v-on="on" color="orange" class="px-0"
            >資訊確認完畢，下班</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-title>
              <v-icon large color="orange" class="mr-4">
                mdi-map-check-outline
              </v-icon>
              <div class="text-h4">打卡成功！</div>
            </v-card-title>
            <v-card-actions class="justify-end">
              <v-btn text color="orange" @click="dialog.value = false"
                >下班嘍</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card-actions>
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