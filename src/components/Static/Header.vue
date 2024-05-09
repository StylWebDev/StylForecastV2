<script setup>
import {ref} from "vue";import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "../../stores/configure.js";
import NewSearch from "@/components/Static/NewSearch.vue";
import Tabs from "@/components/NavBar/Header/Tabs.vue";
import Languages from "@/components/NavBar/Languages.vue";
import MenuButton from "@/components/NavBar/Header/MenuButton.vue";
import Regions from "@/components/NavBar/Header/Regions.vue";

const nav = ref('text-white rounded-end ');
const configureStore = useConfigureStore();
</script>

<template>
  <div class="fadeInNav" :class="nav">
    <div
        class="relative grid grid-cols-3 justify-items-center items-start z-40"
        :class="(configureStore.themeNum === 0) ? `bg-eggplant-950` : `bg-weather-750`"
        @click="configureStore.showRegions=false">
      <RouterLink to="/" class="text-2xl max-sm:text-center max-sm:text-lg max-[300px]:text-base font-bold hover:brightness-125 pt-2" :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" >
        <Icon class="inline cursor-pointer" width="55" icon="ri:meteor-fill"/>
        <span class="align-middle max-[300px]:">StylForecast</span>
      </RouterLink>
      <NewSearch class="pt-3 z-40" />
      <StracturesFlex :row="true" class="max-sm:hidden space-x-5 pt-3" >
        <Tabs/>
        <StracturesFlex :column="true" items="center" class="mt-3 text-center w-14" >
          <Languages/>
        </StracturesFlex>
      </StracturesFlex>

      <MenuButton class="max-sm:block hidden mt-3.5"/>
    </div>

    <div class="relative bg-eggplant-500 text-center py-1 z-30">
        <button type="button" :class="configureStore.themes[configureStore.themeNum].about" class="text-start font-bold text-lg group/arrow " @click="configureStore.showRegions=!configureStore.showRegions">
          {{($i18n.locale = `el`) ? 'Ελλάδα' : `Greece`}}
          <Icon class="inline size-5 group-hover/arrow:rotate-90" :class="configureStore.trans"  icon="material-symbols:arrow-right"/>
        </button>
    </div>
    <Transition enter-from-class="-translate-y-full" enter-active-class="transition-all duration-1000 ease-in" leave-to-class="-translate-y-full" leave-active-class="transition-all duration-1000 ease-out">
      <Regions v-if="configureStore.showRegions" class="absolute w-full z-10 bg-eggplant-950 rounded-b-md  "/>
    </Transition>
  </div>
</template>

<style scoped>
</style>