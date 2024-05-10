<script setup>
import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "../../stores/configure.js";
import Links from "@/components/Static/Links.vue";

const configureStore = useConfigureStore();
</script>

<template>
<div class="fadeIn max-[300px]:mt-10 w-full grid max-[300px]:grid-cols-1  min-[301px]:grid-cols-2  justify-items-center justify-center items-center">
  <StracturesFlex :row="true" class="text-xs max-[300px]:hidden items-center" >
    <img src="/logo2.svg" alt="Logo" class="inline max-sm:size-12 size-10">
    <StracturesFlex :column="true" justify="center" :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class="align-middle text-sm text-center"><div>© 2024</div><div>{{$t('footer.rights')}}</div></StracturesFlex>
  </StracturesFlex>
  <StracturesFlex :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class=" max-sm:text-sm " :column="true">
    <StracturesFlex :column="true" justify="center" :wrap="true" items="center"  class="space-x-10 max-md:space-x-6 max-[300px]:space-x-0">
      <p class="text-center inline align-center font-semibold">{{$t('footer.find')}}</p>
      <Links class="max-[300px]:pl-10 rainbow brightness-150" />
    </StracturesFlex>
  </StracturesFlex>

</div>
</template>
