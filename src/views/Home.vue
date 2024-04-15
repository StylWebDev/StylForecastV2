<script setup>
import StracturesFlex from "../components/StracturesFlex.vue";import {Icon} from "@iconify/vue";import {useConfigureStore} from "../stores/configure.js";
import {onMounted, ref, watch, watchEffect} from "vue";import {useWeather} from "../composables/weather.js";

const {getWeather} = useWeather();
const configureStore = useConfigureStore();
const searchCity = ref('');
const truth = ref(true);
const weather = ref(null);
const city =  ref("")

onMounted(  () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
    city.value = (await res.json()).city;
  })
})

watch(searchCity,() =>{
  (searchCity.value.length > 0) ? truth.value=false : truth.value=true;
} )


watchEffect(async () => {
  weather.value = await getWeather(city.value, "current")
})

</script>

<template>
  <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" leave-active-class="transition-opacity duration-500 ease-out" appear appear-active-class="transition-opacity duration-1000 ease-in">
    <div class="mt-4">
      <StracturesFlex :class="configureStore.themes[configureStore.themeNum].text" class=" text-center font-bold max-md:pb-12 bg-transparent" :column="true" items="center">
        <div class=" cursor-default animate-pulse">
          <Icon :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class="inline max-sm:hidden " width="110" icon="ri:meteor-fill"/>
          <Icon :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class="hidden max-sm:inline" width="80" icon="ri:meteor-fill"/>
          <h1 class="transition ease-in duration-500 align-middle inline max-sm:text-4xl sm:text-6xl md:text-6xl lg:text-7xl " :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]">{{$t("home.title")}}</h1>
        </div>
        <StracturesFlex class=" mt-8 cursor-default"  :row="true" justify="center" items="center">
          <p class="rainbow text-4xl align-middle max-sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{{$t("home.slogan")}} <Icon width="50px" class="inline max-sm:hidden" :icon="configureStore.icons.rocket"/> <Icon width="30px" class="hidden max-sm:inline" :icon="configureStore.icons.rocket"/></p>
        </StracturesFlex>
        <StracturesFlex class="apexFade max-sm:mt-14 mt-20 cursor-default"  :row="true" justify="center" items="center">
          <h2 :class="configureStore.trans" class=" align-middle sm:text-lg md:text-xl lg:text-2xl">{{$t("home.purpose")}} !</h2>
        </StracturesFlex>
      </StracturesFlex>

      <StracturesFlex v-if="weather!=null && !weather.hasOwnProperty(`Error`)"  class="font-bold max-sm:mt-2 max-md:mt-5 mt-12 max-md:pb-16" :class="configureStore.themes[configureStore.themeNum].text" :column="true" items="center">
        <div class="fadeIn mb-4 text-center">
          <h1 class="font-semibold text-xl align-middle" :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]"><Icon class="inline animate-pulse" width="20" icon="fad:armrecording"/>  {{$t('forecastDetails.live')}}</h1>
          <p class="cursor-default text-center text-shadow mt-5 align-middle capitalize sm:text-base md:text-base lg:text-lg min-[1920px]:text-xl">{{weather.resolvedAddress}}</p>
        </div>
        <StracturesFlex :row="true" items="center" justify="center" class="content-center items-center fadeIn cursor-default">
          <div><Icon class="inline max-sm:hidden min-[1921px]:hidden" width="160" :icon="configureStore.icons[ weather.currentConditions.icon]"/><Icon class="hidden max-sm:inline" width="140" :icon="configureStore.icons[ weather.currentConditions.icon]"/> <Icon class="inline max-[1920px]:hidden" width="250" :icon="configureStore.icons[ weather.currentConditions.icon]"/></div>
          <div>
            <h3 class="capitalize">{{ $t(`conditions.${weather.currentConditions.conditions}`) }}</h3>
            <p ><Icon width="40" class="inline" :icon="( weather.currentConditions.snow>0) ? configureStore.icons.snow :configureStore.icons.percip"/>{{Math.round( weather.currentConditions.precipprob)}}% <span class="max-[280px]:hidden"><Icon class="inline" width="40" :icon="configureStore.icons.cold"/>{{ weather.currentConditions.feelslike}}°C</span></p>
            <StracturesFlex :row="true" items="center" class="max-sm:text-sm" :wrap="true">
              <p><Icon width="40" class="inline" :icon="`meteocons:wind-beaufort-${Math.floor( weather.currentConditions.windspeed/5)}-fill`"/> {{ weather.currentConditions.windspeed}}Km/h</p>
              <p><Icon width="40" class="inline" :icon="configureStore.icons.windsock"/>{{ weather.currentConditions.windgust}}Km/h</p>
              <button class="block my-2 bg-pink-300 px-4 rounded-3xl text-black hover:brightness-150 font-semibold min-[300px]:text-lg max-[300px]:ml-0 max-sm:ml-5 ml-3" :class="configureStore.trans" type="button"><router-link :to="`/weather/${city}`">{{$t(`daily.details`)}}</router-link></button>
            </StracturesFlex>
          </div>
        </StracturesFlex>
      </StracturesFlex>
    </div>
  </Transition>
</template>

<style scoped>

</style>