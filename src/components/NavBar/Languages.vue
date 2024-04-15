<script setup>
import {useConfigureStore} from "../../stores/configure.js";
import {Icon} from "@iconify/vue";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
const configureStore = useConfigureStore()
</script>

<template>
  <div>
    <Menu>
      <MenuButton :class="[configureStore.themes[configureStore.themeNum].about ,configureStore.trans]" class="hover:brightness-150 active:brightness-200 hover:scale-110 uppercase"> <Icon width="25px" class="rounded-2xl inline" icon="solar:earth-bold-duotone"/> {{$i18n.locale}}</MenuButton>
        <MenuItems class="bg-neutral-800 bg-opacity-40 border-2 border-neutral-100 border-opacity-20 rounded py-1 pb-1  px-2 mt-7">
          <MenuItem as="a1" v-for="locale in $i18n.availableLocales" class="bg-transparent mt-4 rounded-2xl block text-center  divide-y-2 divide-neutral-50">
            <button type="button"
                :title="($i18n.locale===`en`) ? `Language` : `Γλώσσα`"
                @click="[$i18n.locale=locale,configureStore.lang=locale]"
                :class="configureStore.trans"
                class="block hover:brightness-150">
              <Icon class="inline" width="35px" :icon="configureStore.icons[`${locale}`]"/>{{(locale==="el" ? `Ελληνικά` : `English`)}}
            </button>
          </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>

<style scoped>

</style>