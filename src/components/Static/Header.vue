<script setup>
import {onMounted, ref, watch, watchEffect} from "vue";import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
import {Tab, TabGroup, TabList} from "@headlessui/vue";
import {Menu,MenuItems, MenuItem,MenuButton} from "@headlessui/vue";
import {useConfigureStore} from "../../stores/configure.js";

const routes = ref([
  { link: "/"},
  { link: "/contact"},
  { link: "/about"}
])

const nav = ref('text-white rounded-end ');
const configureStore = useConfigureStore();
const mode = ref(false)
const darkThemeMq = ref(window.matchMedia("(prefers-color-scheme: dark)"));

onMounted(()=> {
  (darkThemeMq.value.matches) ? configureStore.themeNum=0 : configureStore.themeNum=1;
  document.body.style.backgroundImage = `${configureStore.themes[configureStore.themeNum].backgroundColor}`;
  configureStore.open = false;
})

watch(mode, (newVal)=>{
  (configureStore.themeNum===1) ? configureStore.themeNum=0 : configureStore.themeNum=1;
  document.body.style.backgroundImage = `${configureStore.themes[configureStore.themeNum].backgroundColor}`;
})

</script>

<template>
  <div class="fadeInNav" :class="nav">
    <div class="grid grid-cols-2 justify-items-center">
      <h1 class="text-2xl max-[360px]:text-center max-sm:text-lg font-bold"><Icon class="inline" width="70" :icon="configureStore.icons.stars"></Icon><span class="align-middle"><RouterLink :class="[configureStore.themes[configureStore.themeNum].text_trans,configureStore.trans]" to="/">StylForecast</RouterLink></span></h1>

      <StracturesFlex :row="true" class="max-lg:hidden space-x-5" >
        <TabGroup class="font-thin text-xl">
          <TabList as="a">
            <StracturesFlex :row="true" justify="center" class="items-center space-x-2.5">
              <Tab v-slot="{ selected }" v-for="(value,index) in routes" :key="index" class="mt-5 px-3 py-0.5 rounded-2xl border-2 text-base font-semibold" :class="[configureStore.themes[configureStore.themeNum].btn,configureStore.trans]">
                <RouterLink class="w-[100%] h-[100%]" :to="value.link">{{$t(`nav.link${index+1}`)}}</RouterLink>
              </Tab>
              <Tab class="mt-5 px-3 py-0.5 active:outline-0 focus:outline-0">
                <button type="button" @click="mode=!mode" :class="configureStore.trans"><Icon width="30" :class="[(configureStore.themeNum===0) ? `text-yellow-400 hover:brightness-200`: `text-neutral-800 hover:brightness-200`,configureStore.trans]" icon="line-md:light-dark-loop"/></button>
              </Tab>
            </StracturesFlex>
          </TabList>
        </TabGroup>
        <StracturesFlex :column="true" items="center" class="mt-6 text-center w-20" >
          <Menu>
            <MenuButton :class="configureStore.trans" class="hover:brightness-150 active:brightness-200"> <Icon width="38px" class="rounded-2xl" :icon="configureStore.icons[`${$i18n.locale}`]"/></MenuButton>
            <MenuItems class="bg-neutral-800 bg-opacity-40 border-2 border-neutral-100 border-opacity-20 rounded py-1 pb-1  px-2 mt-7">
              <MenuItem as="a1" v-for="locale in $i18n.availableLocales" class="bg-transparent mt-4 rounded-2xl block text-center  divide-y-2 divide-neutral-50">
                <button type="button"  @click="[$i18n.locale=locale,configureStore.lang=locale]" :class="configureStore.trans" class="block hover:brightness-150"><Icon class="inline" width="35px" :icon="configureStore.icons[`${locale}`]"/> {{(locale==="el" ? `Ελληνικά` : `English`)}}</button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </StracturesFlex>
      </StracturesFlex>
      <button type="button" @click="configureStore.open=!configureStore.open"><Icon :class="[configureStore.themes[configureStore.themeNum].text_trans,configureStore.trans]" width="45" class="lg:hidden max-lg:inline-block " icon="ic:round-menu"/></button>
    </div>
  </div>
</template>

<style scoped>
</style>