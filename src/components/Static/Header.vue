<script setup>
import {ref, watchEffect} from "vue";import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";
import SearchBar from "@/components/Static/SearchBar.vue";
import Tabs from "@/components/NavBar/Header/Tabs.vue";
import Languages from "@/components/NavBar/Languages.vue";
import MenuButton from "@/components/NavBar/Header/MenuButton.vue";
import Regions from "@/components/NavBar/Header/Regions.vue";

const nav = ref('text-white rounded-end ');
const {themes} = useConfigureStore();
const configureStore = useConfigureStore();


</script>

<template>
  <div class="fadeInNav" :class="nav">
    <div
        class="relative grid grid-cols-3 max-sm:grid-cols-2 justify-items-center items-start z-40"
        :class="themes[configureStore.themeNum].headerFooterBgColor"
        @click="[configureStore.showRegions=false,configureStore.active=false]">
      <RouterLink to="/" class="text-2xl max-sm:text-center max-sm:text-lg max-[300px]:text-base font-bold hover:brightness-125 pt-2" :class="[themes[configureStore.themeNum].about,configureStore.trans]" >
        <Icon class="inline cursor-pointer" width="55" icon="ri:meteor-fill"/>
        <span class="align-middle max-[300px]:">StylForecast</span>
      </RouterLink>

      <SearchBar class="pt-3 z-40 max-sm:hidden" />
      <StracturesFlex :row="true" class="max-sm:hidden space-x-5 pt-3" >
        <Tabs/>
        <StracturesFlex :column="true" items="center" class="mt-3 text-center w-14" >
          <Languages/>
        </StracturesFlex>
      </StracturesFlex>

      <MenuButton class="max-sm:block hidden mt-3.5"/>
    </div>

    <div class="relative text-center py-1 z-30 border-b border-neutral-100/50 shadow-lg"
         :class="themes[configureStore.themeNum].menuBgColor"
    >
        <button type="button" :class="[(configureStore.active) ? themes[configureStore.themeNum].about : `text-white`, configureStore.trans]"
                class="text-start font-bold text-lg hover:text-yellow-500 brightness-150"
                @click="[
                    (!configureStore.open)
                        ? configureStore.showRegions=!configureStore.showRegions
                        : null,
                    (!configureStore.open && configureStore.showRegions)
                        ? configureStore.active=!configureStore.active
                        : configureStore.active=false]"
        >

          {{($i18n.locale === `el`) ? 'Ελλάδα' : `Greece`}}
          <Icon class="inline size-5 " :class="[(configureStore.active) ? `rotate-90`: `rotate-0`,configureStore.trans]"  icon="material-symbols:arrow-right"/>
        </button>
    </div>
    <Transition enter-from-class="-translate-y-full" enter-active-class="transition-all duration-1000 ease-in" leave-to-class="-translate-y-full" leave-active-class="transition-all duration-1000 ease-out">
      <Regions v-if="configureStore.showRegions"
               class="absolute w-full z-10"/>
    </Transition>
  </div>
</template>

<style scoped>
</style>