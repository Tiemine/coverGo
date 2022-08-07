<template>
    <label 
        class="label" 
        :for="props.title">
            {{props.title}}
    </label>
    <input 
        v-model="inputModel" 
        @change="storeWizard.handleInput" 
        class="input" type="text" 
        :name="props.title" 
        :placeholder="props.placeholderText"/>
</template>

<script setup>
import { useWizardStore } from '../store/wizard'
import { ref, defineProps } from 'vue'

    const storeWizard = useWizardStore();

    const props = defineProps({
        title: {
            type: String,
            default: 'Name'
        },
        placeholderText: String,
    })

    const inputName = ref(props.title)
    const inputModel = storeWizard[inputName.value.toLowerCase()] != 0 ? storeWizard[inputName.value.toLowerCase()] : ''
</script>
<style scoped lang="scss">
    .label{
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 22px;
        color: #2c2c2c;
        display: block;
        text-align: left;
        margin: 15px 0;
    }
    .input{
        font-size: 18px;
        color: #4a4a4a;
        width: 100%;
        border: 3px solid #cbcbcb;
        padding: 12px;
        border-radius: 4px;
        box-sizing: border-box;
        &::placeholder{
            color: #b6b6b6
        }
    }
    .error{
        color: #c91400;
        text-align: left;
    }
</style>