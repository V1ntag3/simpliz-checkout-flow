<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        <v-card class="pa-3" outlined>
          <v-row>
            <v-col cols="12" class="text-center pa-0">
              <h1>Pedido Finalizado</h1>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="text-center pa-1">
              <p class="text-body-2 mb-2">Seu plano está ativo! Pagamento confirmado e tudo pronto para você começar a
                usar.</p>
            </v-col>
          </v-row>

          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="text-h5 font-weight-bold text-center">Pedido nº {{ orderNumber }}</h3>
            </v-col>
          </v-row>

          <v-row class="mb-4">
            <v-col cols="12">

              <v-row class="font-weight-normal">
                <v-col cols="6" class="pa-0">
                  <span>Plano: {{ }}</span>
                </v-col>
                <v-col cols="6" class="text-right pa-0 font-weight-bold">
                  <span>{{ planSelected.name }}</span>
                </v-col>
              </v-row>

              <v-row class="font-weight-normal">
                <v-col cols="6" class="pa-0">
                  <span>Status do Pedido: </span>
                </v-col>
                <v-col cols="6" class="text-right pa-0 font-weight-bold">
                  <span class="text-success ">Confirmado</span>
                </v-col>
              </v-row>
              <v-divider></v-divider>

              <v-row>
                <v-col cols="6" class="pa-0">
                  <span class="text-h5">Total </span>
                </v-col>
                <v-col cols="6" class="text-right pa-0">
                  <span class="text-h5 font-weight-bold">{{ formatPrice(total) }}</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BRLValueformat } from "@/utils";

export default {
  name: "OrderFinalization",
  data() {
    return {
      planSelected: this.$store.state.planSelected,
      orderNumber: this.$store.state.orderNumber,
      total: this.$store.state.payment,
    };
  },
  methods: {
    formatPrice(price) {
      return BRLValueformat(price);
    }
  },
  mounted() {
    this.$store.commit('resetState')
  }
};
</script>

<style scoped>
.v-btn {
  width: 100%;
}

.text-success {
  color: #4caf50;
}

.text-h5 {
  font-size: 1.25rem;
}

.v-divider {
  margin: 16px 0;
}
</style>