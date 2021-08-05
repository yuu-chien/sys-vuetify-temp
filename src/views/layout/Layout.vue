<template>
  <v-container>
    <!-- <v-bottom-navigation
      app
      shift
      :value="currentColor"
      color="orange"
      class="pa-0"
    >
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="{ path: item.link }"
        x-large
        color="white"
      >
        <span class="mt-1">{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Jason E. Hibbitts
          </v-list-item-title>
          <v-list-item-subtitle> PD </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="{ path: item.link }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      computed: {},
      items: [
        { text: "Home", icon: "mdi-home-variant-outline", link: "/" },
        {
          text: "Punch in / out",
          icon: "mdi-account-check",
          link: "punch",
        },
        { text: "Records", icon: "mdi-history", link: "records" },
        {
          text: "Application",
          icon: "mdi-newspaper-variant-multiple-outline",
          link: "application",
        },
        // {
        //   text: "Setting",
        //   icon: "mdi-account-cog-outline",
        //   link: " ",
        // },
        {
          text: "",
          icon: "mdi-login-variant",
          link: "login",
        },
      ],
    };
  },
};
</script>