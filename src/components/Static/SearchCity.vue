<script setup>
import {Icon} from "@iconify/vue";
import {useConfigureStore} from "@/stores/configure.js";
import { ref} from "vue";
import cities from "@/composables/cities.json"
import {Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/vue";
import StracturesFlex from "@/components/StracturesFlex.vue";

const configureStore = useConfigureStore();
const citiesObj = ref(cities);

const props = defineProps({
  cityName: {
    type: String,
    required: false,
  }
})

</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="fadeIn">
    <StracturesFlex :row="true" justify="evenly" items="center"
                    class=" text-white max-md:w-screen md:w-[75%] xl:w-[50%] overflow-y-auto z-10">
      <Menu>
        <StracturesFlex :column="true" class="w-[100%]">
          <MenuButton :class="[configureStore.trans]" class="bg-neutral-900 rounded-lg py-2 text-lg hover:text-yellow-400 active:text-yellow-400" ><Icon class="inline" width="30px" icon="clarity:bullet-list-line"/> {{($i18n.locale === `en`) ? `Select Area` : `Επιλέξτε Περιοχή`}} </MenuButton>
          <Transition enter-active-class="fadeInCities" leave-active-class="fadeOutCities">
            <MenuItems class="bg-neutral-800 bg-opacity-95 max-md:bg-opacity-100 py-4 my-10 absolute max-md:w-screen rounded-b-lg md:w-[75%] xl:w-[50%] px-3">
              <StracturesFlex justify="center" items="center" :wrap="true" class="flex flex-col md:flex-row  gap-4 ">
                <MenuItem as="a2" v-for="city in citiesObj" :key="city.id" class="block bg-transparent" v-slot="{ close } ">
                  <button :class="[configureStore.trans]" class="hover:text-yellow-400 space-x-3" type="button" @click="close" :disabled="cityName === city.en">
                    <RouterLink active-class="text-yellow-400 underline decoration-2 decoration-yellow-400 underline-offset-4" :to="`/weather/${city.en}`" class="align-middle w-[100%] h-[100%]"><Icon class="inline" icon="clarity:bank-line" />{{($i18n.locale === `en`) ? city.en.split(' ')[0] : city.gr}}</RouterLink>
                  </button>
                </MenuItem>
              </StracturesFlex>
            </MenuItems>
          </Transition>
        </StracturesFlex>
      </Menu>
    </StracturesFlex>
  </StracturesFlex>
</template>

<style scoped>

</style>