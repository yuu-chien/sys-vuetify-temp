<template>
  <v-container>
    <v-card :loading="loading" class="mx-auto" max-width="360">
      <template slot="progress">
        <v-progress-linear
          color="deep-orange"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        height="200"
        src="https://images.unsplash.com/photo-1526289925534-a8b94e699809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
      ></v-img>
      <v-card-title>A 咖，Welcome！</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Account" color="orange" required></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            color="orange"
            required
          ></v-text-field>
        </v-form>
        <p>Please check your account or password again</p>
        <v-card-actions class="justify-center">
          <v-btn
            rounded
            outlined
            color="orange lighten-1"
            width="120"
            @click="reserve"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>