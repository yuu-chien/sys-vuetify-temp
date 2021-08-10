<template>
    <div>
        <v-card outlined min-width="320" class="mx-auto mt-2 rounded-lg">
            <v-card-title class="green--text font-weight-bold"
                >Hello,<span> Hibbitts</span>
            </v-card-title>
        </v-card>
        <v-card outlined min-width="320" class="mx-auto mt-2 rounded-lg">
            <v-card-title class="orange--text font-weight-bold"
                >No Punching Dates
            </v-card-title>
            <v-list class="py-0">
                <v-list-item v-for="(item, i) in 3" :key="i">
                    <v-list-item-content class="py-0">
                        <v-list-item-title
                            >2021 / 8 / {{ i + 9 }}
                            <v-btn
                                small
                                rounded
                                outlined
                                :to="{ path: 'application' }"
                                color="orange"
                                class="ml-2"
                            >
                                Apply
                            </v-btn></v-list-item-title
                        >
                        <p class="grey--text body-2" v-if="i == 1">
                            Punch in、Punch out
                        </p>
                        <p class="grey--text body-2" v-else>Punch out</p>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
        <v-dialog v-model="dialog" persistent max-width="360">
            <v-card>
                <v-card-title class="text-h5 green--text font-weight-bold"
                    >Reminder</v-card-title
                >
                <v-card-text> There are 3 days no punching. </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange" text @click="dialog = false"
                        >OK</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
}
</script>