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
const showRegions = ref(false);

</script>

<template>
  <div class="fadeInNav" :class="nav">
    <div class="grid grid-cols-3 justify-items-center items-start">
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
    <div class="relative bg-eggplant-500 text-center py-1">
        <button type="button" class="text-start" @click="showRegions=!showRegions">{{($i18n.locale = `el`) ? 'Ελλάδα' : `Greece`}}</button>
    </div>
    <Regions v-if="showRegions" class="absolute w-full z-10 bg-eggplant-950 rounded-b-md px-3 pb-3 py-2"/>
  </div>
</template>

<style scoped>
</style>