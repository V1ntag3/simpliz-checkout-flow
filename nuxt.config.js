export default {
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  plugins: [
    { src: '~/plugins/persistedState.client.js', mode: 'client' }
  ]
};
