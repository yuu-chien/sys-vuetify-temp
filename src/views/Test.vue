<template>
    <!-- 類似於 BS，格線系統的層級為 v-container、v-row、v-col -->
    <v-container>
        <Navbar />
        <v-row>
            <v-col v-for="i in 3" :key="i" cols="4">
                <v-card outlined>
                    <v-card-title>
                        <h2 class="h2">v-card 卡片元件</h2>
                    </v-card-title>
                    <v-card-subtitle>
                        <div>卡片元件有四個基礎子元件</div>
                        <div>這些子元件有預設的樣式，包括字級、間距</div>
                    </v-card-subtitle>
                    <v-card-text> v-card-text </v-card-text>
                    <v-card-actions>v-card-actions</v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4" class="lime lighten-2">cols="4"</v-col>
            <v-col cols="4" class="lime lighten-3">cols="4"</v-col>
            <v-col cols="4" class="lime lighten-4">cols="4"</v-col>
            <v-col sm="12" lg="6" class="amber lighten-2">sm="12" lg="6"</v-col>
            <v-col sm="12" lg="6" class="amber lighten-3">sm="12" lg="6"</v-col>
        </v-row>
    </v-container>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
    name: 'App',
    components: { Navbar },
    data() {
        return;
    },
};
</script>