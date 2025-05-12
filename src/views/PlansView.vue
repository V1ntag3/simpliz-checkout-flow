<template>
    <v-col style="display: flex; flex-direction: column; gap: 20px;">
        <TitlePage title="Plans Disponíveis" />

        <v-row>
            <v-row class="mx-3">
                <v-col style="display: flex; flex-direction:column; justify-content: center;padding-right: 10px;" class="" cols="12" md="4"
                    lg="3">
                    <h1 class="title-text">Planos sob medida para seu crescimento</h1>
                    <h3 class="title-description">Oferecemos plans flexíveis que se adaptam às suas necessidades –
                        desde
                        quem está começando até empresas em expansão. Sem taxas escondidas, sem complicações.</h3>
                </v-col>
                <v-col class="cards" cols="12" md="4" lg="3" v-for="plan in plans" :key="plan.name">
                    <PlanCard :plan="plan" @select="selectPlan(plan)" />
                </v-col>
            </v-row>
            <v-carousel class="mx-3 my-3 carousel" show-arrows-hover cycle hide-delimiters>
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
                    description: "Ideal para quem está começando",
                    preco: 20,
                    paymentPlans: [
                        {
                            title: "Plano Mensal",
                            valueDiscount: null,
                            months: 1
                        },
                        {
                            title: "Plano Anual",
                            valueDiscount: 18,
                            months: 12
                        },
                        {
                            title: "Plano 2 anos",
                            valueDiscount: 16,
                            months: 24
                        },
                        {
                            title: "Plano 3 anos",
                            valueDiscount: 14,
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
                    preco: 60,
                    description: "Para equipes que precisam de mais recursos",
                    paymentPlans: [
                        {
                            title: "Plano Mensal",
                            valueDiscount: null,
                            months: 1
                        },
                        {
                            title: "Plano Anual",
                            valueDiscount: 50,
                            months: 12
                        },
                        {
                            title: "Plano 2 anos",
                            valueDiscount: 40,
                            months: 24
                        },
                        {
                            title: "Plano 3 anos",
                            valueDiscount: 30,
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
                    description: "Soluções personalizadas para grandes equipes",
                    preco: 100,
                    paymentPlans: [
                        {
                            title: "Plano Mensal",
                            valueDiscount: null,
                            months: 1
                        },
                        {
                            title: "Plano Anual",
                            valueDiscount: 80,
                            months: 12
                        },
                        {
                            title: "Plano 2 anos",
                            valueDiscount: 70,
                            months: 24
                        },
                        {
                            title: "Plano 3 anos",
                            valueDiscount: 60,
                            months: 36
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
.description-page {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

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