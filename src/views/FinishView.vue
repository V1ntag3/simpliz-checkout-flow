<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        <v-card class="pa-3 receipt-border" outlined>
          <v-row>
            <v-col cols="12" class="text-center pa-0">
              <h1>Pedido Finalizado</h1>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="text-center pa-0">
              <img style="max-width: 200px;" :src="status ? finishConfirm : finishPending" />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="text-center pa-1">
              <p v-if="status" class="text-body-2 mb-2">Seu plano está ativo! Pagamento confirmado e tudo
                pronto para você começar a
                usar.</p>

              <p v-else class="text-body-2 mb-2">

                Aguardando pagamento para confirmação. A ativação será feita automaticamente após a compensação (até 3
                dias úteis). O boleto foi enviado para seu e-mail.

              </p>
            </v-col>
          </v-row>

          <v-row class="mb-4">
            <v-col cols="12" class="text-body-2">

              <v-row class="font-weight-normal">
                <v-col cols="6" class="pa-0">
                  <span>Plano: </span>
                </v-col>
                <v-col cols="6" class="text-right pa-0 font-weight-bold">
                  <span>{{ planSelected.name }}</span>
                </v-col>
              </v-row>

              <v-row class="font-weight-normal">
                <v-col cols="6" class="pa-0">
                  <span>Pedido: </span>
                </v-col>
                <v-col cols="6" class="text-right pa-0 font-weight-bold">
                  <span>#{{ orderNumber }}</span>
                </v-col>
              </v-row>

              <v-row class="font-weight-normal">
                <v-col cols="6" class="pa-0">
                  <span>Nome:</span>
                </v-col>
                <v-col cols="6" class="text-right pa-0 font-weight-bold">
                  <span>{{ name }}</span>
                </v-col>
              </v-row>

              <v-row class="font-weight-normal ">
                <v-col cols="6" class="pa-0">
                  <span>Email:</span>
                </v-col>
                <v-col cols="6" class="text-right pa-0 font-weight-bold">
                  <span>{{ email }}</span>
                </v-col>
              </v-row>

              <v-row class="font-weight-normal">
                <v-col cols="6" class="pa-0">
                  <span>Status: </span>
                </v-col>
                <v-col cols="6" class="text-right pa-0 font-weight-bold">
                  <span v-if="status" class="text-success ">Confirmado</span>
                  <span v-else class="text-warning ">Pendente</span>
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
import finishConfirm from "@/assets/imgs/confirmed.svg";
import finishPending from "@/assets/imgs/pending.svg";
import { checkPlanOrRedirect } from '@/helpers/planVerify'

export default {
  name: "OrderFinalization",
  data() {
    return {
      finishConfirm,
      finishPending,
      planSelected: this.$store.state.planSelected,
      orderNumber: this.$store.state.orderNumber,
      method: this.$store.state.payment.method || '',
      total: this.$store.state.payment.total,
      name: this.$store.state.payment.name,
      email: this.$store.state.payment.email,
    };
  },
  computed: {
    status() {
      return this.$store.state.payment.method !== 'boleto'
    }
  },
  methods: {
    formatPrice(price) {
      return BRLValueformat(price);
    }
  },
  created() {
    checkPlanOrRedirect({
      store: this.$store.state.payment,
      router: this.$router,
      toast: this.$toast,
    }),
    setTimeout(() => {
      this.$store.commit('resetState')
    }, 400)
  }
};
</script>

<style scoped>
.v-btn {
  width: 100%;
}

.receipt-border {
  position: relative;
  background-color: white;
  border: 1px solid transparent;
  border-bottom: 0px;
  overflow: hidden;
  background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='10' viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'><polygon points='0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10' fill='%23003F69' stroke='%23003F69'/></svg>");
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: auto 10px;
  padding-bottom: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

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