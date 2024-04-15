<script setup>
import {computed, ref, watchEffect} from "vue";import {useConfigureStore} from "@/stores/configure.js";
import {useRoute} from "vue-router";import {useWeather} from "../../composables/weather.js";
import Error from "../../components/Static/Error.vue";
import CurrentAnalysisInSummary from "@/components/weather/weekly/CurrentAnalysisInSummary.vue";
import WeeklyAnalysisInSummary from "@/components/weather/weekly/WeeklyAnalysisInSummary.vue";
import ProvidersWeeklyWeather from "@/components/weather/weekly/ProvidersWeeklyWeather.vue";

const {getWeather} = useWeather();
const configureStore = useConfigureStore();
const route = useRoute();
const defaultWeather = ref(null)
const weather = ref(null);

watchEffect(async () =>{
  weather.value = await getWeather(route.params.city, "weekly");
  defaultWeather.value = await getWeather(route.params.city, "default");
})

const weeklyWeather = computed( () => {
    return  weather.value.days.filter((value,index) => (index>0 && index<5))
})


</script>

<template>
  <div>
    <div v-if="weather!=null && !weather.hasOwnProperty(`Error`)"  class="font-bold max-md:pb-16 z-10 fadeIn" :class="configureStore.themes[configureStore.themeNum].text" :column="true" items="center">

      <h2 class="cursor-default text-center text-shadow fadeIn mt-5 align-middle capitalize sm:text-lg md:text-xl lg:text-2xl min-[1920px]:text-3xl">{{weather.resolvedAddress}}</h2>
      <div class="fadeIn">
        <p class="mt-3 font-semibold text-2xl text-center " :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]">{{$t(`days.day${new Date(weather.days[0].data.datetime).getDay()}`)}} {{new Date( weather.days[0].data.datetime).getUTCDate()}}/{{new Date( weather.days[0].data.datetime).getMonth() + 1}}/{{new Date( weather.days[0].data.datetime).getFullYear()}}</p>
      </div>

      <CurrentAnalysisInSummary :weather="weather" :city="route.params.city"/>

      <WeeklyAnalysisInSummary :city="route.params.city" :weather="weeklyWeather" />

      <ProvidersWeeklyWeather :providersWeather="defaultWeather" :resolvedAddress="weather.resolvedAddress"/>
    </div>

    <Error v-show="configureStore.open===false" v-if="weather!=null && weather.hasOwnProperty(`Error`)" />
  </div>

</template>

<style scoped>

</style>