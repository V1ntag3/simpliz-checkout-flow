import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
    createPersistedState({
        key: 'simpliz',
        paths: ['planSelected', 'orderNumber', 'payment'],
        storage: window.localStorage,
    })(store);
    store.subscribe((mutation, state) => {
        console.log('Mutation:', mutation);
        console.log('State:', state);
    });
};
