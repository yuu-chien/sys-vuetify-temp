<template>
    <v-container>
        <div>
            <v-icon class="my-2" @click.stop="drawer = !drawer"
                >mdi-backburger</v-icon
            >
        </div>
        <v-navigation-drawer app v-model="drawer" absolute temporary>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="d-flex justify-space-between">
                        <div class="text-h6">Jason E. Hibbitts</div>
                        <!-- <v-icon>mdi-menu</v-icon> -->
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
            drawer: null,
            items: [
                { text: 'Home', icon: 'mdi-home-variant-outline', link: '/' },
                {
                    text: 'Punch in / out',
                    icon: 'mdi-account-check',
                    link: 'punch',
                },
                { text: 'Records', icon: 'mdi-history', link: 'records' },
                {
                    text: 'Application',
                    icon: 'mdi-newspaper-variant-multiple-outline',
                    link: 'application',
                },
                {
                    text: '',
                    icon: 'mdi-login-variant',
                    link: 'login',
                },
            ],
        }
    },
}
</script>