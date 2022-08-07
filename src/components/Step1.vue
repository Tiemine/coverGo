<template>
    <div class="step1">
        <div class="step1__card">
            <div class="step1__wrapper">
                <h2 class="step1__title">Hello there!</h2>
                <p class="step1__paragraph">Let's buy some insurance. <br>It is going to take only a few steps</p>
                <Button type="primary" customWidth="200px" @clicked="storeWizard.nextStep">Start</Button>
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
    .step1{
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
        &__paragraph{
            font-size: 24px;
            margin-bottom: 40px;
        }
    }
</style>
