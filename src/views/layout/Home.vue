<template>
  <div>
    <!-- <v-card outlined min-width="360" class="mx-auto rounded-lg">
      <v-card-title class="orange--text font-weight-bold">
        <v-icon color="orange" class="mr-3"> mdi-run-fast </v-icon>
        <div>Let's Start！<span>吳小熊</span></div>
      </v-card-title>
      <v-card-text>
        <v-item-group>
          <v-container>
            <v-row>
              <v-col cols="6" v-for="(item, i) in items" :key="i">
                <v-btn
                  rounded
                  outlined
                  width="100%"
                  color="green darken-1"
                  class="white--text"
                  :to="{ path: item.link }"
                >
                  <v-icon left>{{ item.icon }}</v-icon>
                  <span>{{ item.text }}</span></v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-card-text>
    </v-card> -->

    <v-card outlined min-width="360" class="mx-auto mt-2 rounded-lg">
      <v-card-title class="orange--text font-weight-bold"
        >No Punching Dates
      </v-card-title>
      <v-list class="py-0">
        <v-list-item v-for="(item, i) in 3" :key="i">
          <v-list-item-content class="py-0">
            <v-list-item-title
              >2021 / 8 / {{ i + 9 }}
              <v-btn
                small
                rounded
                outlined
                :to="{ path: 'application' }"
                color="orange"
                class="ml-2"
              >
                Apply
              </v-btn></v-list-item-title
            >
            <p class="grey--text body-2" v-if="i == 1">Punch in、Punch out</p>
            <p class="grey--text body-2" v-else>Punch out</p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="360">
      <v-card>
        <v-card-title class="text-h5 green--text font-weight-bold"
          >溫馨提醒</v-card-title
        >
        <v-card-text>
          <ul>
            <li>您有 N 筆未打卡紀錄</li>
            <li>您有 N 筆補登審核未處理</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" text @click="dialog = false">知道了</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          text: "我要打卡",
          icon: "mdi-account-check",
          link: "clock-in",
        },
        { text: "打卡紀錄", icon: "mdi-history", link: "records" },
        {
          text: "補登申請",
          icon: "mdi-forum-outline",
          link: "mending",
        },
        {
          text: "補登審核",
          icon: "mdi-account-multiple-plus-outline",
          link: "examine",
        },
      ],
    };
  },
};
</script>