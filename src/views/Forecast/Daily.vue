<script setup>
import {onMounted, onUnmounted , ref, watchEffect} from "vue";
import StracturesFlex from "../../components/StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";
import {useRoute} from "vue-router";
import {useWeather} from "@/composables/weather.js";
import Error from "../../components/Static/Error.vue";
import DailyAnalysisInSummary from "@/components/weather/daily/DailyAnalysisInSummary.vue";
import PerTheeHoursAnalysis from "@/components/weather/daily/PerTheeHoursAnalysis.vue";

const route = useRoute();
const day = ref(route.params.days);
const windowHeight = ref(window.innerHeight);
const configureStore = useConfigureStore();
const {themes,trans} = useConfigureStore();

const {getWeather} = useWeather();
const weather = ref(await getWeather(route.params.city, "daily"));


onMounted(() => {
    window.addEventListener('resize', onResize);
});
onUnmounted(() =>{
  window.removeEventListener('resize',onResize);
});
const onResize = () => {windowHeight.value = window.innerWidth};const isOpen = ref(false);
</script>

<template>
  <div>
    <StracturesFlex v-if="weather!=null && !weather.hasOwnProperty(`Error`)" :class="themes[configureStore.themeNum].text" class=" font-bold" :column="true" items="center">

      <h2 class="cursor-default text-center text-shadow fadeIn mt-5 align-middle capitalize sm:text-lg md:text-xl lg:text-2xl min-[1920px]:text-3xl">{{weather.resolvedAddress}}</h2>
      <div class="fadeIn">
        <p class="mt-3 font-semibold text-2xl " :class="[themes[configureStore.themeNum].about,trans]">
          {{$t(`days.day${new Date(weather.days[day].data.datetime).getDay()}`)}} {{new Date( weather.days[day].data.datetime).getUTCDate()}}/{{new Date( weather.days[day].data.datetime).getMonth() + 1}}/{{new Date( weather.days[day].data.datetime).getFullYear()}}
        </p>
      </div>

      <DailyAnalysisInSummary :windowHeight="windowHeight" :day="parseInt(day.toString())" :weather="weather"/>

      <PerTheeHoursAnalysis :day="parseInt(day.toString())" :weather="weather" />

    </StracturesFlex>
    <Error v-show="configureStore.open===false" v-if="weather!=null && weather.hasOwnProperty(`Error`)" />
  </div>
</template>
