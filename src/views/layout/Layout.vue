<template>
    <v-container class="pa-4">
        <router-view></router-view>
        <v-bottom-navigation
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
        </v-bottom-navigation>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            computed: {
                currentColor() {
                    let result = ''
                    switch (this.$router.history.current.name) {
                        case 'hr':
                            result = 1
                            break
                        case 'records':
                            result = 2
                            break
                        case 'mending':
                            result = 3
                            break
                        case 'logout':
                            result = 4
                            break
                    }
                    return result
                },
            },
            items: [
                { text: '首頁', icon: 'mdi-home-variant-outline', link: '/' },
                {
                    text: '人事查詢',
                    icon: 'mdi-newspaper-variant-multiple-outline',
                    link: ' ',
                },
                {
                    text: '補登審核',
                    icon: 'mdi-account-multiple-plus-outline',
                    link: 'examine',
                },
                {
                    text: '登出',
                    icon: 'mdi-login-variant',
                    link: 'logout',
                },
            ],
        }
    },
}
</script>