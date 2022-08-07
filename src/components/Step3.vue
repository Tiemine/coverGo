<template>
    <div class="step3">
        <div class="step3__card">
            <div class="step3__wrapper">
                <h2 class="step3__title">Summary<br>{{storeWizard.name.split(' ')[0]}}</h2>
                <ul class="step3__data-list">
                    <li>Name: {{ storeWizard.name }}</li>
                    <li>Age: {{ storeWizard.age }}</li>
                    <li>Where do you live: {{ storeWizard.country }}</li>
                    <li>Package: {{ storeWizard.plan }}</li> 
                    <li>Premium: {{ storeWizard.premium }}{{ storeWizard.getCurrency }}</li>                                      
                </ul>
                <div class="step3__cta">
                    <Button type="secondary" @clicked="storeWizard.previousStep">Back</Button>
                    <Button type="primary" @clicked="storeWizard.$reset()">Buy</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWizardStore } from '../store/wizard'
import Button from '../components/Button.vue'

const storeWizard = useWizardStore();

</script>
<style scoped lang="scss">
    .step3{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        &__card{
            background: #FAFAFA;
            width: 50vw;
            height: 30vw;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__title{
            font-size: 42px;
            font-weight: 700;
            margin: 0 0 45px 0;
        }
        &__data-list{
            list-style-type: none;
            margin: 0;
            padding: 0;
            li{
                font-size: 24px;
                margin: 20px 0;
            }
        }
        &__cta{
            display: flex;
            width: 300px;
            justify-content: space-between;
            margin-top: 40px;
        }
    }
</style>
