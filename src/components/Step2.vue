<template>
    <div class="step2">
        <div class="step2__card" v-if="!showError">
            <h2 class="step2__title">Tell us about yourself</h2>
            <div class="card__wrapper">
                <form action="#">
                    <Input title="Name" placeholderText="Type your name"/>
                    <Input title="Age" placeholderText="Type your Age"/>
                    <label class="step2__label" for="country">Where do you live:</label>
                    <select class="step2__select" name="country" @change="handleSelect">
                        <option disabled selected>Select you option</option>
                        <option v-for="country in countriesList" :value="country" :key="country">{{ country }}</option>
                    </select>
                    <div v-if="storeWizard.age > 0 && storeWizard.name != '' && storeWizard.country != ''" class="step2__package">
                        <div class="step2__package-item" v-for="item in packageList" :key="item">
                            <label><input type="radio" name="item" value="item" @change="storeWizard.handlePackage(item)">{{ packageString(item) }}</label>
                        </div>
                    </div>
                </form>
            </div>
            <h3 
            class="step2__premium-value" 
            v-if="storeWizard.premium != 0">
            Your premium is: {{ storeWizard.premium }}{{ storeWizard.getCurrency }}
            </h3>
            <div 
                v-if="storeWizard.premium != 0"
                class="step2__cta">
                <Button type="secondary" @clicked="storeWizard.$reset()">Back</Button>
                <Button type="primary" @clicked="(storeWizard.age >= 100 || storeWizard.age < 18) ? showError = true : storeWizard.nextStep()">Next</Button>
            </div>
        </div>
        <div class="age-error" v-if="showError">
            <h3 class="age-error__title">Ooops, there's a problem</h3>
            <p class="age-error__text">Your age is not in our accepted range limit.<br>
                We are sorry but we cannot insure you know.
            </p>
            <Button type="primary" customWidth="400px" @clicked="storeWizard.$reset()">Ok :(</Button>
        </div>
    </div>
</template>

<script setup>
import { ref , onUpdated } from 'vue'
import { useWizardStore } from '../store/wizard'
import Input from './Input.vue'
import Button from '../components/Button.vue'

const storeWizard = useWizardStore();
const countriesList = ref(["Hong Kong", "USA", "Australia"]);
const packageList = ref(["Standard", "Safe", "Super Safe"]);
const showError = ref(false);

const handleSelect = (evt) => {
    evt.preventDefault();
    storeWizard.selectCountry(evt.target.value);
}

const packageString = (item) => {
    let str = "";

    if (item === "Safe") {
        str = `Safe (+${storeWizard.premium * 0.5}${storeWizard.getCurrency}, 50%)`
    }
    if (item === "Super Safe") {
        str = `Super Safe (+${storeWizard.premium * 0.75}${storeWizard.getCurrency}, 75%)`
    }
    if (item === "Standard") {
        str = "Standard"
    }
    return str;
}

const calculateValues = () => {
    if (storeWizard.age > 0 && storeWizard.name != '' && storeWizard.country != '') {
        let value = 10 * storeWizard.age;
        switch(storeWizard.country) {
            case "USA":
                value *= 2; 
                break;
            case "Australia":
                value *= 3;
                break;
            default:
                value *= 1;
        }
        storeWizard.setPremium(value);
    }
}

onUpdated(() => {
    calculateValues();
});

</script>
<style scoped lang="scss">
    .step2{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        &__card{
            display: flex;
            background: #FAFAFA;
            width: 50vw;
            align-items: center;
            flex-direction: column;
            padding: 30px 0 50px;
        }
        .card{
            &__wrapper{
                width: 300px;
            }
        }
        &__title{
            font-size: 42px;
            font-weight: 700;
        }
        &__label{
            color: #2c2c2c;
            font-size: 16px;
            display: block;
            text-align: left;
            margin: 15px 0 0;
        }
        &__select{
            width: 100%;
            border: 1px solid #cbcbcb;
            color: #4a4a4a;
            background: #fff;
            appearance: none;
            font-size: 16px;
            padding: 12px;
            border-radius: 4px;
            margin-top: 15px;
            box-sizing: border-box;
            position: relative;
            &::before{
                content: 'a';
                position: absolute;
                width: 10px;
                height: 10px;
                background-color: red;
            }
        }
        &__premium-value{
            font-size: 30px;
        }
        &__package{
            width: 100%;
            margin-top: 30px;
            &-item{
                text-align: left;
                margin: 20px 0;
                label{
                    display: flex;
                    gap: 10px;
                }
                input{
                    appearance: none;
                    background-color: #FAFAFA;
                    margin: 0;
                    font: inherit;
                    width: 20px;
                    height: 20px;
                    border: 1px solid #cacaca;
                    border-radius: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    &:before{
                        content: "";
                        opacity: 0;
                        width: 10px;
                        height: 10px;
                        display: block;
                        border-radius: 50px;
                        background-color: #FAFAFA;
                    }
                    &:checked{
                        background-color: #2609c9;
                        border: 0;
                        &:before{
                            opacity: 1;
                        }
                    }
                }
            }
        }
        &__cta{
            display: flex;
            width: 300px;
            justify-content: space-between;
            margin-top: 40px;
        }
    }
    .age-error{
        display: flex;
        background: #FAFAFA;
        width: 50vw;
        align-items: center;
        flex-direction: column;
        padding: 30px 0 50px;
        &__title{
            font-size: 30px;
            font-weight: 700;
            margin: 20px;
        }
        &__text{
            font-size: 24px;
            margin-bottom: 30px;
        }
    }
</style>
