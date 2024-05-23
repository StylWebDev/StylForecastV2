<script setup>

import {Icon} from "@iconify/vue";
import {useConfigureStore} from "@/stores/configure.js";
const configureStore = useConfigureStore()
const {themes,trans} = useConfigureStore();
</script>

<template>
  <button type="button" @click="configureStore.open=!configureStore.open" :title="$t('nav.menu')">
    <Icon v-if="configureStore.open" class="text-yellow-400" width="30" :icon="  `line-md:menu-to-close-alt-transition`"
          :class="[themes[configureStore.themeNum].text_trans,trans]"
    />
    <Icon v-else width="30" :icon="`line-md:close-to-menu-alt-transition`"
          :class="[themes[configureStore.themeNum].text_trans,trans]"/>
  </button>
</template>

<style scoped>

</style>