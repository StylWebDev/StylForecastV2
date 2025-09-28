<script setup>

import StracturesFlex from "@/components/StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";
import {Icon} from "@iconify/vue";
import DailyCharts from "@/components/weather/daily/DailyCharts.vue";
import {onMounted, ref} from "vue";

const configureStore = useConfigureStore();
const {themes,icons,trans} = useConfigureStore();

defineProps({
  weather: {
    type: Object,
    required: true,
  },

  day: {
    type: Number,
    required: true,
  },

});

const showMap = (e) => {
  location.assign(e)
}
</script>

<template>
  <StracturesFlex :column="true"  class="max-sm:mt-4 max-sm:w-screen mt-16 mx-1 fadeIn py-3" :class="configureStore.themes[configureStore.themeNum].frame">

    <StracturesFlex  class="flex-col mt-2 xl:space-x-3"  justify="center" items="center"
                     :class="(parseInt(day.toString())===0 && (new Date().getHours()) >= 12) ? `xl:flex-col xl:w-[1000px] 2xl:w-[1200px] min-[2000px]:w-[1600px]`: ` xl:flex-row`">

      <StracturesFlex :column="true" justify="center" items="center"  class=" md:w-[85%]  lg:w-auto pb-3" >

        <h1 :class="[themes[configureStore.themeNum].about,trans]"
            class="cursor-default text-2xl text-center mt-3 mb-5 align-middle capitalize sm:text-xl md:text-2xl lg:text-3xl min-[1920px]:text-3xl max:sm:text-lg">
           {{$t(`forecastDetails.concise`) }}
        </h1>

        <div class=" max-md:flex max-md:flex-row max-md:overflow-x-auto max-md:gap-x-2 max-sm:w-[300px] max-[500px]:w-[400px] max-[400px]:w-[350px] max-[600px]:w-[500px] max-[350px]:w-[250px] max-md:w-[420px] w-[90%]"
             :class="(day===0 && (new Date().getHours()) >=21) ? `justify-center` : `justify-start`">
        <TransitionGroup enter-from-class="opacity-0 scale-0" appear appear-active-class="transition-all ease-in duration-1000">
            <StracturesFlex v-for="(value,index) in  (day!==0)
                                                      ? weather.days[day].data.hours
                                                      : weather.days[day].data.hours.filter(val=> ((new Date().getHours()) >=21) ? parseInt(val.datetime.slice(0,3)) === 21 : parseInt(val.datetime.slice(0,3)) > (new Date().getHours()) )"
                            :key="index"
                            :class="[(value.conditions.length > 20) ? `sm:pr-4` : null, configureStore.trans]"
                            :column="true" items="center" justify="center"
                            class=" max-xl:mt-6 max-md:py-5 max-md:px-3 max-md:ml-2 hover:scale-105  max-md:border-2 max-md:border-white/70 max-md:rounded-2xl max-md:bg-neutral-900/40">

              <h1 :class="themes[configureStore.themeNum].about">
                {{value.datetime.slice(0,5)}}
                <span>
                  {{(parseInt(value.datetime.slice(0,2))>=13) ? $t('time.pm') : $t('time.am')}}
                </span>
              </h1>

              <hr class="max-md:hidden w-full">

              <StracturesFlex class="md:flex-row max-md:flex-col" justify="center" items="center">

                <StracturesFlex justify="center" class="space-x-2 items-center max-sm:text-center" :row="true">
                  <div>
                    <Icon class="inline max-sm:hidden min-[1920px]:hidden" width="100" :icon="icons[value.icon]"/>
                    <Icon class="hidden max-sm:inline" width="70" :icon="icons[value.icon]"/>
                    <Icon class="inline max-[1920px]:hidden" width="130" :icon="icons[value.icon]"/>
                  </div>

                  <StracturesFlex :column="true" class="text-2xl min-[1920px]:text-3xl align-middle ">
                    <hgroup>
                      <h3 class="font-semibold">{{value.temp}}°C</h3>
                      <p class="text-lg capitalize">{{ (value.snow>0) ? (value.snow<=0.5) ? $t(`conditions.Snow, Partially cloudy`) : $t(`conditions.Snow, Overcast`) : $t(`conditions.${value.conditions}`)}}</p>
                    </hgroup>
                  </StracturesFlex>
                </StracturesFlex>

                <StracturesFlex :row="true" :wrap="false" justify="center" items="center" class="max-sm:text-sm space-x-3">
                  <Icon width="40" :icon="(value.snow>0) ? icons.snow : icons.percip"/><p>{{Math.round(value.precipprob)}}<span class="text-xs">%</span></p>
                  <Icon width="40" :icon="`meteocons:wind-beaufort-${Math.floor(value.windspeed/5)}-fill`"/>
                  <p>
                    {{value.windspeed}}
                    <span class="text-xs">km/h</span>
                  </p>
                </StracturesFlex>

                <StracturesFlex :row="true" :wrap="false" justify="center" items="center" class="max-sm:text-sm">
                  <Icon width="40" :icon="(value.cloudcover >= 30) ? icons.preassurehot : icons.preassurelow"/>
                  {{value.pressure}}
                  <span class="text-xs">hPa</span>
                  <Icon width="40" :icon="icons.humidity"/>{{value.humidity}}
                  <span class="text-xs">%</span>
                </StracturesFlex>
              </StracturesFlex>
            </StracturesFlex>
          </TransitionGroup>
        </div>

      </StracturesFlex>


      <StracturesFlex :column="true" justify="center" items="center"
                      class="items-center max-xl:mt-4 ">
        <h3 :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class="cursor-default text-2xl text-center mt-3 align-middle capitalize sm:text-xl md:text-2xl lg:text-3xl min-[1920px]:text-3xl"><Icon class="inline animate-pulse" width="30" icon="fad:armrecording"/> {{$t('forecastDetails.live')}}</h3>

        <StracturesFlex  items="center" justify="center" class="flex-col md:flex-row max-md:space-y-5 mt-10 md:space-x-3 xl:space-x-0 min-[500px]:mx-5"
                         :class="(parseInt(day)===0 && (new Date().getHours()) >= 12) ? `xl:flex-row gap-3`: ` xl:flex-col`">
          <StracturesFlex :column="true" items="center" justify="center"
                          class="cursor-pointer"
                          @click="showMap(`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=9&overlay=temp&product=ecmw&level=surface&lat=${weather.latitude}&lon=${weather.longitude}&message=true?autoplay=1&controls=0&loop=1`)"
          >
            <h4>{{$t('map.temp')}}</h4>
            <iframe id="sateFrame"  height="450" class="pointer-events-none border-2 border-white/40  scroll mt-4 rounded-xl max-sm:w-[300px] max-[500px]:w-[400px] max-[400px]:w-[350px] max-[600px]:w-[550px]  md:w-[350px] lg:w-[430px] sm:w-[500px] min-[500px]:w-[380px]  xl:w-[450px] 2xl:w-[550px] max-md:w-[300px] min-[2000px]:w-[650px] 2xl:h-[350px] max-[350px]:w-[250px] max-md:h-[250px] md:h-[350px]"
                     :src="`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=9&overlay=temp&product=ecmw&level=surface&lat=${weather.latitude}&lon=${weather.longitude}&message=true?autoplay=1&controls=0&loop=1`"  frameborder="0"
            />
          </StracturesFlex>
          <StracturesFlex :column="true" items="center" justify="center"
                          class="cursor-pointer"
                          @click="showMap(`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=9&overlay=rain&product=ecmwf&level=surface&lat=${weather.latitude}&lon=${weather.longitude}&message=true?autoplay=1&controls=0&loop=1`)">
            <h4>{{$t('map.precip')}}</h4>
            <iframe height="450" class="pointer-events-none border-2 border-white/40 mt-4 rounded-xl max-sm:w-[300px] max-[500px]:w-[400px] max-[400px]:w-[350px] max-[600px]:w-[550px]  md:w-[330px] lg:w-[430px]  sm:w-[500px] min-[500px]:w-[380px]  xl:w-[450px] 2xl:w-[550px] max-md:w-[300px] min-[2000px]:w-[650px] 2xl:h-[350px] max-[350px]:w-[250px] max-md:h-[250px] md:h-[350px]"
                    :src="`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=9&overlay=rain&product=ecmwf&level=surface&lat=${weather.latitude}&lon=${weather.longitude}&message=true?autoplay=1&controls=0&loop=1`" frameborder="0"/>
          </StracturesFlex>

        </StracturesFlex>
      </StracturesFlex>
    </StracturesFlex>

    <div>
      <h3 :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" class="cursor-default text-2xl text-center mt-4 align-middle capitalize sm:text-xl md:text-2xl lg:text-3xl min-[1920px]:text-3xl"> {{$t('forecastDetails.charts')}}</h3>
      <DailyCharts :day="parseInt(day)" :weather="weather"/>
    </div>

  </StracturesFlex>

</template>

<style scoped>

</style>