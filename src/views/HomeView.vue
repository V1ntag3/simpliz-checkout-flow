<template>
  <v-container fluid class="landing-container">
    <div class="image-wrapper">
      <img :src="businessImg" alt="Business Management" class="bg-image" />
      <div class="content">
        <h1>Gestão Empresarial Simplificada</h1>
        <p>Organize, acompanhe e cresça com nossa solução moderna.</p>

        <v-btn x-large color="primary" class="mt-4 capitalize-first font-weight-bold button-finish" @click="seePlans">
          Ver planos
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import businessImg from '@/assets/imgs/landing-business.jpg'

export default {
  name: "HomeView",
  data() {
    return {
      businessImg
    };
  },
  methods: {
    seePlans() {
      this.$router.push({ name: "PlansView" });
    }
  },
};
</script>
<style>
body.landing-container #container-layout {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;

}

body.landing-container .container {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

.container {
  max-width: 1300px;
  height: 100%;
}
</style>

<style scoped>
.landing-container {
  padding: 0;
  position: relative;
}

.image-wrapper {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.content {
  position: absolute;
  top: 50%;
  left: 10%;
  z-index: 2;
  color: white;
  transform: translateY(-50%);
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.content p {
  font-size: 1.2rem;
}

@media (max-width: 600px) {
  .content h1 {
    font-size: 2.2rem;
  }

  .content p {
    font-size: 1.2rem;
  }

}
</style>
