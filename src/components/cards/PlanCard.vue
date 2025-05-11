<template>
  <v-card outlined color="primary" style="border-color: white !important;" class="card" dark>

    <v-card-title class="title">{{ plano.nome }}</v-card-title>
    <v-card-subtitle class="subtitle">{{ plano.description }}</v-card-subtitle>

    <v-card-text>
      <div class="price">R$ <span>{{ plano.preco }}</span>/mês</div>
      <ul class="pa-0">
        <li v-for="(beneficio, index) in plano.beneficios" :key="index">
          <div class="item-feature">
            <Check color="var(--simpliz-success)" :size="20" /> {{ beneficio }}
          </div>
          <hr v-if="index < plano.beneficios.length - 1" class="full-width-divider" />
        </li>
      </ul>
    </v-card-text>

    <v-card-actions>
      <v-btn color="white"  class="black--text capitalize button-plan" @click="$emit('selecionar')">
        Contratar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { Check } from 'lucide-vue'
export default {
  props: {
    plano: Object,
  },
  components: { Check }

};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 10px 15px;
  border: 2px solid;
  border-radius: 15px;
  min-width: 250px;
}

.title {
  font-weight: 900;
  font-size: 1.6rem !important;
}

.subtitle {
  font-weight: normal;
  font-size: 0.9rem;
}

.item-feature {
  display: flex;
  justify-content: start;
  gap: 5px;
  margin: 5px 0px;
  color: white;
}

.price {
  font-weight: normal;
  font-size: 1rem;
  color: white;
  margin: 10px 0px;
}

.price span {
  font-weight: bold;
  font-size: 3rem;
}

.full-width-divider {
  width: 100%;
  align-self: stretch;
  border: none;
  border-top: 1px solid #ccc;
  margin: 8px 0;
  display: block;
  flex: 0 0 auto;
}

li::marker {
  content: "";
}
.button-plan{
  font-weight: bold;
  width: 100%;
}
</style>