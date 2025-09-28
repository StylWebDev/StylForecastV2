//importing createI18n in order to create internationalization object
import {createI18n} from "vue-i18n";

//fetching locale data from StylForecast-Api
const res1 = await fetch("http://localhost:3032/en");
const res2 = await fetch("http://localhost:3032/el");
const en = await res1.json();
const el = await res2.json();

//Creating and exporting the internationalization object
export const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: {el, en}
})