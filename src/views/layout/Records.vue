<template>
  <div max-width="360">
    <div class="d-flex justify-space-between">
      <v-btn plain large class="px-0">
        <v-icon left> mdi-chevron-left </v-icon>
        <span>上週</span>
      </v-btn>
      <v-btn plain large class="px-0">
        <span>下週</span>
        <v-icon right> mdi-chevron-right </v-icon>
      </v-btn>
    </div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 7" :key="i">
        <v-expansion-panel-header>
          <h3>2021 年 8 月 {{ i + 2 }} 日</h3>
          <v-icon color="red lighten-1" v-if="i == 1">mdi-information</v-icon>
          <v-icon color="red lighten-1" v-else></v-icon>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list class="py-0">
            <v-list-item class="px-0">
              <v-list-item-content class="py-0">
                <v-list-item-title v-if="i == 1"
                  >上班：無資料
                  <v-btn
                    small
                    rounded
                    outlined
                    :to="{ path: 'mending' }"
                    color="orange"
                    class="ml-2"
                  >
                    補登申請
                  </v-btn></v-list-item-title
                >
                <v-list-item-title v-else>上班：09:30</v-list-item-title>
                <p class="pt-1 grey--text body-2">無備註</p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="px-0">
              <v-list-item-content class="py-0">
                <v-list-item-title>下班：18:30</v-list-item-title>
                <p class="pt-1 grey--text body-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, minus quaerat aliquid id corrupti excepturi quae
                  aperiam autem dicta dolorum.
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>