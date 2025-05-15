<template>
    <v-card class="plan-block ga-4">
        <v-row class="w-100">
            <span class="text-center text-info w-100 font-weight-bold text-order">
                Pedido nº {{ orderNumber }}
            </span>
        </v-row>

        <v-row class="w-100 text-primary">
            <h1 class="w-100 text-center">Pedido realizado com sucesso!</h1>
        </v-row>

        <v-row class="w-100">
            <v-col cols="12" sm="6" class="justify-center d-flex flex-column">
                <img :src="qrCode" class="w-100 ma-auto" style="max-width: 400px; " />
                <v-row class="justify-center">
                    <CounterMinutesSeconds :timeInMinutes="Number(30)" />
                </v-row>
            </v-col>

            <v-col cols="12" sm="6" class="ga-2 d-flex flex-column">
                <v-row class="text-primary">
                    <h4>Aqui está o pix copia e cola:</h4>
                </v-row>
                <v-row>
                    <p class="text-body-2 my-2 text-info">Você pode escanear o QR Code com seu app de banco ou copiar o
                        código abaixo para realizar o pagamento via Pix.</p>
                </v-row>
                <v-row>
                    <v-text-field readonly v-model="pixCode" label="Código" outlined
                        append-inner-icon="mdi-content-copy" prepend-inner-icon="mdi-content-paste"
                        @click:append-inner="copyToClipboard" @click:prepend-inner="copyToClipboard" />
                </v-row>
            </v-col>
        </v-row>

        <hr class="primary w-100 my-4" />

        <v-row class="w-100 text-primary">
            <v-col class="pa-0 text-h5 font-weight-bold">
                Total
            </v-col>
            <v-col class="text-end pa-0 text-h5 font-weight-bold " dark>
                {{ formatPrice(valueToPay) }}
            </v-col>
        </v-row>

        <v-row class="w-100">
            <p class="w-100 text-center text-body-2 font-weight-bold text-info">As informações sobre sua compra foram
                enviadas para o seu email.</p>
        </v-row>

    </v-card>

</template>

<script>
import qrCode from '@/assets/imgs/qr-code.png';
import CounterMinutesSeconds from '@/components/ui/CounterMinutesSeconds.vue';
import { BRLValueformat } from "@/utils";

export default {
    name: "PlansView",
    components: { CounterMinutesSeconds },
    data() {
        return {
            valueToPay: this.$store.state.payment,
            orderNumber: this.$store.state.orderNumber,
            qrCode,
            pixCode: "00020126480014br.gov.bcb.pix0126marcusv.barradas@gmail.com520400005303986540520.005802BR5925MARCOS VINICIUS RIBEIRO A6008TERESINA62070503***63040C33"
        };
    },
    mounted() {
        setTimeout(() => {
            this.confirmOrder()
        }, 30000)
    },
    methods: {
        formatPrice(price) {
            return BRLValueformat(price);
        },
        confirmOrder() {
            this.$toast?.success("Pedido confirmado com sucesso!");
            this.$router.push({ name: 'FinishView' });
        },
        async copyToClipboard() {
            try {
                await navigator.clipboard.writeText(this.pixCode);
                this.$toast?.success("Copiado com sucesso!");
            } catch (e) {
                this.$toast?.error("Erro ao copiar");
            }
        }
    }
};
</script>

<style lang="css" scoped>

.plan-block {
    background-color: white;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
}
</style>