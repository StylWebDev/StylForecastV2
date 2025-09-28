<script setup>

import StracturesFlex from "@/components/StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";
import {Icon} from "@iconify/vue";

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

  windowHeight: {
    type: Number,
    required: true,
  }
});

</script>

<template>
  <div class="flex max-md:flex-col l:flex-row md:flex-row lg:flex-row justify-center justify-items-center md:space-x-8 space-y-4 max-md:divide-y-2 divide-opacity-20 ">

      <StracturesFlex :row="true" justify="center" items="start"  class="max-md:justify-items-center md:justify-items-start content-center items-center fadeIn cursor-default" :class="(windowHeight>2100) ? `text-xl`: null">
        <div>
          <Icon class="inline max-sm:hidden min-[1920px]:hidden " :width="(windowHeight>1500) ? `190` : `150`" :icon="icons[(day===0) ?  weather.currentConditions.icon :  weather.days[day].data.icon]"/>
          <Icon class="hidden max-sm:inline" width="140" :icon="icons[(day===0) ?  weather.currentConditions.icon :  weather.days[day].data.icon]"/>
          <Icon class="inline max-[1920px]:hidden" width="250" :icon="icons[(day===0) ?  weather.currentConditions.icon :  weather.days[day].data.icon]"/>
        </div>

        <div>
          <StracturesFlex class="space-x-2 items-center" :row="true">
            <h3 class="text-4xl min-[1920px]:text-5xl align-middle">{{(day===0) ?  weather.currentConditions.temp :  weather.days[day].data.temp}}°C</h3>
          </StracturesFlex>
          <h3 class="capitalize">
            {{(day===0)
                ? $t(`conditions.${weather.currentConditions.conditions}`)
                : (weather.days[day].data.snow>0) ? (weather.days[day].data.snow<=0.5)
                    ? $t(`conditions.Snow, Partially cloudy`)
                    : $t(`conditions.Snow, Overcast`)
                  : $t(`conditions.${weather.days[day].data.conditions}`) }}
          </h3>

          <p class="max-[350px]:text-center">
            <Icon :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" class="inline" width="40" :icon="icons.termometer"/>
            <span class="max-[350px]:hidden">{{$t("forecastDetails.feels")}}</span>
            <span class="max-[350px]:inline min-[350px]:hidden ">{{ $t("forecastDetails.like")}} </span>
            <span class="  max-[300px]:text-lg max-[300px]:font-bold">
              {{ (day===0)
                ?   weather.currentConditions.feelslike
                :  weather.days[day].data.feelslike}}°C
            </span>
          </p>

          <StracturesFlex :row="true"  class="max-sm:text-sm  text-center items-center max-sm:space-x-8">
            <p>
              <Icon :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" class="inline max-sm:block" :icon="icons.hot"/>
              {{$t("forecastDetails.max")}}
              <span class=" text-center ">{{ weather.days[day].data.tempmax}}</span>
              <span class="text-xs ">°C</span>
            </p>

            <p>
              <Icon :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" class="inline max-sm:block" :icon="icons.cold"/>
              {{$t("forecastDetails.min")}}
              <span class="">{{ weather.days[day].data.tempmin}}</span>
              <span class="text-xs">°C</span>
            </p>
          </StracturesFlex>
        </div>
      </StracturesFlex>

      <StracturesFlex :column="true" justify="center"   class="max-md:items-center md:items-start fadeIn cursor-default font-semibold" :class="(windowHeight>2100) ? `text-xl`: null">

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle"><Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons.cloudy"/>
            {{$t("forecastDetails.cloudy")}} {{(day===0) ?   weather.currentConditions.cloudcover :  weather.days[day].data.cloudcover}}
            <span class="text-xs">%</span>
          </p>
        </StracturesFlex>

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle">
            <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="( weather.currentConditions.snow>0) ? icons.snow : icons.percip"/>
            <span >{{ (weather.currentConditions.snow>0 || weather.days[day].data.snow>0) ? $t("forecastDetails.snow") : $t("forecastDetails.rain")}} </span>
            <span class="max-md:inline max-[833px]:hidden">
              {{$t("forecastDetails.chance")}}
            </span>
            <span class="text-xs">
              <span class="text-base">
            {{(day===0) ?   weather.currentConditions.precipprob :  weather.days[day].data.precipprob}}

              </span>
              %</span>
          </p>
        </StracturesFlex>

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle">
            <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons.fog"/>
            {{$t("forecastDetails.fog")}} {{(day===0 ) ?   weather.currentConditions.visibility :  weather.days[day].data.visibility}}
            <span class="text-xs">%</span>
          </p>
        </StracturesFlex>

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle ">
            <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons.humidity"/>
            {{$t("forecastDetails.humidity")}} {{(day===0) ?   weather.currentConditions.humidity :  weather.days[day].data.humidity}}
            <span class="text-xs">%</span>
          </p>
        </StracturesFlex>

      </StracturesFlex>

      <StracturesFlex :column="true" justify="center"  class="max-md:items-center md:items-start fadeIn cursor-default font-semibold" :class="(windowHeight>2100) ? `text-xl`: null">

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle">
            <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="`meteocons:wind-beaufort-${(day===0) ? Math.floor( weather.currentConditions.windspeed/5) : Math.floor( weather.days[day].data.windspeed/5)}-fill`"/>
            {{$t("forecastDetails.wind")}} {{(day===0) ?   weather.currentConditions.windspeed :  weather.days[day].data.windspeed}}
            <span class="text-xs">Km/h</span>
          </p>
        </StracturesFlex>

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle">
            <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons.windsock"/>
            <span class="max-md:inline max-[833px]:hidden">{{($i18n.locale==="en") ? $t("forecastDetails.wind") : ``}}</span>
            {{$t("forecastDetails.gust")}} {{(day===0) ?   weather.currentConditions.windgust :  weather.days[day].data.windgust}}
            <span class="text-xs">Km/h</span>
          </p>
        </StracturesFlex>

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle"><Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons.dust"/>
            {{$t("forecastDetails.dust")}} {{(day===0) ?   weather.currentConditions.feelslike :  weather.days[day].data.feelslike}}
            <span class="text-xs"> AC</span>
          </p>
        </StracturesFlex>

        <StracturesFlex :row="true" justify="start">
          <p class="align-middle capitalize"><Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="( weather.days[day].data.cloudcover >= 30) ? icons.preassurehot : icons.preassurelow"/>
          {{$t("forecastDetails.pressure")}} {{(day===0) ?   weather.currentConditions.pressure :  weather.days[day].data.pressure}}
          <span class="text-xs"> hPa</span>
        </p>
        </StracturesFlex>
      </StracturesFlex>

      <div class="hidden max-md:block">

        <StracturesFlex :column="true" justify="center" class="max-md:items-center md:items-start cursor-default font-semibold " :class="(windowHeight>2100) ? `text-xl`: null">

          <StracturesFlex :row="true" justify="start">
            <p class="align-middle">
              <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons.sunrise"/>
              {{$t("forecastDetails.sunrise")}} {{ weather.days[day].data.sunrise.slice(0,5)}} {{(parseInt(weather.days[day].data.sunrise.slice(0,2))>=13) ? $t('time.pm') : $t('time.am')}}
            </p>
          </StracturesFlex>

          <StracturesFlex :row="true" justify="start">
            <p class="align-middle">
              <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons.moonrise"/>
              {{$t("forecastDetails.sunset")}} {{ weather.days[day].data.sunset.slice(0,5)}} {{(parseInt(weather.days[day].data.sunset.slice(0,2))>=13) ? $t('time.pm') : $t('time.am')}}
            </p>
          </StracturesFlex>

          <StracturesFlex :row="true" justify="start">
            <p class="align-middle">
              <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="(day===0 && weather.currentConditions.uvindex === 0) ? `meteocons:dust-night` : `meteocons:uv-index-${(day===0) ?   weather.currentConditions.uvindex :  weather.days[day].data.uvindex}-fill`"/>
              {{$t("forecastDetails.uv")}} {{(day===0) ?   weather.currentConditions.uvindex :  weather.days[day].data.uvindex}}
              <span class="text-xs"> mW/cm2</span>
            </p>
          </StracturesFlex>

          <StracturesFlex :row="true" justify="start">
            <p class="align-middle">
              <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `40`" :icon="icons['pollen-flower']"/>
              {{$t("forecastDetails.pollen")}} N/A
              <span class="text-xs"> mWp</span>
            </p>
          </StracturesFlex>

        </StracturesFlex>
      </div>

    </div>

    <StracturesFlex :row="true" justify="around" :class="themes[configureStore.themeNum].frame"  class="fadeIn px-2 mt-8 max-md:space-x-5 md:space-x-8 lg:space-x-10 xl:space-x-14 min-[2100px]:space-x-20 max-md:hidden">

      <StracturesFlex :row="true" items="center">
        <Icon class="inline " :width="(windowHeight<640 || windowHeight>2100) ? `60` : `50`" :icon="icons.sunrise"/>
        <span>{{$t("forecastDetails.sunrise")}}: {{weather.days[day].data.sunrise.slice(0,5)}} {{(parseInt(weather.days[day].data.sunrise.slice(0,2))>=13) ? $t('time.pm') : $t('time.am')}}</span>
      </StracturesFlex>

      <StracturesFlex :row="true" items="center">
        <Icon class="inline " :width="(windowHeight<640 || windowHeight>2100) ? `60` : `50`" :icon="icons.moonrise"/>
        <span>{{$t("forecastDetails.sunset")}}: {{weather.days[day].data.sunset.slice(0,5)}} {{(parseInt(weather.days[day].data.sunset.slice(0,2))>=13) ? $t('time.pm') : $t('time.am')}}</span>
      </StracturesFlex>

      <StracturesFlex :row="true" items="center">
        <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `50`" :icon="(day===0 && weather.currentConditions.uvindex === 0)? `meteocons:dust-night` : `meteocons:uv-index-${(day===0) ?   weather.currentConditions.uvindex + 1 :  weather.days[day].data.uvindex + 1}-fill`"/>
        <span>{{$t("forecastDetails.uv")}}: {{(day===0) ?   weather.currentConditions.uvindex + 1 :  weather.days[day].data.uvindex + 1}}</span>
      </StracturesFlex>

      <StracturesFlex :row="true" items="center">
        <Icon class="inline" :width="(windowHeight<640 || windowHeight>2100) ? `60` : `50`" :icon="icons['pollen-flower']"/>
        <span>{{$t("forecastDetails.pollen")}}: N/A <span class="text-xs"> mWp</span></span>
      </StracturesFlex>
    </StracturesFlex>
</template>

<style scoped>

</style>