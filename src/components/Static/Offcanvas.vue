<script setup>
import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";
import Languages from "@/components/NavBar/Languages.vue";
import Tabs from "@/components/NavBar/Menu/Tabs.vue";
const configureStore = useConfigureStore()



</script>

<template>
  <div class="bg-neutral-900 bg-opacity-40 z-30" >
    <StracturesFlex :row="true">
      <div :class=" (configureStore.open) ? `h-screen` : `h-0`"
           class="  w-0 lg:w-2/3 xl:w-4/5 2xl:4/5 min-[2000px]:w-4/5" @click="configureStore.open=false" />
      <StracturesFlex
          :column="true" items="center"

          :class=" [(configureStore.open) ? `translate-x-0` : `translate-x-full `,
        (configureStore.themeNum === 0)
            ? `bg-gradient-to-b from-eggplant-900 to-eggplant-600 from-25%`
            : `bg-gradient-to-b to-weather-700 via-weather-800 from-weather-950  `]"

          class=" py-4 w-screen lg:w-1/3 xl:w-1/5 2xl:1/5 h-screen min-[2000px]:w-1/5 fixed right-0 space-y-3 transition-transform duration-1000  ease-in-out z-40"
      >
        <hgroup>
          <h1 :class="configureStore.themes[configureStore.themeNum].about" class="text-4xl font-semibold w-[100%]">{{$t('nav.menu')}}</h1>
        </hgroup>
        <Tabs/>
        <StracturesFlex :column="true" items="center" class="mt-6 text-center w-40 text-white" >
          <Languages class="max-sm:block hidden"/>
        </StracturesFlex>
      </StracturesFlex>
    </StracturesFlex>

  </div>
</template>

<style scoped>

</style>