<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="title-menu">Simpliz</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar" />
      </span>
      <v-btn class="lowercase item-menu hidden-sm-and-down" text to="/">Home</v-btn>
      <v-btn class="lowercase item-menu hidden-sm-and-down" text to="/planos">Preços</v-btn>
      <v-btn class="lowercase item-menu hidden-sm-and-down" text to="/adicionais">Serviços</v-btn>
      <v-btn class="lowercase item-menu hidden-sm-and-down" text to="/checkout">Pagamento</v-btn>
      <v-btn class="lowercase item-menu hidden-sm-and-down" text to="/confirmacao">Confirmação</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="sidebar" class="hidden-md-and-up primary" app dark temporary>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/planos">
          <v-list-item-content>
            <v-list-item-title>Preços</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/adicionais">
          <v-list-item-content>
            <v-list-item-title>Serviços</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/checkout">
          <v-list-item-content>
            <v-list-item-title>Pagamento</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/confirmacao">
          <v-list-item-content>
            <v-list-item-title>Confirmação</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="background">
      <v-container fluid class="container">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <v-col class="text-center white--text">
        © {{ new Date().getFullYear() }} Simpliz. Todos os direitos reservados.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import '@/styles/simpliz-theme.scss';

export default {
  name: "App",
  data() {
    return {
      sidebar: false,
    };
  },
};
</script>

<style scoped>
.v-toolbar__content {
  gap: 10px;
}

.title-menu {
  font-family: var(--simpliz-title-font);
  font-size: 1.5rem;
  letter-spacing: 2px;
}

.container {
  max-width: 1250px;
}

.item-menu {
  font-weight: 700;
}
</style>