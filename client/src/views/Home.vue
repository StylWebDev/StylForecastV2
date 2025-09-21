<script setup>
import StracturesFlex from "../components/StracturesFlex.vue";import {Icon} from "@iconify/vue";import {useConfigureStore} from "../stores/configure.js";
import {onMounted, ref, watchEffect} from "vue";import {useWeather} from "../composables/weather.js";

const {getWeather} = useWeather();
const configureStore = useConfigureStore();
const {themes,icons,trans} = useConfigureStore();

const weather = ref(null);
const city =  ref('')
const loading = ref(false);
const cookie = ref(document.cookie.split('='));
const arr = ref([]);
arr.value[cookie.value[0]] = cookie.value[1];


onMounted(  () => {
  if (arr.value['access']==='approved') {
    loading.value = true;
    navigator.geolocation.getCurrentPosition(async (position) => {
      const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
      city.value = (await res.json()).city;
      weather.value = await getWeather("kastoria", "current")
    }, (err) => {
      loading.value = false
    }, {enableHighAccuracy: true, maximumAge: 10000});
  }
})

const getLocation = () => {
  loading.value = true;
  navigator.geolocation.getCurrentPosition(async (position) => {
    document.cookie = "access=approved";
    const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
    city.value = (await res.json()).city;
    weather.value = await getWeather("kastoria", "current")

  }, (err) => {
    document.cookie = "access=denied";
    console.log(err)
    loading.value = false
  }, {enableHighAccuracy: true, maximumAge: 10000})
}

</script>


<template>
  <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" leave-active-class="transition-opacity duration-500 ease-out" appear appear-active-class="transition-opacity duration-1000 ease-in">
    <div class="mt-4">
      <StracturesFlex :class="themes[configureStore.themeNum].text"
                      class=" text-center font-bold max-md:pb-12 bg-transparent"
                      :column="true"
                      items="center">

        <div class=" cursor-default">
          <Icon :class="[themes[configureStore.themeNum].about,trans]"
                class="inline max-sm:hidden "
                width="110"
                icon="ri:meteor-fill"/>
          <Icon :class="[themes[configureStore.themeNum].about,trans]"
                class="hidden max-sm:inline"
                width="80"
                icon="ri:meteor-fill"/>

          <h1 class="transition ease-in duration-500 align-middle inline max-sm:text-4xl sm:text-6xl md:text-6xl lg:text-7xl animate-pulse"
              :class="[themes[configureStore.themeNum].about,trans]">
            {{$t("home.title")}}
          </h1>
        </div>

        <StracturesFlex class=" mt-8 cursor-default"  :row="true" justify="center" items="center">
          <p class=" text-yellow-400 text-4xl align-middle max-sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{{$t("home.purpose")}}
            <Icon width="50px" class="inline max-sm:hidden" :icon="icons.rocket"/>
            <Icon width="30px" class="hidden max-sm:inline" :icon="icons.rocket"/>
          </p>
        </StracturesFlex>

      </StracturesFlex>

      <StracturesFlex :column="true" items="center" v-if="city==='' && loading"
                      class="animate-pulse mt-4 text-yellow-400 text-2xl align-middle max-sm:text-lg sm:text-xl md:text-2xl lg:text-3xl"
                      :class="themes[configureStore.themeNum].text">
        <Icon icon="line-md:loading-alt-loop" class="size-20"/>
        Loading...
      </StracturesFlex>

      <StracturesFlex v-else-if="weather!=null && !weather.hasOwnProperty(`Error`)"  class="font-bold max-sm:mt-2 max-md:mt-5 mt-12 max-md:pb-16" :class="themes[configureStore.themeNum].text" :column="true" items="center">
        <div class="fadeIn mb-4 text-center">
          <h1 class="font-semibold text-xl text-rose-600 align-middle" :class="configureStore.trans">
            <Icon class="inline animate-pulse" width="20" icon="fad:armrecording"/>  {{$t('forecastDetails.live')}}
          </h1>
          <p class="cursor-default text-center text-shadow mt-5 align-middle capitalize sm:text-base md:text-base lg:text-lg min-[1920px]:text-xl">{{weather.resolvedAddress}}</p>
        </div>
        <StracturesFlex :row="true" items="center" justify="center" class="content-center items-center fadeIn cursor-default">

          <div>
            <Icon class="inline max-sm:hidden min-[1920px]:hidden" width="160"
                  :icon="icons[ weather.currentConditions.icon]"/>
            <Icon class="hidden max-sm:inline" width="140"
                  :icon="icons[ weather.currentConditions.icon]"/>
            <Icon class="inline max-[1920px]:hidden" width="250"
                  :icon="icons[ weather.currentConditions.icon]"/>
          </div>

          <div>
            <h3 class="capitalize">
              {{ $t(`conditions.${weather.currentConditions.conditions}`) }}
            </h3>

            <p>
              <Icon width="40" class="inline" :icon="( weather.currentConditions.snow>0) ? icons.snow :icons.percip"/>{{Math.round( weather.currentConditions.precipprob)}}%
              <span class="max-[280px]:hidden"><Icon class="inline" width="40" :icon="icons.cold"/>
                {{ weather.currentConditions.feelslike}}°C
              </span>
            </p>

            <StracturesFlex :row="true" items="center" class="max-sm:text-sm" :wrap="true">
              <p>
                <Icon width="40" class="inline" :icon="`meteocons:wind-beaufort-${Math.floor( weather.currentConditions.windspeed/5)}-fill`"/>
                {{ weather.currentConditions.windspeed}}Km/h
              </p>

              <p>
                <Icon width="40" class="inline" :icon="icons.windsock"/>
                {{ weather.currentConditions.windgust}}Km/h
              </p>
              <button class="block my-2 hover:brightness-150 font-semibold min-[300px]:text-lg max-[300px]:ml-0 max-sm:ml-5 ml-3"
                      :class="[configureStore.themes[configureStore.themeNum].viewBtn,configureStore.trans]"
                      type="button"
              >
                <RouterLink :to="`/weather/${`KASTORIA`}`">
                  {{$t(`daily.details`)}}
                </RouterLink>
              </button>
            </StracturesFlex>
          </div>
        </StracturesFlex>
      </StracturesFlex>

      <StracturesFlex
          :column="true"
          items="center"
          v-else
          class=" max-sm:mt-2 max-md:mt-5 mt-12 max-md:pb-16 group/location"
          :class="trans"
      >
        <Icon icon="line-md:map-marker-alt-twotone-loop" class="size-28 text-red-600 group-hover/location:brightness-150 " />
        <hgroup class="text-center">
          <h2 class="font-extrabold text-2xl"
              :class="[themes[configureStore.themeNum].text]">
            {{($i18n.locale === "en") ? "Enable Location" : "Ενεργοποίηση Τοποθεσίας"}}
          </h2>
          <p
              class="font-semibold capitalize"
              :class="[themes[configureStore.themeNum].about]"
          >
            {{($i18n.locale === "en")
              ? "To provide the current forecast for your area"
              : "Για εμφάνιση της τρέχουσας πρόγνωσης για την περιοχή σας"}}
          </p>
        </hgroup>

        <button
            @click="getLocation()"
            type="button"
            :class="[themes[configureStore.themeNum].viewBtn]"
            class="py-2 mt-5 font-bold group-hover/location:brightness-150 cursor-pointer transition-all ease-in duration-250">
          {{($i18n.locale === "en") ? "Enable Location" : "Ενεργοποίηση Τοποθεσίας"}}
        </button>
      </StracturesFlex>
    </div>
  </Transition>
</template>

<style scoped>

</style>