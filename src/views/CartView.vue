<template>
    <div>

        <v-row class="px-0 px-sm-2 py-2 align-center ga-2 animate__animated animate__fadeInDown">
            <ArrowLeft @click="goBack()" style="cursor: pointer;" color="white" /> <span
                class="font-weight-bold text-white text-h5 ">Checkout</span>
        </v-row>
        <v-row v-if="planSelected" class="sub-container">

            <v-col cols="12" sm="6"
                class="animate__animated animate__fadeInLeft flex-column d-flex ga-2 py-0 resume-block pb-2 pb-sm-0">
                <div>
                    <PlanCard :plan="planSelected" />
                </div>
                <span class="font-weight-bold" style="color:white;font-size: 1.2rem;">
                    Plano {{ planSelected.name }}
                </span>
                <div v-for="(option, index) in planSelected.paymentPlans" :key="index">
                    <OptionCard :is-selected="selected === option.id" :price-discount="option.priceDiscount"
                        :price-normal="planSelected.price" :title="option.title" @action="selected = option.id" />
                </div>

                <span class="font-weight-bold" style="color:white;font-size: 1.2rem;">
                    Serviços adicionais
                </span>

                <OptionCard :is-selected="implantation.selection" :price-discount="implantation.newPrice"
                    :price-normal="implantation.oldPrice" title="Implantaçao"
                    @action="implantation.selection = !implantation.selection" :is-month="false" />
            </v-col>

            <v-col cols="12" sm="6" class="py-0 payment-block animate__animated animate__fadeInRight">
                <v-card class="w-100 plan-block">

                    <v-row class="text-h6 font-weight-bold">Contato</v-row>
                    <v-row class="ga-2 w-100">
                        <v-text-field primary v-model="name" label="Nome Completo" outlined :error="errors.name"
                            :error-messages="errors.name ? 'Preencha seu nome completo' : ''" />
                        <v-text-field v-model="email" label="Email" outlined :error="errors.email"
                            :error-messages="errors.email ? 'Preencha um email válido' : ''" /> </v-row>
                    <v-row class="text-h6 font-weight-bold">Método de pagamento</v-row>
                    <v-row class="w-100">
                        <v-select v-model="methodSelected" :items="paymentMethods" item-text="label" item-value="value"
                            label="Método de pagamento" outlined :error="errors.method"
                            :error-messages="errors.method ? 'Selecione um método de pagamento' : ''" />
                    </v-row>
                    <v-row class="w-100">
                        <v-alert type="info" class="ma-0 w-100 success " v-if="methodSelected">
                            Método selecionado: <strong>{{ methodSelectedLabel }}</strong>
                        </v-alert>
                    </v-row>

                    <v-row>
                        <v-expand-transition>
                            <div v-if="methodSelected === 'credito'">
                                <v-row>
                                    <v-col class="pa-0 px-1" cols="12">
                                        <v-text-field inputmode="numeric" v-mask="'#### #### #### ####'"
                                            v-model="card.number" label="Número do Cartão" outlined
                                            :error="errors.cardNumber"
                                            :error-messages="errors.cardNumber ? 'Número do cartão obrigatório' : ''" />
                                    </v-col>

                                    <v-col class="pa-0 px-1" cols="12">
                                        <v-text-field v-model="card.name" label="Nome no Cartão" outlined
                                            :error="errors.cardName"
                                            :error-messages="errors.cardName ? 'Nome cadastrado no cartão obrigatório' : ''"></v-text-field>
                                    </v-col>

                                    <v-col class="pa-0 px-1" cols="6" md="6">
                                        <v-text-field v-mask="'##/##'" inputmode="numeric" :error="errors.cardValidity"
                                            :error-messages="errors.cardValidity ? 'Validade do cartão obrigatório' : ''"
                                            v-model="card.validity" label="Validade (MM/AA)" outlined></v-text-field>
                                    </v-col>

                                    <v-col class="pa-0 px-1" cols="6" md="6">
                                        <v-text-field inputmode="numeric" v-mask="'###'" :error="errors.cardCvv"
                                            :error-messages="errors.cardCvv ? 'Número CVV do cartão obrigatório' : ''"
                                            v-model="card.cvv" label="CVV" outlined></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-expand-transition>

                    </v-row>

                    <v-row class="w-100">
                        <v-col class="pa-0" col="12">
                            <v-row class="w-100 text-body-2 font-weight-bold">
                                <v-col class="pa-0 mb-1">
                                    Resumo
                                </v-col>
                            </v-row>

                            <v-row class="w-100 text-body-2">
                                <v-col class="pa-0 ">
                                    Subtotal
                                </v-col>
                                <v-col class="text-end pa-0">
                                    {{ formatPrice(planSubTotal) }}
                                </v-col>
                            </v-row>

                            <v-row v-if="implantation.selection" class="w-100 text-body-2">
                                <v-col class="pa-0">
                                    Serviços Adicionais
                                </v-col>
                                <v-col class="text-end pa-0">
                                    {{ formatPrice(implantation.oldPrice) }}
                                </v-col>
                            </v-row>

                            <v-row v-if="discountTotal > 0" class="w-100 text-body-2 text-success ">
                                <v-col class="pa-0">
                                    Descontos
                                </v-col>
                                <v-col class="text-end pa-0 ">
                                    {{ formatPrice(discountTotal) }}

                                </v-col>
                            </v-row>
                            <payment-data :toPayTotal="toPayTotal" :loading="loading" :customClass="'payment-desktop'"
                                @finish="finishCheckout" />

                        </v-col>
                    </v-row>


                </v-card>
            </v-col>
            <payment-data :toPayTotal="toPayTotal" :loading="loading"
                :customClass="'payment-mobile  animate__animated animate__fadeInUp'" @finish="finishCheckout" />
        </v-row>
        <v-row v-else class="sub-container mt-6  animate__animated animate__fadeInDown">
            <v-col cols="12" class="text-center">
                <img :src="emptyImg" class="w-100" style="max-width: 400px;" />
                <v-row class="text-h6 w-100 mt-6">
                    <span class="w-100 text-white text-center font-weight-bold">Você ainda não selecionou nenhum
                        plano</span>
                </v-row>
            </v-col>
        </v-row>


    </div>
