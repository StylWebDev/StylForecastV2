<script setup>
import Header from "./components/Static/Header.vue";
import Offcanvas from "./components/Static/Offcanvas.vue";
import {useConfigureStore} from "./stores/configure.js";
const configureStore = useConfigureStore();

</script>

<template>
    <nav :class="configureStore.themes[configureStore.themeNum].foregroundColor" class="z-50 relative">
      <Header class="md:h-[70px]"/>
    </nav>
    <main class="z-10 bg-transparent pt-1">
      <div class="stars4"></div>
      <div class="stars2"></div>
      <Offcanvas v-if="configureStore.open" class="lg:hidden py-4"/>
      <RouterView v-show="configureStore.open===false"/>
    </main>
</template>

<style scoped>

</style>
