<script setup>
import {useConfigureStore} from "../stores/configure.js";
import StracturesFlex from "../components/StracturesFlex.vue";
import {Icon} from "@iconify/vue";
const configureStore = useConfigureStore()
const {themes,icons,trans} = useConfigureStore();
</script>

<template>
  <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default mx-4 mt-8 space-y-3 fadeIn">
    <h1 :class="[themes[configureStore.themeNum].about, trans]" class="md:text-5xl max-md:text-3xl font-bold justify-self-start ">404 {{$t('notFound.title')}}</h1>
    <Icon width="300px" :class="[themes[configureStore.themeNum].about,trans]" icon="line-md:coffee-twotone-loop"></Icon>
    <p class="lg:text-3xl md:text-2xl max-2xl:text-lg font-semibold capitalize text-white " >{{$t('notFound.err')}}</p>
    <RouterLink to="/" :class="[themes[configureStore.themeNum].detailsBtn, trans]" class="capitalize rounded-full  px-3 text-xl hover:brightness-150">{{$t('notFound.back')}}</RouterLink>
  </StracturesFlex>
</template>