<template>
    <v-card outlined max-width="360" class="mx-auto rounded-lg">
        <v-card-title class="orange--text font-weight-bold">
            <v-icon color="orange" class="mr-3"> mdi-account-check </v-icon>
            <div>Hello！<span>吳小熊</span></div>
        </v-card-title>
        <v-list class="py-0">
            <v-list-item>
                <v-list-item-content class="py-2">
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >時間</v-list-item-title
                    >
                    <v-list-item-subtitle class="pt-2 grey--text"
                        >YYYY 年 MM 月 DD 日 HH : MM</v-list-item-subtitle
                    >
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content class="py-2">
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >地點</v-list-item-title
                    >
                    <v-list-item-subtitle class="pt-2 grey--text"
                        >臺北市大安區敦化南路一段205號</v-list-item-subtitle
                    >
                    <div class="mt-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.766299469066!2d121.54711931500647!3d25.042003883968533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc538556683%3A0x651f093069d1d607!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5pWm5YyW5Y2X6LevMeautTIwNeiZn-iZnw!5e0!3m2!1szh-TW!2stw!4v1627869214406!5m2!1szh-TW!2stw"
                            width="360"
                            height="160"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content class="py-2">
                    <v-list-item-title class="mb-0 font-weight-bold"
                        >備註</v-list-item-title
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
                    <!-- 切版示意不可點擊的按鈕樣式 -->
                    <v-btn
                        plain
                        text
                        depressed
                        disabled
                        color="orange"
                        class="px-0"
                        >資訊確認完畢，上班</v-btn
                    >
                    <!-- 切版示意可點擊的按鈕 -->
                    <v-btn
                        plain
                        text
                        v-bind="attrs"
                        v-on="on"
                        color="orange"
                        class="px-0"
                        >資訊確認完畢，下班</v-btn
                    >
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-card-title
                            class="text-h5 green--text font-weight-bold"
                            >打卡成功</v-card-title
                        >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <!-- 燈箱關閉按鈕文字會隨著上班或下班改變 -->
                            <v-btn
                                color="orange"
                                text
                                @click="dialog.value = false"
                                >下班嘍</v-btn
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