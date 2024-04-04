<script setup>
import {TabList, TabGroup, Tab, Menu, MenuItems, MenuButton, MenuItem} from "@headlessui/vue";import StracturesFlex from "../StracturesFlex.vue";
import {onMounted, ref, watch} from "vue";import {useConfigureStore} from "../../stores/configure.js";import {Icon} from "@iconify/vue";
const routes = ref([
  { link: "/"},
  { link: "/contact"},
  { link: "/about"}
])
const configureStore = useConfigureStore()

const mode = ref(false)
const darkThemeMq = ref(window.matchMedia("(prefers-color-scheme: dark)"));

watch(mode, (newVal)=>{
  (configureStore.themeNum===1) ? configureStore.themeNum=0 : configureStore.themeNum=1;
  document.body.style.backgroundImage = `${configureStore.themes[configureStore.themeNum].backgroundColor}`;
})


</script>

<template>
<div class="sticky">
  <StracturesFlex :column="true" items="center" justify="center" class="space-y-3">
    <hgroup >
      <h1 :class="configureStore.themes[configureStore.themeNum].about" class="text-6xl font-semibold w-[100%]">{{$t('nav.menu')}}</h1>
    </hgroup>
    <TabGroup class="w-[100%]">
      <TabList>
        <StracturesFlex :column="true" justify="center" items="center">
          <Tab @click="configureStore.open=!configureStore.open" v-for="(value,index) in routes" :key="index" :class="configureStore.themes[configureStore.themeNum].text_trans" class="text-white bg-opacity-50 w-[100%] py-4 text-3xl underline decoration-2 font-semibold underline-offset-4 hover:bg-neutral-100"  >
            <RouterLink :to="value.link">{{$t(`nav.link${index+1}`)}}</RouterLink>
          </Tab>
          <Tab class="mt-5 px-3 py-0.5 active:outline-0 focus:outline-0">
            <button type="button" @click="mode=!mode" :class="configureStore.trans"><Icon width="30" :class="[(configureStore.themeNum===0) ? `text-yellow-400 hover:brightness-200`: `text-neutral-800 hover:brightness-200`,configureStore.trans]" icon="line-md:light-dark-loop"/></button>
          </Tab>
        </StracturesFlex>
      </TabList>
    </TabGroup>
    <StracturesFlex :column="true" items="center" class="mt-6 text-center w-40 text-white" >
      <Menu>
        <MenuButton :class="[configureStore.themes[configureStore.themeNum].btn,configureStore.trans]" class="border-2 rounded-2xl px-3 py-1 text-lg hover:bg-opacity-20"><Icon width="30px" class="inline" :icon="configureStore.icons[`${$i18n.locale}`]"/> {{($i18n.locale==="el" ? `Ελληνικά` : `English`)}}</MenuButton>
        <MenuItems class="bg-neutral-800 bg-opacity-50 border-2 border-neutral-100 border-opacity-25 rounded py-1 pb-5  px-2 mt-5">
          <MenuItem as="a1" v-for="locale in $i18n.availableLocales" class="bg-transparent mt-4 rounded-2xl block text-center  divide-y-2 divide-neutral-50">
            <button type="button" @click="[$i18n.locale=locale,configureStore.lang=locale]" class="block hover:brightness-150"><Icon class="inline" width="35px" :icon="configureStore.icons[`${locale}`]"/> {{(locale==="el" ? `Ελληνικά` : `English`)}}</button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </StracturesFlex>
  </StracturesFlex>
</div>
</template>

<style scoped>

</style>