import { defineStore } from 'pinia'

export const useWizardStore = defineStore({
    id: 'wizard',
    state: () => ({
        step: 1,
        name: '',
        age: 0,
        country: '',
        currency: '',
        plan: '',
        premium: 0
    }),
    actions: {
        nextStep() {
           this.step++ 
        },
        previousStep() {
            this.step--
        },
        selectCountry(country) {
            this.country = country 
        },
        handleInput(evt) {
           let prop = evt.target.name.toLowerCase();

           this[prop] = evt.target.value;
        },
        setPremium(value){
            this.premium = +value
        }
    },
    getters: {
        getCurrency: (state) => {
           if (state.country === "Hong Kong") return 'HKD'
           if (state.country === "USA") return 'USD'
           if (state.country === "Australia") return 'AUD'
        }
    }
})