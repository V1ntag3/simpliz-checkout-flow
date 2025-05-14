<template>
  <v-card outlined color="primary" style="border-color: white !important;" class="card" dark>
    <div>
      <div>
        <v-card-title class="title">{{ plan.name }}</v-card-title>
        <v-card-subtitle class="subtitle">{{ plan.description }}</v-card-subtitle>
      </div>

      <v-card-text>
        <div class="price">R$ <span>{{ plan.price }}</span>/mês</div>
        <ul class="pa-0">
          <ItemCheck v-for="(benefit, index) in plan.benefits" :key="index" :description="benefit"
            :max-array="plan.benefits.length" :index="index" />
        </ul>
      </v-card-text>
    </div>

    <v-card-actions>
      <v-btn v-if="$listeners.select" color="white" class="text-capitalize button-plan" @click="$emit('select')">
        Contratar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ItemCheck from '../ui/ItemCheck.vue';
export default {
  props: {
    plan: Object,
  },
  components: { ItemCheck }

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

.price {
  font-weight: normal;
  font-size: 1rem;
  color: white;
  margin-bottom: 5px;
}

.price span {
  font-weight: bold;
  font-size: 3rem;
}

.button-plan {
  font-weight: bold;
  width: 100%;
  color: var(--simpliz-primary);
}
</style>