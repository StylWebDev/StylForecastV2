<script setup>
import Grid from "@/components/Grid.vue";
import regions from "@/composables/regions.json"
import {ref} from "vue";
import StracturesFlex from "@/components/StracturesFlex.vue";
import {Icon} from "@iconify/vue";
import {useConfigureStore} from "@/stores/configure.js";
const consfigureStore = useConfigureStore()

const areas = ref([])
const menu = ref(0)
const areaIndex = ref(0)


</script>

<template>
  <div>
    <Grid v-if="menu===0" sm-columns="3" md-columns="3" lg-columns="4" txl-columns="5" columns="1" class="max-md:text-sm md:text-base justify-items-center px-3 py-2">
      <button type="button" class="block text-start hover:text-yellow-500 align-middle" :class="consfigureStore.trans" v-for="(region,index) in regions[$i18n.locale]" :key="index+1" @click="[areaIndex=index ,menu=1]">
        <Icon icon="ph:map-pin-area-duotone" class="inline size-4"/> {{region.name}}
      </button>
    </Grid>
    <StracturesFlex v-else  :column="true">
      <button type="button" @click="menu=0"  class=" bg-pink-700  px-0.5"><Icon :class="consfigureStore.trans" class="inline size-4"  icon="ion:arrow-return-left"/> Back</button>
      <StracturesFlex :row="true" justify="evenly" items="center" :wrap="true" class="px-3 py-2">
        <a v-for="(area,index) in regions[$i18n.locale][areaIndex].cities" :key="index+1" :href="`/weather/${regions.en[areaIndex].cities[index]}`"
           class="hover:text-yellow-500 align-middle" :class="consfigureStore.trans">
          <Icon icon="icon-park-twotone:museum-one" class="inline size-4"/> {{($i18n.locale === `en`) ? area.split(' ')[0] : area}}
        </a>
      </StracturesFlex>
    </StracturesFlex>

  </div>
</template>

<style scoped>

</style>