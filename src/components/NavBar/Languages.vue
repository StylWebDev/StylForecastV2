<script setup>
import {useConfigureStore} from "@/stores/configure.js";
import {Icon} from "@iconify/vue";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
const configureStore = useConfigureStore()
const {themes,icons,trans} = useConfigureStore();
</script>

<template>
  <div class="absolute z-50">
    <Menu>
      <MenuButton :class="[themes[configureStore.themeNum].about, trans]" class="hover:brightness-150 active:brightness-200 hover:scale-110 uppercase">
        <Icon width="25px" class="rounded-2xl inline" icon="solar:earth-bold-duotone"/>
        {{$i18n.locale}}
      </MenuButton>
        <MenuItems class="bg-neutral-800/85 border-2 border-neutral-100 border-opacity-20 rounded py-2 pb-4  px-2 mt-3.5">
          <MenuItem as="a1" v-for="locale in $i18n.availableLocales" class="bg-transparent mt-4 rounded-2xl block text-center  divide-y-2 divide-neutral-50">
            <button type="button"
                :title="(locale=== `en`) ? `English` : `Ελληνικα`"
                @click="$i18n.locale=locale"
                :class="trans"
                class="block hover:brightness-150">
              <Icon class="inline" width="35px" :icon="icons[`${locale}`]"/> {{(locale=== `en`) ? `English` : `Ελληνικα`}}
            </button>
          </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>

<style scoped>

</style>