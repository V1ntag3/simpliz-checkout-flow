<template>
    <v-col class="d-flex flex-column gap-4">
        <TitlePage title="Planos Disponíveis" />
        <v-row>
            <v-row class="mx-3">
                <v-col class="d-flex flex-column justify-lg-center pr-2 animate__animated animate__fadeInLeft" cols="12"
                    md="4" lg="3">
                    <h1 class="title-text">Planos sob medida para seu crescimento</h1>
                    <h3 class="title-description">Oferecemos plans flexíveis que se adaptam às suas necessidades –
                        desde
                        quem está começando até empresas em expansão. Sem taxas escondidas, sem complicações.</h3>
                </v-col>
                <v-col class="cards animate__animated animate__fadeInRight" cols="12" md="4" lg="3"
                    v-for="plan in plans" :key="plan.name">
                    <PlanCard :plan="plan" @select="selectPlan(plan)" />
                </v-col>
            </v-row>
            <v-carousel class="mx-3 my-3  carousel animate__animated animate__fadeInRight" show-arrows-hover cycle
                hide-delimiters>
                <v-carousel-item v-for="plan in plans" :key="plan.name">
                    <PlanCard :plan="plan" @select="selectPlan(plan)" />
                </v-carousel-item>
            </v-carousel>
        </v-row>
    </v-col>
</template>

<script>
import PlanCard from "@/components/cards/PlanCard.vue";
import TitlePage from "@/components/ui/TitlePage.vue";

export default {
    name: "PlansView",
    components: { PlanCard, TitlePage },
    data() {
        return {
            plans: [
                {
                    name: "Prata",
                    description: "Ideal para quem está dando os primeiros passos",
                    price: 20,
                    paymentPlans: [
                        {
                            id: 0,
                            title: "Plano Mensal",
                            priceDiscount: null,
                            months: 1
                        },
                        {
                            id: 1,
                            title: "Plano Anual",
                            priceDiscount: 18,
                            months: 12
                        },
                        {
                            id: 2,
                            title: "Plano 2 anos",
                            priceDiscount: 16,
                            months: 24
                        },
                        {
                            id: 3,
                            title: "Plano 3 anos",
                            priceDiscount: 14,
                            months: 36
                        }
                    ],
                    benefits: [
                        "Funcionalidades básicas",
                        "Até 3 usuários",
                        "Suporte por e-mail",
                    ],
                },
                {
                    name: "Ouro",
                    price: 60,
                    description: "Feito para equipes que buscam mais recursos",
                    paymentPlans: [
                        {
                            id: 0,
                            title: "Plano Mensal",
                            priceDiscount: null,
                            months: 1
                        },
                        {
                            id: 1,
                            title: "Plano Anual",
                            priceDiscount: 50,
                            months: 12
                        },
                        {
                            id: 2,
                            title: "Plano 2 anos",
                            priceDiscount: 40,
                            months: 24
                        },
                        {
                            id: 3,
                            title: "Plano 3 anos",
                            priceDiscount: 30,
                            months: 36
                        }
                    ],
                    benefits: [
                        "Relatórios avançados",
                        "Integrações com ferramentas populares",
                        "Até 10 usuários",
                        "Suporte prioritário",
                    ],
                },
                {
                    name: "Diamante",
                    description: "Soluções completas para grandes empresas",
                    price: 100,
                    paymentPlans: [
                        {
                            id: 0,
                            title: "Plano Mensal",
                            priceDiscount: null,
                            months: 1
                        },
                        {
                            id: 1,
                            title: "Plano Anual",
                            priceDiscount: 80,
                            months: 12
                        }
                    ],
                    benefits: [
                        "Funcionalidades completas",
                        "Suporte dedicado",
                        "Onboarding personalizado",
                        "Usuários ilimitados",
                        "Suporte 24 horas",
                    ],
                },
            ],
        };
    },
    methods: {
        selectPlan(plan) {
            this.$store.commit('setPlan', plan)
            this.$router.push({ name: "ImplantationView" });
        },
    },
};
</script>

<style lang="css" scoped>
.title-text {
    font-size: 1.6rem;
    font-family: var(--simpliz-title-font);
    color: white;
}

.title-description {
    font-size: 1rem;
    color: white;
    margin-top: 20px;
    font-weight: normal;
}

@media (max-width:576px) {
    .carousel {
        display: block;
    }

    .cards {
        display: none;
    }
}

@media (min-width:576px) {
    .cards {
        display: block;
    }

    .carousel {
        display: none;
    }

}
</style>