<script setup>
import Grid from "@/components/Grid.vue";
import regions from "@/composables/regions.json"
import {ref} from "vue";
import StracturesFlex from "@/components/StracturesFlex.vue";
import {Icon} from "@iconify/vue";
import {useConfigureStore} from "@/stores/configure.js";
const configureStore = useConfigureStore()

const {themes,trans} = useConfigureStore();
const menu = ref(0)
const areaIndex = ref(0)


</script>

<template>
  <div class="text-lg">
    <Transition enter-from-class="-translate-y-full opacity-0"
                leave-to-class="-translate-y-full opacity-0 w-full absolute"
                enter-active-class="transition-all duration-1000 ease-in"
                leave-active-class="transition-all duration-1000 ease-out"
    >
      <Grid v-if="menu===0" sm-columns="3" md-columns="3" lg-columns="4" txl-columns="5" columns="1" class="max-md:text-sm justify-items-center pb-2" :class="themes[configureStore.themeNum].headerFooterBgColor">

        <button type="button"
                class="block hover:text-yellow-500 align-middle  w-[100%] text-center py-1"
                :class="[themes[configureStore.themeNum].regionsHoverBgColor,trans]"
                v-for="(region,index) in regions[$i18n.locale]"
                :key="index+1"
                @click="[areaIndex=index ,menu=1]"
        >
          <Icon icon="ph:map-pin-area-duotone" class="inline size-4"/> {{region.name}}
        </button>

      </Grid>
      <StracturesFlex v-else  :column="true" :class="themes[configureStore.themeNum].headerFooterBgColor" >

        <button type="button" @click="menu=0" :class="trans" class=" bg-emerald-600 hover:bg-red-700 px-0.5 font-semibold">
          <Icon  class="inline size-6"  icon="ion:arrow-return-left"/> {{($i18n.locale === `el`) ? 'Επιστροφή' : `Back`}}
        </button>

        <StracturesFlex :row="true" justify="evenly" items="center" :wrap="true" class="sm:px-3 py-2">
          <a v-for="(area,index) in regions[$i18n.locale][areaIndex].cities" :key="index+1" :href="`/weather/${regions.en[areaIndex].cities[index]}`"
             class="hover:text-yellow-500 align-middle text-center sm:px-14 py-1 sm:rounded-md max-sm:w-[100%]"
             :class="[themes[configureStore.themeNum].regionsHoverBgColor,trans]">
            <Icon icon="icon-park-twotone:museum-one" class="inline size-4"/> {{($i18n.locale === `en`) ? (area.split(' ')[1] === `GR`) ? area.split(' ')[0] : area : area}}
          </a>
        </StracturesFlex>
      </StracturesFlex>
    </Transition>
  </div>
</template>

<style scoped>

</style>