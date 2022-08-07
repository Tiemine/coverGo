<template>
  <Step3 v-if="storeWizard.step === 3"/>
  <Step2 v-if="storeWizard.step === 2"/>
  <Step1 v-else/>
</template>

<script>
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import { useWizardStore } from './store/wizard'

export default {
  components: {
    Step1,
    Step2,
    Step3
  },
  setup() {
    const storeWizard = useWizardStore();
    return {
      storeWizard
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a4a4a;
}
</style>
