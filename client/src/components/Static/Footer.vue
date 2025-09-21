<script setup>
import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "../../stores/configure.js";
import Links from "@/components/Static/Links.vue";

const {themes,trans} = useConfigureStore();
const configureStore = useConfigureStore();
</script>

<template>
  <div class="fadeIn w-full grid max-[300px]:grid-cols-1  min-[301px]:grid-cols-2  justify-items-center justify-center items-center">
    <StracturesFlex :row="true" class="text-xs max-[300px]:hidden items-center" >
      <img src="/logo2.svg" alt="Logo" class="inline max-sm:size-12 size-10">
      <StracturesFlex :column="true" justify="center" :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class="align-middle text-sm text-center"><div>© 2024</div><div>{{$t('footer.rights')}}</div></StracturesFlex>
    </StracturesFlex>
    <StracturesFlex :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class=" max-sm:text-sm " :column="true">
      <StracturesFlex :column="true" justify="center" items="center" >
        <p class="text-center  font-semibold">{{$t('footer.find')}}</p>
        <Links class=" brightness-150" />
      </StracturesFlex>
    </StracturesFlex>

  </div>
</template>
