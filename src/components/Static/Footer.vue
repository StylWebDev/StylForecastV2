<script setup>

import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "../../stores/configure.js";
import {Icon} from "@iconify/vue";

const configureStore = useConfigureStore();
</script>

<template>
<div class="fadeIn2 mt-16 w-full grid grid-cols-2 justify-items-center justify-center items-center">
  <StracturesFlex :row="true" class="text-lg max-sm:text-sm" >
    <img src="/logo.png" alt="Logo" width="50" class="inline">
    <StracturesFlex :column="true" justify="center" :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class="align-middle text-sm text-center"><div>© 2024</div><div>{{$t('footer.rights')}}</div></StracturesFlex>
  </StracturesFlex>
  <StracturesFlex :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class=" max-sm:text-sm" :column="true">
    <p class="text-center inline align-center font-bold text-white">{{$t('footer.find')}}</p>
    <slot/>
    <StracturesFlex :row="true" justify="center" class="space-x-10 max-md:space-x-5 max-[300px]:space-x-2">
      <a href="https://www.linkedin.com/in/konstantinos-stylianou-a4a95625b/" target="_blank">
        <Icon width="35" :icon="configureStore.icons.linkedin"/>
      </a>
      <a href="https://github.com/AliBaBas02" target="_blank">
        <Icon width="35" :icon="configureStore.icons.github"/>
       </a>
      <a href="#">
        <Icon width="35" :icon="configureStore.icons.earth"/>
       </a>
    </StracturesFlex>
  </StracturesFlex>

</div>
</template>

<style scoped>

</style>