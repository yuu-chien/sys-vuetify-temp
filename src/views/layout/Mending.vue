<template>
  <v-card outlined max-width="360" class="mx-auto rounded-lg">
    <v-card-title text-color="orange">補登申請</v-card-title>
    <v-list class="py-0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>申請類別</v-list-item-title>
          <v-radio-group row dense class="mt-2">
            <v-radio label="上班" value="clock-in" color="orange"></v-radio>
            <v-radio label="下班" value="clock-out" color="orange"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>申請時間</v-list-item-title>
          <v-list-item-subtitle class="pt-2">
            <v-text-field
              v-model="date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>申請事由</v-list-item-title>
          <v-text-field
            :rules="rules"
            counter="20"
            hint=""
            label=""
            color="orange"
            class="p-2"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn plain text depressed :to="{ path: '/' }">取消</v-btn>
      <v-btn plain text v-bind="attrs" v-on="on">送出</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>