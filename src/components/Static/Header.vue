<script setup>
import {ref} from "vue";import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "../../stores/configure.js";
import NewSearch from "@/components/Static/NewSearch.vue";
import Tabs from "@/components/NavBar/Header/Tabs.vue";
import Languages from "@/components/NavBar/Languages.vue";
import MenuButton from "@/components/NavBar/Header/MenuButton.vue";

const nav = ref('text-white rounded-end ');
const configureStore = useConfigureStore();

</script>

<template>
  <div class="fadeInNav" :class="nav">
    <div class="grid grid-cols-3 justify-items-center items-start">
      <RouterLink to="/" class="text-2xl max-sm:text-center max-sm:text-lg max-[300px]:text-base font-bold hover:brightness-125 pt-2" :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" >
        <Icon class="inline cursor-pointer" width="55" icon="ri:meteor-fill"/>
        <span class="align-middle max-[300px]:">StylForecast</span>
      </RouterLink>
      <NewSearch class="pt-3" />
      <StracturesFlex :row="true" class="max-sm:hidden space-x-5 pt-3" >
        <Tabs/>
        <StracturesFlex :column="true" items="center" class="mt-3 text-center w-14" >
          <Languages/>
        </StracturesFlex>
      </StracturesFlex>

      <MenuButton class="max-sm:block hidden mt-3.5"/>
    </div>
  </div>
</template>

<style scoped>
</style>