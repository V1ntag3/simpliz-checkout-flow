

const getDefaultState = () => ({
    planSelected: null,
    orderNumber: 0,
    payment: null
})

const getReset = () => ({
    planSelected: null,
    payment: null
})

export const state = getDefaultState()

export const mutations = {
    setPlan(state, plan) {
        state.planSelected = plan;
    },
    setOrderNumber(state) {
        state.orderNumber += 1;
    },
    setPayment(state, payment) {
        state.payment = payment;
    },
    setImplantation(state, implantation) {
        if (!state.planSelected) {
            state.planSelected = {};
        }
        state.planSelected.implantation = implantation
    },
    resetState(state) {
        Object.assign(state, getReset())
    }
};

