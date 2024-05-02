import {createI18n} from "vue-i18n";

const res1 = await fetch("https://stylforecast-api.onrender.com/en");
const res2 = await fetch("https://stylforecast-api.onrender.com/el");
const en = await res1.json();
const el = await res2.json();

export const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: {el, en}
})