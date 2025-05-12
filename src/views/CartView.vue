<template>
    <v-col style="justify-content: center; display: flex; flex-direction: column;">

        <v-row style="font-size: 1.8rem; color: white; font-weight: bold;">
            Seu Carrinho
        </v-row>
        <v-row>
            <v-col col="8" class="plan-block">
                <v-row style="font-weight: bold;font-size:1.2rem;color: var( --simpliz-primary);">{{ planSelected.name
                    }}</v-row>
                <v-col>
                    <v-row>
                        Período
                    </v-row>

                    <v-row>
                        <div>

                        </div>
                    </v-row>


                </v-col>
                <v-row>Serviços adicionais</v-row>
                <v-row></v-row>
            </v-col>
            <v-col col="2">

            </v-col>

        </v-row>
    </v-col>
</template>

<script>
import { BRLValueformat } from "@/utils";
import tasksImg from '@/assets/imgs/tasks.png';

export default {
    name: "PlansView",
    components: {},
    computed: {
        planSelected() {
            return this.$store.state.planSelected
        }
    },
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
        if (!this.planSelected || Object.keys(this.planSelected).length === 0) {
            this.$router.push({ name: 'PlansView' }); 
        }
    },
    methods: {
        selectPlan(plan) {
            this.$store.commit('setPlano', plan)
            this.$router.push({ name: "Resumo" });
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
.plan-block {
    background-color: white;
    border-radius: 10px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
}
</style>