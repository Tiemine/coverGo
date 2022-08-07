<template>
    <label class="label" :for="props.title">{{props.title}}</label>
    <input  @change="storeWizard.handleInput" class="input" type="text" :name="props.title" :placeholder="props.placeholderText"/>
    <p class="error" v-if="errorMsg">{{props.title}} is misssing</p>
</template>

<script setup>
import { useWizardStore } from '../store/wizard'
import { defineProps } from 'vue'

    const storeWizard = useWizardStore();

    const props = defineProps({
        title: String,
        placeholderText: String,
        errorMsg: {
            type: Boolean,
            default: false,
        },
    })

</script>
<style scoped lang="scss">
    .label{
        color: #2c2c2c;
        font-size: 16px;
        display: block;
        text-align: left;
        margin: 15px 0;
    }
    .input{
        width: 100%;
        border: 1px solid #cbcbcb;
        color: #4a4a4a;
        font-size: 16px;
        padding: 12px;
        border-radius: 4px;
        box-sizing: border-box;
        &::placeholder{
            color: #b6b6b6
        }
    }
    .error{
        text-align: left;
        color: #c91400,
    }
</style>