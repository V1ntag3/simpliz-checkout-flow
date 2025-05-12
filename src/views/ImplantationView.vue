<template>
    <v-col style="display: flex; flex-direction: column; gap: 20px;">
        <TitlePage title="Pronto para aproveitar ao máximo?" />

        <v-row class="container">
            <v-col cols="12" md="6">
                <img :src="tasksImg" alt="Tasks" />
            </v-col>

            <v-col class="content" cols="12" md="5">
                <div class="text-page">
                    Nossa equipe ajuda você a configurar tudo de forma rápida e sem complicações. Aproveite ao máximo
                    sua assinatura desde o primeiro dia com o serviço de implantação.
                </div>
                <ul>
                    <ItemCheck description="Suporte dedicado" />
                    <ItemCheck description="Integração assistida" />
                    <ItemCheck description="Economia de tempo e retrabalho" />
                </ul>

                <div class="values">
                    <span>{{ formatOldPrice() }}</span>
                    <span>{{ formatNewPrice() }}</span>
                </div>
                <div class="buttons">
                    <v-btn color="white" class="capitalize primary button" @click="selectPlan(true)">
                        Contratar
                    </v-btn>
                    <v-btn color="white" class="capitalize button" @click="selectPlan(false)">
                        Agora não
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import TitlePage from "@/components/ui/TitlePage.vue";
import ItemCheck from "@/components/ui/ItemCheck.vue";
import { BRLValueformat } from "@/utils";
import tasksImg from '@/assets/imgs/tasks.png';

export default {
    name: "PlansView",
    components: { TitlePage, ItemCheck },
    data() {
        return {
            tasksImg,
            implantation: {
                oldPrice: 40.00,
                newPrice: 25.00
            }
        };
    },
    mounted() {
        var planSelected = this.$store.state.planSelected
        if (!planSelected|| Object.keys(planSelected).length === 0) {
            this.$router.push({ name: 'PlansView' });
        }
    },
    methods: {
        selectPlan(implantation) {
            this.$store.commit('setImplantation', implantation)
            this.$router.push({ name: "CartView" });
        },
        formatOldPrice() {
            return BRLValueformat(this.implantation.oldPrice);
        },
        formatNewPrice() {
            return BRLValueformat(this.implantation.newPrice);
        },


    },
};
</script>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
}

img {
    width: 100%;

}

.content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.text-page {
    font-weight: normal;
    color: white;
}

.values {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.values span {
    font-family: var(--simpliz-title-font);
    color: white;
    font-size: 1.7rem;
}

.values span:first-of-type {
    font-size: 1.2rem;
    text-decoration: line-through;
}

ul {
    padding: 0px;
}

.buttons {
    display: flex;
    gap: 10px;
}

@media (min-width: 960px) {
    .container {
        max-width: 1250px;
    }
}
</style>