</template>

<script>
import { ArrowLeft } from 'lucide-vue';

import { BRLValueformat } from "@/utils";
import PlanCard from "@/components/cards/PlanCard.vue";
import OptionCard from "@/components/cards/OptionCard.vue";
import PaymentData from "@/components/ui/PaymentData.vue";
import emptyImg from "@/assets/imgs/empty.svg";

export default {
    name: "PlansView",
    components: { PlanCard, OptionCard, PaymentData, ArrowLeft },
    data() {
        const plan = this.$store.state.planSelected;

        return {
            emptyImg,
            loading: false,
            methodSelected: '',
            name: "",
            email: "",
            selected: 0,
            planSelected: plan,
            implantation: {
                ...(plan?.implantation ?? {
                    selection: false,
                    oldPrice: 40,
                    newPrice: 25
                })
            },
            paymentMethods: [
                { label: 'Cartão de Crédito', value: 'credito' },
                { label: 'Pix', value: 'pix' },
                { label: 'Boleto Bancário', value: 'boleto' }
            ],
            card: {
                number: '',
                name: '',
                validity: '',
                cvv: ''
            },
            errors: {
                name: false,
                email: false,
                method: false,
                cardNumber: false,
                cardName: false,
                cardValidity: false,
                cardCvv: false
            }

        };
    },
    computed: {
        toPayTotal() {
            return this.planSubTotal + this.servicesAddTotal - this.discountTotal
        },
        servicesAddTotal() {
            return this.implantation.selection ? this.implantation.oldPrice : 0
        },
        planSubTotal() {
            return this.planSelected.paymentPlans[this.selected].priceDiscount ?
                this.planSelected.price * this.planSelected.paymentPlans[this.selected].months :
                this.planSelected.price
        },
        discountTotal() {
            let discountServices = (this.implantation.selection ? this.implantation.oldPrice - this.implantation.newPrice : 0)
            let discountPlan = this.planSelected.paymentPlans[this.selected].priceDiscount ? ((this.planSelected.price - this.planSelected.paymentPlans[this.selected].priceDiscount) * this.planSelected.paymentPlans[this.selected].months) : 0
            var total = discountServices + discountPlan
            return total
        },
        methodSelectedLabel() {
            const labels = {
                credito: 'Cartão de Crédito',
                pix: 'Pix',
                boleto: 'Boleto Bancário'
            };
            return labels[this.methodSelected] || '';
        }
    },

    mounted() {

    },
    methods: {
        goBack() {
            const hasHistory = window.history.length > 1;

            if (hasHistory && document.referrer.includes(window.location.origin)) {
                this.$router.back();
            } else {
                this.$router.push({ name: 'PlansView' });
            }
        },
        validateCardDate(validity) {
            const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!regex.test(validity)) {
                return false;
            }

            const [month, year] = validity.split('/').map(val => parseInt(val, 10));
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear() % 100;

            if (year < currentYear || (year === currentYear && month < currentMonth)) {
                return false;
            }

            return true;
        },
        formatPrice(price) {
            return BRLValueformat(price);
        },
        finishCheckout() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validacoes
            this.errors.name = !this.name;
            this.errors.email = !this.email || !emailRegex.test(this.email);
            this.errors.method = !this.methodSelected;

            // Cartao de credito
            if (this.methodSelected === 'credito') {
                const cardNumber = this.card.number.replace(/\s+/g, '');
                const validity = this.card.validity;

                this.errors.cardNumber = !cardNumber || cardNumber.length !== 16;
                this.errors.cardName = !this.card.name;
                this.errors.cardValidity = !validity || !/^\d{2}\/\d{2}$/.test(validity) || !this.validateCardDate(validity);
                this.errors.cardCvv = !this.card.cvv || !/^\d{3}$/.test(this.card.cvv);
                console.log(this.errors.cardValidity)
                console.log(this.card.validity)
                console.log(this.errors.cardCvv)
                console.log(this.card.cvv)

            } else {
                this.errors.cardNumber = false;
                this.errors.cardName = false;
                this.errors.cardValidity = false;
                this.errors.cardCvv = false;
            }

            const hasErrors =
                this.errors.name ||
                this.errors.email ||
                this.errors.method ||
                this.errors.cardNumber ||
                this.errors.cardName ||
                this.errors.cardValidity ||
                this.errors.cardCvv;

            if (!hasErrors) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false

                    this.$store.commit('setOrderNumber')
                    this.$store.commit('setPayment', {
                        name: this.name,
                        email: this.email,
                        total: this.toPayTotal,
                        method: this.methodSelected
                    })

                    if (this.methodSelected === 'credito') {
                        this.$toast?.success("Pedido pago com sucesso!");
                        this.$router.replace({ name: 'FinishView' })
                    }
                    if (this.methodSelected === 'boleto') {
                        this.$toast?.warning("Pedido aguardando pagamento!");
                        this.$router.replace({ name: 'FinishView' })
                    }
                    if (this.methodSelected === 'pix') {
                        this.$router.replace({ name: 'PixView' })
                    }

                }, 5000)
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
    gap: 10px;
}

@media (max-width:600px) {

    .resume-block {
        padding: 0px;
        margin-bottom: 10px;
    }

    .payment-block {
        padding: 10px 0px;
        margin-bottom: 150px;
    }

}
</style>
<style>
#list-radio {
    justify-content: start !important;
    gap: 8px;
}
</style>