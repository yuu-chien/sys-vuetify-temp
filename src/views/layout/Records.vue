<template>
  <div max-width="360">
    <div class="d-flex justify-space-between">
      <v-btn plain large class="px-0">
        <v-icon left> mdi-chevron-left </v-icon>
        <span>Previous</span>
      </v-btn>
      <v-btn plain large class="px-0">
        <span>Next</span>
        <v-icon right> mdi-chevron-right </v-icon>
      </v-btn>
    </div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in records" :key="i">
        <v-expansion-panel-header>
          <h3>2021 / 8 / {{ i + 2 }} 日（{{ item }}）</h3>
          <v-icon color="red lighten-1" v-if="i == 1">mdi-information</v-icon>
          <v-icon color="red lighten-1" v-else></v-icon>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list class="py-0">
            <v-list-item class="px-0">
              <v-list-item-content class="py-0">
                <v-list-item-title class="mb-0"
                  >Punch in - 09:30</v-list-item-title
                >
                <p class="pt-1 grey--text body-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque, in architecto officia libero ullam cumque
                  distinctio cupiditate quibusdam et temporibus?
                </p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="px-0">
              <v-list-item-content class="py-0">
                <v-list-item-title class="mb-0" v-if="i == 1"
                  >Punch out - no data
                  <v-btn
                    small
                    rounded
                    outlined
                    :to="{ path: 'mending' }"
                    color="orange"
                    class="ml-2"
                  >
                    Apply
                  </v-btn></v-list-item-title
                >
                <v-list-item-title class="mb-0" v-else
                  >Punch out - 18:30</v-list-item-title
                >
                <p class="pt-1 grey--text body-2">No notes</p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="px-0">
              <v-list-item-content class="py-0">
                <v-list-item-title class="mb-0" v-if="i == 1"
                  >hours -</v-list-item-title
                >
                <v-list-item-title class="mb-0" v-else
                  >hours - 8</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>


<script>
export default {
  data() {
    return {
      records: ["Mon", "Tue", "Wen", "Thu", "Fri"],
    };
  },
};
</script>