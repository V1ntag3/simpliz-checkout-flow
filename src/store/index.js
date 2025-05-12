import createPersistedState from 'vuex-persistedstate';

export const state = () => ({
    planSelected: null,
});

export const mutations = {
    setPlan(state, plan) {
        state.planSelected = plan;
    },
    setImplantation(state, implantation) {
        if (!state.planSelected) {
            state.planSelected = {};
        }
        state.planSelected.implantation = implantation;
    }
};

export const plugins = [createPersistedState()];
