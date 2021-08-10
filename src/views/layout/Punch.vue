<template>
    <v-card outlined min-width="320" class="mx-auto rounded-lg">
        <v-card-title class="orange--text font-weight-bold">
            <v-icon color="orange" class="mr-3"> mdi-account-check </v-icon>
            <div>Punch in /out</div>
        </v-card-title>
        <v-list class="py-0">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >Time</v-list-item-title
                    >
                    <v-list-item-subtitle class="pt-2 grey--text"
                        >YYYY / MM / DD / HH : MM</v-list-item-subtitle
                    >
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >Location</v-list-item-title
                    >
                    <v-list-item-subtitle class="pt-2 grey--text"
                        >8508 Rosetta St, South Rosetta</v-list-item-subtitle
                    >
                    <div class="mt-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.2552681698266!2d-92.31092268480978!3d34.74916198042198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2a4a90c8254bf%3A0xb82c4a40f37bf461!2zUm9zZXR0YSBTdCwgTGl0dGxlIFJvY2ssIEFSIDcyMjA1576O5ZyL!5e0!3m2!1szh-TW!2stw!4v1628409543177!5m2!1szh-TW!2stw"
                            width="100%"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >Notes</v-list-item-title
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
                    <v-btn plain text v-bind="attrs" v-on="on" color="orange">
                        Punch Now
                    </v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-card-title
                            class="text-h5 green--text font-weight-bold"
                            >Punch Successful !</v-card-title
                        >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="orange"
                                text
                                @click="dialog.value = false"
                                >Have a nice day</v-btn
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
    data() {
        return {
            rules: [(v) => (v && v.length <= 20) || 'Max 20 characters'],
        }
    },
}
</script>