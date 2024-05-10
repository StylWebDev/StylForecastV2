<script setup>
import {useConfigureStore} from "../stores/configure.js";
import StracturesFlex from "../components/StracturesFlex.vue";
import {onMounted, ref} from "vue";
const configureStore = useConfigureStore()
const i = ref(1)

onMounted(()=> {
  setInterval(() => {
    (i.value === 4) ? i.value=1 : i.value+=1;
  },5000)
})

</script>

<template>
  <div>
    <StracturesFlex :column="true" justify="center" items="center" class=" justify-items-center text-center cursor-default py-4 px-4 " >
      <hgroup class="cursor-default fadeIn">
        <h1 :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]" class="md:text-6xl max-md:text-4xl font-bold self-center">{{ $t("about.title") }}</h1>
        <p class=" mt-2 md:text-3xl max-xl:text-2xl font-semibold " :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]">StylsForecast</p>
      </hgroup>
      <ul class="flex flex-col 2xl:items-start 2xl:list-disc    cursor-default space-y-7   mt-16 max-md:mt-5 fadeIn">
        <li v-for="index in 4" :key="index" :class="[(i===index) ? `text-yellow-400 scale-105 transition-all duration-1000 ease-in` : `text-white transition-all duration-1000 ease-out` ,configureStore.trans]" class="md:text-xl max-md:text-base md:font-semibold">{{ $t(`about.purposes${index}`)}}</li>
      </ul>
    </StracturesFlex>
  </div>
</template>