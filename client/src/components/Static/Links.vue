<script setup>
import {useConfigureStore} from "@/stores/configure.js";
import {ref} from "vue";
const configureStore = useConfigureStore();
import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
const linkList = ref([
  {name: 'LinkedIn', href:`https://www.linkedin.com/in/konstantinos-stylianou-a4a95625b/` ,icon:`line-md:linkedin` },
  {name: 'Github', href:`https://github.com/AliBaBas02` ,icon:`line-md:github-loop` },
  {name: 'Email', href:`mailto:kostasstilianou@gmail.com` ,icon:`line-md:email-alt-twotone` },
  {name:`StylsDev`, href: 'https://styls.pages.dev' , icon:`material-symbols:globe` }
])
</script>

<template>
  <StracturesFlex class="justify-center justify-items-center gap-x-1">
    <a v-for="(link,index) in linkList" :key="index"
       :class="configureStore.themes[configureStore.themeNum].links"
       :aria-label="link.name"
       class="block p-1  hover:bg-white hover:text-black   bg-opacity-10 rounded-xl hover:scale-110 transition duration-500 ease-in" :href="link.href" target="_blank">
      <Icon width="20px"  :icon="link.icon"/>
    </a>
  </StracturesFlex>
</template>

<style scoped>

</style>