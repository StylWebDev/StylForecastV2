<script setup>
import Grid from "@/components/Grid.vue";
import regions from "@/composables/regions.json"
import {ref} from "vue";
import StracturesFlex from "@/components/StracturesFlex.vue";

const areas = ref([])
const menu = ref(0)
const areaIndex = ref(0)


</script>

<template>
  <div>

    <Grid v-if="menu===0" sm-columns="3" md-columns="3" lg-columns="4" txl-columns="5" columns="1" class="max-md:text-sm md:text-base justify-items-center">
      <button type="button" class="block text-start hover:text-yellow-500" v-for="(region,index) in regions[$i18n.locale]" :key="index+1" @click="[areaIndex=index ,menu=1]">
        {{region.name}}
      </button>
    </Grid>
    <StracturesFlex v-else :row="true" justify="evenly" items="center" :wrap="true">
      <RouterLink v-for="(area,index) in regions[$i18n.locale][areaIndex].cities" :key="index+1" :to="`/weather/${regions.en[areaIndex].cities[index]}`"
      class="hover:text-yellow-500">
        {{($i18n.locale === `en`) ? area.split(' ')[0] : area}}
      </RouterLink>
    </StracturesFlex>
  </div>
</template>

<style scoped>

</style>