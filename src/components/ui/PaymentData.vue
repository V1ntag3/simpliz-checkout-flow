<template>
    <div :class="'payment-data elevation-data ' + customClass">
        <v-divider class="my-2 payment-sm-bar"></v-divider>

        <v-row class="w-100 text-primary">
            <v-col class="pa-0 text-h5">
                Total
            </v-col>
            <v-col class="text-end pa-0 text-h5 font-weight-bold" dark>
                {{ formatPrice(toPayTotal) }}
            </v-col>
        </v-row>

        <v-divider class="my-2 payment-bar"></v-divider>

        <v-row class="justify-end">
            <v-btn x-large color="primary" class="mt-4 text-capitalize font-weight-bold button-finish"
                :loading="loading" :disabled="loading" @click="finishCheckout">
                Finalizar
            </v-btn>
        </v-row>
    </div>
</template>

<script>
import { BRLValueformat } from "@/utils";

export default {
    props: {
        customClass: {
            type: String,
            default: '',
        },
        toPayTotal: {
            type: Number,
            required: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        formatPrice(price) {
            return BRLValueformat(price);

        },
        finishCheckout() {
            this.$emit('finish');
        },
    },
};
</script>

<style scoped>
.payment-sm-bar {
    display: block;
}

.payment-bar {
    display: none;
}

.payment-mobile {
    display: none;
}

.payment-desktop {
    display: block;
}

@media (max-width:600px) {


    .payment-mobile {
        display: block;
    }

    .payment-desktop {
        display: none;
    }

    .elevation-data {
        box-shadow: 0px 26px 52px rgba(0, 0, 0, 0.4), 0px 13px 26px rgba(0, 0, 0, 0.08);
    }

    .payment-bar {
        display: block;
    }

    .payment-sm-bar {
        display: none;
    }

    .button-finish {
        width: 100%;
    }

    .payment-data {
        position: fixed !important;
        bottom: 0px;
        background-color: white;
        width: 100%;
        padding: 13px 15px;
        left: 0px;
        border-radius: 15px 15px 0px 0px;
    }
}
</style>