<script setup>
import StracturesFlex from "../components/StracturesFlex.vue";import emailjs from '@emailjs/browser';import {ref} from "vue";import {useConfigureStore} from "../stores/configure.js";
const info = ref([{type: "text",label: "name", id: "username", placeholder: "example123"}, {type: "email", label: "email", id:"email", placeholder:"example@hotmail.net"},])
const configureStore = useConfigureStore();
const form = ref();
const sentMail = () => {
  emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.value, {publicKey:import.meta.env.VITE_EMAIL_KEY})
      .then(
      () => {
        alert("Mail was sent successfully");
        location.reload();
      },
      (error) => {
        console.log('Failed to sent message... Please Contact me through stylsbot@gmail.com', error.text);
      },
      );
};
</script>

<template>
  <div>
    <StracturesFlex :column="true" justify="center" items="center" class="mt-8 max-md:pb-16 space-y-10">
      <h1 :class="[configureStore.themes[configureStore.themeNum].about, configureStore.trans]" class="text-center md:text-5xl max-md:text-3xl font-bold justify-self-start fadeIn">{{$t('contact.title')}}</h1>
      <form ref="form" :class="[configureStore.themes[configureStore.themeNum].frame, configureStore.themes[configureStore.themeNum].about,configureStore.themes[configureStore.themeNum].text,configureStore.trans ]" class=" flex flex-col items-center fadeIn lg:px-20 mt-8 font-bold" @submit.prevent="sentMail()">
        <label class="block text-2xl max-[300px]:text-base min-[2000px]:text-3xl  max-sm:text-lg p-5 text-center" v-for="(item,key) in info" :key="key"  :for="item.id"> {{ (key===0) ? $t('contact.name') : $t('contact.email') }}:
          <input :name="item.label" class="ml-2 outline-3 rounded-2xl outline-none p-1.5 font-normal text-black sm:text-base md:text-lg lg:text-xl min-[2000px]:text-xl max-md:w-40" :type="item.type" :placeholder="item.placeholder"/></label>
        <label class="block capitalize text-2xl min-[2000px]:text-3xl max-[300px]:text-base max-sm:text-lg p-5" for="issue">{{ $t("contact.issue") }}:</label>
        <textarea name="message" id="issue" class="ml-2 h-[200px] w-auto  outline-3 outline-none rounded-2xl capitalize p-1.5 font-normal w-80 text-black sm:text-base md:text-lg lg:text-xl min-[2000px]:text-xl" ></textarea>
        <button  type="submit" :class="[configureStore.themes[configureStore.themeNum].btn,configureStore.trans]" class="block my-8 border-2 py-1 px-6  text-lg rounded-2xl r">{{$t("contact.submit")}}</button>
      </form>
    </StracturesFlex>
  </div>
</template>

<style scoped>

</style>