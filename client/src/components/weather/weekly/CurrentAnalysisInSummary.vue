<script setup>
import StracturesFlex from "@/components/StracturesFlex.vue";
import {Icon} from "@iconify/vue";
import {useConfigureStore} from "@/stores/configure.js";

const configureStore = useConfigureStore();
const {themes,icons,trans} = useConfigureStore();

defineProps({
  weather: {
    type: Object,
    required: true,
  },
  city: {
    type: String,
    required: true,
  }
});


</script>

<template>
  <StracturesFlex :row="true" :wrap="false" items="center" justify="center" class="content-center items-center fadeIn cursor-default">
    <div><Icon class="inline max-sm:hidden min-[1920px]:hidden" width="190" :icon="icons[ weather.currentConditions.icon]"/><Icon class="hidden max-sm:inline" width="140" :icon="icons[ weather.currentConditions.icon]"/> <Icon class="inline max-[1920px]:hidden" width="250" :icon="icons[ weather.currentConditions.icon]"/></div>
    <div>
      <StracturesFlex class="space-x-2 items-center" :row="true">
        <h3 class="text-4xl min-[1920px]:text-5xl align-middle">{{ weather.currentConditions.temp}}°C</h3>
      </StracturesFlex>
      <h3 class="capitalize">{{ $t(`conditions.${weather.currentConditions.conditions}`) }}</h3>
      <p ><Icon width="40" class="inline" :icon="( weather.currentConditions.snow>0) ? icons.snow : icons.percip"/>{{Math.round( weather.currentConditions.precipprob)}}% <span class="max-[280px]:hidden"><Icon class="inline" width="40" :icon="icons.cold"/>{{ weather.currentConditions.feelslike}}°C</span></p>
      <StracturesFlex :row="true" items="center" class="max-sm:text-sm" :wrap="true">
        <p><Icon width="40" class="inline" :icon="`meteocons:wind-beaufort-${Math.floor( weather.currentConditions.windspeed/5)}-fill`"/> {{ weather.currentConditions.windspeed}}Km/h</p>
        <p><Icon width="40" class="inline" :icon="configureStore.icons.windsock"/>{{ weather.currentConditions.windgust}}Km/h</p>
        <button class="block my-2 hover:brightness-150 font-semibold min-[300px]:text-lg max-[300px]:ml-0 max-sm:ml-5 ml-3" :class="[configureStore.themes[configureStore.themeNum].viewBtn,configureStore.trans]" type="button"><router-link :to="`/weather/${city}/0`">{{$t(`daily.details`)}}</router-link></button>
      </StracturesFlex>
    </div>
  </StracturesFlex></template>

<style scoped>

</style>