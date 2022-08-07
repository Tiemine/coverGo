<template>
    <button 
        :class="['button', `button-${props.type}`, {'button--customWidth': props.customWidth != ''}]"
        @click="$emit('clicked')"
        ><slot></slot>
    </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'primary',
    },
    customWidth: {
        String,
        default: ''
    }
})
</script>
<style scoped lang="scss">
    .button{
        font-size: 20px;
        font-family: 'IBM Plex Sans', sans-serif;
        border-radius: 5px;
        padding: 15px 40px;
        font-weight: 700;
        border: 3px solid #202020;
        cursor: pointer;
        &--customWidth{
            width: v-bind(customWidth);
        }
        &-primary{
            background-color: #202020;
            color: #fff;
        }
        &-secondary{
            background-color: #fff;
            color: #202020;
        }
    }
</style>