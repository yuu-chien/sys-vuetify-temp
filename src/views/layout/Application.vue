<template>
    <v-card outlined min-width="320" class="mx-auto rounded-lg">
        <v-card-title class="orange--text font-weight-bold">
            <v-icon color="orange" class="mr-3">
                mdi-newspaper-variant-multiple-outline
            </v-icon>
            <div>Application</div>
        </v-card-title>
        <v-list class="py-0">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >Types</v-list-item-title
                    >
                    <v-radio-group row dense hide-details="auto" class="mt-1">
                        <v-radio
                            label="Punch-in"
                            value=""
                            color="orange"
                        ></v-radio>
                        <v-radio
                            label="Punch-out"
                            value=""
                            color="orange"
                        ></v-radio>
                    </v-radio-group>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >Date</v-list-item-title
                    >
                    <v-menu
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        max-width="320"
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
                            width="320"
                        ></v-date-picker>
                    </v-menu>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >Time</v-list-item-title
                    >
                    <v-time-picker
                        ampm-in-title
                        format="ampm"
                        color="orange"
                        class="mt-3"
                    ></v-time-picker>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >Cause</v-list-item-title
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
                        >Cancel</v-btn
                    >
                    <v-btn
                        plain
                        text
                        depressed
                        v-on="on"
                        v-bind="attrs"
                        color="orange"
                        class="px-0"
                        >Send</v-btn
                    >
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-card-title
                            class="text-h5 green--text font-weight-bold"
                            >Apply Successful !</v-card-title
                        >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="orange"
                                text
                                @click="dialog.value = false"
                                >OK</v-btn
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