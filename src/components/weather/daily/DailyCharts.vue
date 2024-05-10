<script setup>

import StracturesFlex from "@/components/StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";
import {useChartStore} from "@/stores/chart.js";
import {ref} from "vue";

const charts = useChartStore();
const configureStore = useConfigureStore();
const chartLabels = ref([
  {name: "temp", type: "temp"},{name: "uv", type: "uvindex"},{name: "rain", type: "precipprob"}
])
const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },

  day: {
    type: Number,
    required: true,
  },

});
</script>

<template>
  <div class="grid lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 justify-center justify-items-center items-center mt-10 fadeIn pointer-events-none">
    <StracturesFlex v-for="(value, index) in chartLabels" :key="index" :column="true" items="center" justify="center" class="text-center" :class="(index===2) ? `md:col-span-2 min-[1525px]:col-span-1` : ``">
      <h5>{{$t(`charts.${value.name}`)}}</h5>
      <apexchart :type="(index===1) ? `bar` : `area`" :class="configureStore.themes[configureStore.themeNum].charts" :options="charts[`${value.name}Chart`].options"
                 :series="[  { name: (index===2 && $i18n.locale===`en`) ? $t(`charts.${value.name}`).slice(9,16) : $t(`charts.${value.name}`).slice(0,11),
    data: [
    {x:   `0:00` , y: weather.days[day].data.hours[0][value.type]},
    {x:  `3:00 `,y: weather.days[day].data.hours[1][value.type]},
    {x:  `6:00 `,y: weather.days[day].data.hours[2][value.type]},
    {x:  `9:00 `,y: weather.days[day].data.hours[3][value.type]},
    {x:  `12:00 `,y: weather.days[day].data.hours[4][value.type]},
    {x:  `15:00 `,y: weather.days[day].data.hours[5][value.type]},
    {x:  `18:00 `,y: weather.days[day].data.hours[6][value.type]},
    {x:  `21:00 `,y: weather.days[day].data.hours[7][value.type]},
    ]
    }
    ]
"/>
    </StracturesFlex>
  </div>

</template>

<style scoped>

</style>