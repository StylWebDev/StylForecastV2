<script setup>
import Header from "./components/Static/Header.vue";
import Offcanvas from "./components/Static/Offcanvas.vue";
import {useConfigureStore} from "./stores/configure.js";
import StracturesFlex from "@/components/StracturesFlex.vue";
import {useRoute} from "vue-router";
import Footer from "@/components/Static/Footer.vue";
import {onMounted} from "vue";
const {themes} = useConfigureStore();
const configureStore = useConfigureStore();
const route = useRoute()
onMounted(() => {
  configureStore.checkLang();
})
const lan = navigator.languages
</script>

<template>
  <StracturesFlex :column="true"
                  :class="(route.fullPath===`/` || route.fullPath===`/about` || route.fullPath===`/contact` || route.name===`notFound`)
                              ? `h-screen`
                              : (route.name===`city`)
                                  ? `h-auto sm:h-screen`
                                  : `h-auto`"
  >
    <Header class=" sticky top-0 z-40" />
    <Offcanvas  :class="[(configureStore.open) ? `opacity-100 h-screen` : `opacity-0 h-0`]"
                class=" max-sm:top-[64px] top-[77px] fixed w-screen right-0 transition-opacity duration-1000  ease-in-out z-50"
                @click="configureStore.selectedCity = $t(`daily.search`)"/>

    <div class="z-20 bg-transparent pt-1 flex-grow"
         :class="(route.name===`Contact` || route.name===`About`) ? (configureStore.themeNum===1) ? `max-sm:bg-weather-950` : `max-sm:bg-eggplant-950` : null"
         @click="[
             configureStore.selectedCity = $t(`daily.search`),
             configureStore.showRegions=false,
             configureStore.active=false
             ]"
    >
      <div class="stars4"></div>
      <div class="stars2"></div>
      <Suspense>
        <template #default>
          <RouterView />
        </template>
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>
    <Footer :class="themes[configureStore.themeNum].headerFooterBgColor"
            @click="configureStore.selectedCity = $t(`daily.search`)"
            class="z-50 py-2"/>
  </StracturesFlex>
</template>

<style scoped>

</style>
