<script setup>

import {Tab, TabGroup, TabList} from "@headlessui/vue";
import {Icon} from "@iconify/vue";
import StracturesFlex from "@/components/StracturesFlex.vue";
import {useConfigureStore} from "@/stores/configure.js";
import MenuButton from "@/components/NavBar/Header/MenuButton.vue";
import {onMounted, ref, watch} from "vue";
const configureStore = useConfigureStore()


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
  <TabGroup class="font-thin text-xl">
    <TabList as="a">
      <StracturesFlex :row="true" justify="center" class="items-center space-x-2.5">
        <Tab class="mt-2 py-0.5 active:outline-0 focus:outline-0">
          <MenuButton/>
        </Tab>
        <Tab class="mt-2 py-0.5 active:outline-0 focus:outline-0">
          <button type="button" @click="mode=!mode" :class="[(configureStore.themeNum===0) ? `rotate-0` : `rotate-180` ,configureStore.trans]" :title="($i18n.locale===`en`) ? `Change Theme` : `Αλλαγή θέματος`" class="hover:scale-110 hover:brightness-150">
            <Icon width="30" :class="[configureStore.themes[configureStore.themeNum].about,configureStore.trans]" icon="line-md:light-dark-loop"/></button>
        </Tab>
      </StracturesFlex>
    </TabList>
  </TabGroup>
</template>

<style scoped>

</style>