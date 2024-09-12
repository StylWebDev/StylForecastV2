<script setup>
import {useConfigureStore} from "../stores/configure.js";
import StracturesFlex from "../components/StracturesFlex.vue";
import {onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";
import {useI18n} from "vue-i18n";
import Grid from "@/components/Grid.vue";
const configureStore = useConfigureStore()
const i = ref(1)
const {t} = useI18n();

onMounted(()=> {
  setInterval(() => {
    (i.value === 4) ? i.value=1 : i.value+=1;
  },5000)
})

const provides = ref([
  {icon:`ri:discount-percent-fill`, info: t('about.purposes4'), label: `Accuracy`},
  {icon:`fluent:live-20-filled`, info: `Live Weather Forecast`, label: `Real-Time`},
  {icon:`material-symbols:globe`, info:`Weather Forecast for all cities around the world.`, label: `Global`},
  {icon:`hugeicons:maps-location-01`, info:`Rain and temperature Maps`, label: `Weather Maps`},
  {icon:`tabler:clock-24`, info:`24h Current, Weekly and Daily Weather Forecast`, label: `24h Service`},
  {icon:`material-symbols:sync`, info:`Updated weather forecast and alerts every 3 hours`, label: `99.9 Uptime`},
  {icon:`carbon:skill-level-advanced`, info:`Precipitation, temperature and UV Statistics`, label: `Statistics`},
  {icon:`ic:twotone-location-city`, info:`Current Location weather, and information about each city:`, label: `City Info`},
  {icon: "ic:baseline-history", info: `Previously captured weather data`, label: `Historical`}
])
</script>

<template>
  <div class="sm:mt-14 fadeIn">
    <StracturesFlex :column="true" :class="configureStore.themes[configureStore.themeNum].text"
                    justify="center" items="center" class="gap-y-5 justify-items-center text-center cursor-default py-4 px-4 " >
      <StracturesFlex items="center" class="px-4 sm:px-14 py-4 gap-y-3" :column="true" :class="[configureStore.themes[configureStore.themeNum].frame, configureStore.trans]">
        <div>
          <StracturesFlex :row="true" justify="center" items="center" class="py-2 gap-x-6"
                          :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]"
          >
            <Icon icon="solar:hand-money-bold" class="size-12"/>
            <Icon icon="material-symbols:nest-farsight-weather" class="size-12"/>
            <Icon icon="ic:twotone-info" class="size-12"/>
          </StracturesFlex>
          <p class="text-lg font-semibold">
            StylForecast provide users with real-time weather data, Daily and Weekly Forecast, Historical Weather data, and other weather-related data.</p>
        </div>
        <h2 :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]"
            class="mt-8 md:text-4xl max-md:text-2xl font-bold self-center">Facilities:</h2>
        <div>

          <Grid columns="1" md-columns="2" xl-columns="3" items="center" justify="center"  class="mt-10 max-sm:items-center gap-y-10">
            <StracturesFlex v-for="(provide,key) in provides"
                            :column="true"
                            :key="key"
                            justify="center"
                            items="center"
                            class="gap-x-2 text-center"
                            :class="{'md:col-span-2 xl:col-span-1': key===8}"
            >
              <Icon :icon="provide.icon" class="size-12"
                    :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]"/>
              <h2 :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]"
                  class="md:text-4xl max-md:text-2xl font-bold self-center">{{provide.label}}</h2>
              <p class="text-lg font-semibold">{{provide.info}}</p>
            </StracturesFlex>
          </Grid>
        </div>
      </StracturesFlex>
    </StracturesFlex>
  </div>
</template>