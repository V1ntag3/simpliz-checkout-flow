<template>
    <v-card :elevation="isSelected ? 8 : 1" class="plan-card" :class="{ selected: isSelected }"
        @click="$emit('action')">
        <v-row align="center" justify="space-between">
            <v-row align="center">
                <v-icon :color="isSelected ? 'white' : 'grey'">
                    {{ isSelected ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}
                </v-icon>
                <div class="ml-3">
                    <div class="label">{{ title }}</div>
                    <div class="price">{{ priceDiscount ? formatPrice(priceDiscount) :
                        formatPrice(priceNormal) }}{{ isMonth ? "/mês" : "" }}</div>
                </div>
            </v-row>

            <v-chip v-if="priceDiscount" color="deep-purple lighten-2" text-color="white" small>
                {{ formatValue(((1 - priceDiscount / priceNormal) * 100).toPrecision(2)) }}% off
            </v-chip>
        </v-row>
    </v-card>
</template>

<script>
import { BRLValueformat, Valueformat } from "@/utils";

export default {
    name: "OptionCard",
    props: {
        isSelected: Boolean,
        title: String,
        priceDiscount: Number,
        priceNormal: Number,
        isMonth: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        formatPrice(price) {
            return BRLValueformat(price);
        },
        formatValue(value) {
            return Valueformat(value);
        }
    },
};
</script>

<style scoped>
.plan-card {
    padding: 16px;
    cursor: pointer;
    transition: 0.3s ease;
}

.plan-card.selected {
    border: 2px solid var(--simpliz-primary);
    background-color: rgba(38, 13, 51, 0.7);
}

.plan-card.selected {
    border: 2px solid var(--simpliz-primary);
    background-color: rgba(38, 13, 51, 0.7);
}

.plan-card.selected div {
    color: white;
}

.label {
    font-weight: 700;
    font-size: 1rem;
}

.price {
    font-size: 0.9rem;
    color: gray;
    font-weight: 600;

}
</style>