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

const icones = ref([`ri:discount-percent-fill`,`fluent:live-20-filled`,`material-symbols:globe`,`hugeicons:maps-location-01`,`tabler:clock-24`,`material-symbols:sync`,`carbon:skill-level-advanced`,`ic:twotone-location-city`,"ic:baseline-history"])
</script>

<template>
  <div class=" fadeIn">
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
            {{t('about.desc')}}
          </p>
        </div>
        <h2 :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]"
            class="mt-8 md:text-4xl max-md:text-2xl font-bold self-center capitalize">{{t('about.features')}} </h2>
        <div>

          <Grid columns="1" md-columns="2" xl-columns="3" items="center" justify="center"  class="mt-10 max-sm:items-center gap-y-10">
            <StracturesFlex v-for="(item,key) in icones"
                            :column="true"
                            :key="key"
                            justify="center"
                            items="center"
                            class="gap-x-2 text-center"
                            :class="{'md:col-span-2 xl:col-span-1': key===8}"
            >
              <Icon :icon="item" class="size-12"
                    :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]"/>
              <h2 :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]"
                  class="md:text-4xl max-md:text-2xl font-bold self-center">{{t(`about.label${key+1}`)}}</h2>
              <p class="text-lg font-semibold capitalize">{{t(`about.purposes${key+1}`)}}</p>
            </StracturesFlex>
          </Grid>
        </div>
      </StracturesFlex>
    </StracturesFlex>
  </div>
</template>