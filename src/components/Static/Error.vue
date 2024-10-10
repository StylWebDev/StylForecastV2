<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";

const configureStore = useConfigureStore()
const {themes,trans} = useConfigureStore();
</script>

<template>
  <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default mx-4 mt-8 space-y-3 fadeIn">
    <h1 :class="[themes[configureStore.themeNum].about, trans]" class="md:text-5xl max-md:text-3xl font-bold justify-self-start ">{{$t('areaNotFound.title')}}</h1>
    <Icon  width="300px" :class="themes[configureStore.themeNum].about" icon="line-md:map-marker-off-twotone-loop"></Icon>
    <p class="lg:text-3xl md:text-2xl max-2xl:text-lg font-semibold capitalize text-white  " >{{$t('areaNotFound.err')}}</p>
    <RouterLink to="/" :class="[themes[configureStore.themeNum].viewBtn , trans]" class="capitalize border-2 px-3 text-xl">{{$t('areaNotFound.back')}}</RouterLink>
  </StracturesFlex>
</template>

<style scoped>

</style>