<template>
    <v-container fill-height>
        <v-card :loading="loading" class="mx-auto" max-width="336">
            <template slot="progress">
                <v-progress-linear
                    color="deep-orange"
                    height="8"
                    indeterminate
                ></v-progress-linear>
            </template>
            <v-img
                height="180"
                src="https://images.unsplash.com/photo-1526289925534-a8b94e699809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            ></v-img>
            <v-card-title>Welcome！</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        required
                        label="Account"
                        color="orange"
                        class="mt-0"
                    ></v-text-field>
                    <v-text-field
                        required
                        label="Password"
                        type="password"
                        color="orange"
                        class="mt-0"
                    ></v-text-field>
                </v-form>
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
            setTimeout(() => {
                this.loading = false;
                this.$router.push({ path: '/' });
            }, 2000);
        },
    },
};
</script>