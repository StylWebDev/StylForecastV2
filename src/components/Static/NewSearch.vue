<script setup>
import {ref, computed, watch} from 'vue'
import cities from "@/composables/cities.json"
import {Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, TransitionRoot,} from '@headlessui/vue'
import {Icon} from "@iconify/vue";
import {useConfigureStore} from "@/stores/configure.js";


let query = ref('')
const pushCity = ref();
const configureStore = useConfigureStore()
const selected = ref(`Type Your Area`)

let filteredCities = computed(() =>
    query.value === ''
        ? cities
        : cities.filter((city) =>   (city.en.toLowerCase().includes(query.value.toLowerCase()))
            ? city.en.toLowerCase().includes(query.value.toLowerCase())
            : city.gr.toLowerCase().includes(query.value.toLowerCase())
        )
)

const target = ref(null)

watch(selected, (newVal) => {
  if (newVal ===``) return ;
  else {
    pushCity.value = cities.filter(city => {
      return (city.en.toLowerCase().includes(newVal.toLowerCase()) || city.gr.toLowerCase().includes(newVal.toLowerCase()))
    }
    );
    if (pushCity.value.length > 0) {
      location.replace(`/weather/${pushCity.value[0].en}`);
    }
  }
})

</script>

<template>
    <div class="top-16 w-64 max-sm:w-40 max-xl:w-auto max-[300px]:w-32" @click="(selected===`Type Your Area`) ? selected=`` : null" >
      <Combobox v-model="selected" ref="target">
        <div class="relative mt-1">
          <div
              class="relative w-full cursor-default overflow-hidden rounded-full bg-white text-left shadow-md sm:text-sm"
          >
            <ComboboxInput
                class="bg-white w-full border-none py-2 pl-3  pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-0"
                @change="query = $event.target.value"/>
            <ComboboxButton
                class="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <Icon icon="material-symbols:arrow-drop-down"
                    class="text-black inline size-6 -rotate-180 hover:rotate-0 transition duration-1000 ease-out active:rotate-0" />
            </ComboboxButton>
          </div>
          <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" @after-leave="query = ''">
            <ComboboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              <div v-if="filteredCities.length === 0 && query !== ''" class="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
              <ComboboxOption v-for="city in filteredCities" as="template" :key="city.id" :value="($i18n.locale === `en`) ? city.en : city.gr" v-slot="{ selected, active }">
                <li class="relative cursor-default select-none py-2 pl-10 max-sm:pl-0 max-sm:text-sm pr-4" :class="[{'bg-eggplant-500 text-yellow-400': active && configureStore.themeNum===0, 'bg-weather-600 text-neutral-900': active && configureStore.themeNum===1,'text-black': !active, }, configureStore.trans]">
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  <Icon class="inline" icon="clarity:bank-line" /> {{($i18n.locale === `en`) ? city.en.split(' ')[0] : city.gr}}
                </span>
                  <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3" :class="{ 'text-white': active, 'text-teal-600': !active }">
                </span>
                </li>
              </ComboboxOption>
            </ComboboxOptions>
          </TransitionRoot>
        </div>
      </Combobox>
    </div>
</template>

