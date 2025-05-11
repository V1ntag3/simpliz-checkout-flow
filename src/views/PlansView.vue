<template>
    <v-col style="display: flex; flex-direction: column; gap: 20px;">
        <TitlePage title="Planos Disponíveis" />

        <v-row>
            <v-row class="mx-3">
                <v-col class="" cols="12" md="4" lg="3">
                    <h1 class="title-text">Planos sob medida para seu crescimento</h1>
                    <h3 class="title-description">Oferecemos planos flexíveis que se adaptam às suas necessidades –
                        desde
                        quem está começando até empresas em expansão. Sem taxas escondidas, sem complicações.</h3>
                </v-col>
                <v-col class="cards" cols="12" md="4" lg="3" v-for="plano in planos" :key="plano.nome">
                    <PlanCard :plano="plano" @selecionar="selecionarPlano(plano)" />
                </v-col>
            </v-row>
            <v-carousel class="mx-3 my-3 carousel" show-arrows-hover cycle hide-delimiters>
                <v-carousel-item v-for="plano in planos" :key="plano.nome">
                    <PlanCard :plano="plano" @selecionar="selecionarPlano(plano)" />
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
            planos: [
                {
                    nome: "Prata",
                    description: "Ideal para quem está começando e deseja algo mais profissional",
                    preco: 20,
                    beneficios: [
                        "Funcionalidades básicas",
                        "Até 3 usuários",
                        "Suporte por e-mail",
                    ],
                },
                {
                    nome: "Ouro",
                    preco: 60,
                    description: "Para equipes que precisam de mais recursos",
                    beneficios: [
                        "Relatórios avançados",
                        "Integrações com ferramentas populares",
                        "Até 10 usuários",
                        "Suporte prioritário",
                    ],
                },
                {
                    nome: "Diamante",
                    description: "Soluções personalizadas para grandes equipes",
                    preco: 100,
                    beneficios: [
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
        selecionarPlano(plano) {
            this.$router.push({ name: "Resumo", query: { plano: plano.nome } });
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