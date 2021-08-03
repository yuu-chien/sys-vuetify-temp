<template>
    <v-card outlined max-width="360" class="mx-auto rounded-lg">
        <v-card-title class="orange--text font-weight-bold">
            <v-icon color="orange" class="mr-3"> mdi-forum-outline </v-icon>
            <div>補登申請</div>
        </v-card-title>
        <v-list class="py-0">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >申請類別</v-list-item-title
                    >
                    <v-radio-group row dense hide-details="auto" class="mt-1">
                        <v-radio
                            label="上班"
                            value="clock-in"
                            color="orange"
                        ></v-radio>
                        <v-radio
                            label="下班"
                            value="clock-out"
                            color="orange"
                        ></v-radio>
                    </v-radio-group>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >申請時間</v-list-item-title
                    >
                    <div class="mt-1">
                        <input type="datetime-local" />
                    </div>
                    <!-- <div>
                        <v-menu
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    readonly
                                    hide-details="auto"
                                    v-model="date"
                                    label=""
                                    v-bind="attrs"
                                    v-on="on"
                                    color="orange"
                                    class="mt-0"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                color="orange"
                                v-model="date"
                            ></v-date-picker>
                        </v-menu>
                    </div> -->
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >申請事由</v-list-item-title
                    >
                    <v-text-field
                        :rules="rules"
                        counter="20"
                        hide-details="auto"
                        hint=""
                        label=""
                        color="orange"
                        class="mt-0"
                    ></v-text-field>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-card-actions class="flex-column">
            <v-dialog transition="dialog-top-transition" max-width="360">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        plain
                        text
                        depressed
                        :to="{ path: '/' }"
                        color="grey darken-1"
                        class="px-0"
                        >取消</v-btn
                    >
                    <v-btn
                        plain
                        text
                        depressed
                        v-on="on"
                        v-bind="attrs"
                        color="orange"
                        class="px-0"
                        >送出</v-btn
                    >
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-card-title
                            class="text-h5 green--text font-weight-bold"
                            >申請成功</v-card-title
                        >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="orange"
                                text
                                @click="dialog.value = false"
                                >確認</v-btn
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
    data: () => ({
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10),
        rules: [(v) => (v && v.length <= 20) || 'Max 20 characters'],
    }),
}
</script>