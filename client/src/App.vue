<script setup>
import Header from "./components/Static/Header.vue";
import Offcanvas from "./components/Static/Offcanvas.vue";
import {useConfigureStore} from "./stores/configure.js";
import StracturesFlex from "@/components/StracturesFlex.vue";
import {useRoute} from "vue-router";
import Footer from "@/components/Static/Footer.vue";
import {onMounted} from "vue";
import Toast from "@/components/Static/Toast.vue";
const {themes} = useConfigureStore();
const configureStore = useConfigureStore();
const route = useRoute()
onMounted(() => {
  configureStore.checkLang();
})

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

    <StracturesFlex :column="true" class="z-20 bg-transparent pt-1 flex-grow"
         :class="(route.name===`Contact` || route.name===`About`) ? (configureStore.themeNum===1) ? `max-sm:bg-weather-950` : `max-sm:bg-eggplant-950` : null"
         @click="[
             configureStore.selectedCity = $t(`daily.search`),
             configureStore.showRegions=false,
             configureStore.active=false
             ]"
    >
      <teleport to="#troll">
        <Transition enter-from-class="scale-0" enter-active-class="transition-all duration-500 ease-in"
                    leave-to-class="scale-0" leave-active-class="transition-all duration-500 ease-out"
                    appear appear-active-class="transition-all duration-500 ease-in">
          <Toast  v-if="configureStore.showToast" :class="themes[configureStore.themeNum].headerFooterBgColor" class="self-center  z-50 text-white"/>
        </Transition>
      </teleport>
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
    </StracturesFlex>
    <Footer :class="themes[configureStore.themeNum].headerFooterBgColor"
            @click="configureStore.selectedCity = $t(`daily.search`)"
            class="z-50 py-2"/>
  </StracturesFlex>
</template>

<style scoped>

</style>
