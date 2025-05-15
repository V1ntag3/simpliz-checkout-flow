export function checkPlanOrRedirect({ store, router, toast }) {
  const planSelected = store
  if (!planSelected || Object.keys(planSelected).length === 0) {
    router.push({ name: 'PlansView' })
    toast?.error("Selecione um plano para continuar")
    return false
  }
  return true
}
