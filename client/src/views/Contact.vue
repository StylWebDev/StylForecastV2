<script setup>
import StracturesFlex from "../components/StracturesFlex.vue";import emailjs from '@emailjs/browser';import {ref} from "vue";import {useConfigureStore} from "../stores/configure.js";
const info = ref([{type: "text",label: "name", id: "username", placeholder: "example123"}, {type: "email", label: "email", id:"email", placeholder:"example@hotmail.net"},])
const configureStore = useConfigureStore();
const form = ref();

const sentMail = () => {
  emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.value, {publicKey:import.meta.env.VITE_EMAIL_KEY})
      .then(
          () => {
            configureStore.showToast= true;
            configureStore.toastMsg = "Message Sent Successful"
          },
          (error) => {
            configureStore.showToast= true;
            configureStore.toastMsg = "503 SMTP Error! Please Contact me through stylsbot@gmail.com"
          },
      );
};
</script>

<template>
  <div>
    <StracturesFlex :column="true" justify="center" items="center" class="space-y-10 sm:mt-10 ">
      <form ref="form"
            :class="[
                configureStore.themes[configureStore.themeNum].frame,
                configureStore.themes[configureStore.themeNum].about,
                configureStore.themes[configureStore.themeNum].text,
                configureStore.trans
            ]"
            class=" flex flex-col items-center lg:px-20 pt-8 font-bold max-sm:w-screen sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%]" @submit.prevent="sentMail()">
        <h1 :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]" class="mb-4 text-center md:text-5xl max-md:text-2xl font-bold justify-self-start">{{$t('contact.title')}}</h1>

        <div class="relative mt-2 z-0 max-sm:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[60%] xl:w-[60%] 2xl:w-[50%] mb-5 group" v-for="(item,key) in info" :key="key">
          <input :type="item.type" :id="item.label" :name="item.label" class="block py-2.5 px-0 w-full text-sm text-yellow-400 bg-transparent border-0 border-b-2 border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " required />
          <label for="item.name" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            {{ (key===0) ? $t('contact.name') : $t('contact.email') }}:
          </label>
        </div>
        <div class="relative z-0 max-sm:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[60%] xl:w-[60%] 2xl:w-[50%] mb-5 group">
          <label for="message" class="block mb-2 text-sm  text-white font-semibold">{{$t('contact.issue')}}</label>
          <textarea name="message" id="message" rows="4" class="block p-2.5 w-full h-[200px] text-sm text-yellow-400 bg-neutral-900/60 rounded-sm border border-gray-300 focus:ring-yellow-400 focus:border-yellow-400" :placeholder="($i18n.locale===`el`) ? `Περιέγραψε Το Πρόβλημα σου...` : `Type Your Comment...`"></textarea>
        </div>
        <button  type="submit" :class="[configureStore.themes[configureStore.themeNum].viewBtn,configureStore.trans]"
                 class="block my-4 border-2 py-1 px-6 rounded-md r">{{$t("contact.submit")}}</button>
      </form>
    </StracturesFlex>
  </div>
</template>