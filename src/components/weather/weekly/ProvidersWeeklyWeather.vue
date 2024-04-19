<script setup>

import StracturesFlex from "@/components/StracturesFlex.vue";
import {Icon} from "@iconify/vue";
import {useConfigureStore} from "@/stores/configure.js";
import {ref} from "vue";


const configureStore = useConfigureStore();
const count = ref(0)
const showProvidersWeather = ref(false)

const props = defineProps({
  providersWeather: {
    type: Object,
    required: true,
  },
  resolvedAddress: {
    type: String,
    required: true,
  }
});

</script>

<template>
  <div class="fadeIn">
    <StracturesFlex class=" mt-5" :column="true" items="center" justify="center">
      <h4 class="text-center" :class="configureStore.themes[configureStore.themeNum].about">{{$t('daily.compare')}}:</h4>
      <StracturesFlex class="space-x-2" :row="true" items="center" justify="end" >
        <button :class="configureStore.trans" class=" my-2 bg-pink-300 px-4 rounded-3xl text-neutral-900 hover:brightness-150 block"  type="button"  @click="[count=0,showProvidersWeather=true]">VisualCrossing</button>
        <button :class="configureStore.trans" class=" my-2 bg-pink-300 px-4 rounded-3xl text-neutral-900 hover:brightness-150 block" type="button"  @click="[count=1, showProvidersWeather=true]">OpenMeteo</button>
      </StracturesFlex>
    </StracturesFlex>
    <Transition enter-active-class="fadeInCities" leave-active-class="fadeOutCities">
      <div v-if="showProvidersWeather" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-flow-row font-semibold mx-1 mb-5 pb-3 lg:mx-10" :class="[configureStore.themes[configureStore.themeNum].text, configureStore.themes[configureStore.themeNum].frame]">

      <StracturesFlex :row="true" justify="center" class="sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-4 text-center mt-2 gap-3">
        <div class=" align-middle font-extrabold">
          <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-1000 ease-out" leave-active-class="transition-all duration-1000 ease-out absolute">
            <img v-if="count===0" class="inline" src="https://avatars.githubusercontent.com/u/52202145?v=4" width="40" alt="VisualCrossingLogo">
            <img v-else class="inline rounded-full" src="https://graphql-engine-cdn.hasura.io/assets/main-site/marketplace/openweather.svg" width="40" alt="OpenMeteoLogo">
          </Transition>
          {{(count===0) ? `Visual Crossing` : `Open-Meteo`}}
        </div>
        <div>
          <button class="pt-1.5" type="button" @click="showProvidersWeather=false"><Icon :class="configureStore.trans" class="text-red-400 hover:text-red-200" width="25" icon="ic:baseline-cancel"/></button>
        </div>
      </StracturesFlex>

      <StracturesFlex v-for="(value,index) in (count === 0) ? providersWeather.visualCrossingData.days : providersWeather.openWeatherData.days " :key="index" class=" mt-4 max-md:mx-1 md:mx-4 bg-neutral-900 bg-opacity-20 p-4 rounded-3xl" :class="[(value.data.conditions.length > 20) ? `sm:pr-4` : null, (index === 0) ? `md:col-span-2 xl:col-span-4 max-xl:w-auto xl:w-1/2 xl:justify-self-center`: null]" :column="true" items="center" justify="center">
        <h6 v-if="index===0" class="text-lg text-center">{{resolvedAddress}}</h6>
        <p :class="(index===0) ? configureStore.themes[configureStore.themeNum].about : configureStore.themes[configureStore.themeNum].text">{{(index===0) ? $t('daily.now') : $t(`days.day${new Date(value.data.datetime).getDay()}`)}}</p>

        <StracturesFlex :row="true" items="center" justify="center" class="mt-3 content-center items-center cursor-default ">
          <div><Icon class="inline max-sm:hidden min-[1921px]:hidden" width="160" :icon="configureStore.icons[value.data.icon]"/><Icon class="hidden max-sm:inline" width="120" :icon="configureStore.icons[value.data.icon]"/> <Icon class="inline max-[1920px]:hidden" width="200" :icon="configureStore.icons[value.data.icon]"/></div>
          <div>
            <StracturesFlex class="space-x-2 items-center" :row="true">
              <h3 class="text-2xl min-[1920px]:text-3xl align-middle">{{value.data.temp}}°C</h3>
            </StracturesFlex>
            <h3 class="capitalize">{{ (value.data.snow>0) ? (value.data.snow<=0.5) ? $t(`conditions.Snow, Partially cloudy`) : $t(`conditions.Snow, Overcast`) : $t(`conditions.${value.data.conditions}`)}}</h3>
            <StracturesFlex :row="true" items="center" class="max-sm:text-sm max-[300px]:items-end">
              <p><Icon width="40" class="inline" :icon="(value.data.snow>0) ? configureStore.icons.snow :configureStore.icons.percip"/>{{Math.round(value.data.precipprob)}}<span class="text-xs">%</span></p>
              <p><Icon width="40" class="inline" :icon="`meteocons:wind-beaufort-${Math.floor(value.data.windspeed/5)}-fill`"/> {{value.data.windspeed}}<span class="text-xs">km/h</span></p>
            </StracturesFlex>
            <StracturesFlex :row="true" items="center" class="max-sm:text-sm">
              <p><Icon width="40" class="inline" :icon="configureStore.icons.hot"/>{{value.data.tempmax}}<span class="text-xs">°C</span></p>
              <p><Icon width="40" class="inline" :icon="configureStore.icons.cold"/>{{value.data.tempmin}}<span class="text-xs">°C</span></p>
            </StracturesFlex>
          </div>
        </StracturesFlex>
      </StracturesFlex>
    </div>
    </Transition>
  </div>
</template>

<style scoped>

</style>