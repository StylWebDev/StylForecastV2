<script setup>
import Header from "./components/Static/Header.vue";
import Offcanvas from "./components/Static/Offcanvas.vue";
import {useConfigureStore} from "./stores/configure.js";
const configureStore = useConfigureStore();

</script>

<template>
    <Header class="md:h-[70px] sticky top-0 z-50" :class="(configureStore.themeNum === 0) ? `bg-eggplant-950` : `bg-weather-950 brightness-110`"/>
    <Offcanvas  :class="[(configureStore.open) ? `opacity-100 h-screen` : `opacity-0 h-0`]"
                class=" fixed w-screen right-0 transition-opacity duration-1000  ease-in-out"
                @click="configureStore.selectedCity = `Find Your Area`"/>
    <main class="z-20 bg-transparent pt-1" @click="configureStore.selectedCity = `Find Your Area`">
      <div class="stars4"></div>
      <div class="stars2"></div>
      <RouterView />
    </main>
</template>

<style scoped>

</style>
