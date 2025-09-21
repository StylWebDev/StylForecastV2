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
  <div class="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 font-semibold mt-[2%] fadeIn">
    <StracturesFlex v-for="(value,index) in weather" :key="index" class="py-2 mt-4 max-[300px]:mx-1 max-md:mx-3 md:mx-4" :class="[(value.data.conditions.length > 20) ? `sm:pr-4` : null , configureStore.themes[configureStore.themeNum].text, configureStore.themes[configureStore.themeNum].frameWeek ]" :column="true" items="center" justify="around">
      <h1 v-if="index<4" class="tec">{{$t(`days.day${new Date(value.data.datetime).getDay()}`)}}</h1>
      <StracturesFlex v-if="index<4"  :row="true" items="center" justify="center" class="mt-6 content-center items-center cursor-default">
        <div><Icon class="inline max-sm:hidden min-[1920px]:hidden" width="160" :icon="configureStore.icons[value.data.icon]"/><Icon class="hidden max-sm:inline" width="120" :icon="configureStore.icons[value.data.icon]"/> <Icon class="inline max-[1920px]:hidden" width="200" :icon="icons[value.data.icon]"/></div>
        <div>
          <StracturesFlex class="space-x-2 items-center" :row="true">
            <h3 class="text-2xl min-[1920px]:text-3xl align-middle">{{value.data.tempmax}}°C</h3>
          </StracturesFlex>
          <h3 class="capitalize">{{ (value.data.snow>0) ? (value.data.snow<=0.5) ? $t(`conditions.Snow, Partially cloudy`) : $t(`conditions.Snow, Overcast`) : $t(`conditions.${value.data.conditions}`)}}</h3>
          <StracturesFlex :row="true" items="center" class="max-sm:text-sm max-[300px]:items-end">
            <p><Icon width="40" class="inline" :icon="(value.data.snow>0) ? icons.snow : icons.percip"/>{{Math.round(value.data.precipprob)}}<span class="text-xs">%</span></p>
            <p><Icon width="40" class="inline" :icon="`meteocons:wind-beaufort-${Math.floor(value.data.windspeed/5)}-fill`"/> {{value.data.windspeed}}<span class="text-xs">km/h</span></p>
          </StracturesFlex>
          <StracturesFlex :row="true" items="center" class="max-sm:text-sm">
            <p><Icon width="40" class="inline" :icon="icons.hot"/>{{value.data.tempmax}}<span class="text-xs">°C</span></p>
            <p><Icon width="40" class="inline" :icon="icons.cold"/>{{value.data.tempmin}}<span class="text-xs">°C</span></p>
          </StracturesFlex>
        </div>
      </StracturesFlex>
      <button v-if="index<4" class="block my-2 hover:brightness-150" :class="[configureStore.themes[configureStore.themeNum].viewBtn,configureStore.trans]" type="button"><router-link :to="`/weather/${city}/${index+1}`">{{$t(`daily.details`)}}</router-link></button>
   </StracturesFlex>
  </div>
</template>
