import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {useI18n} from "vue-i18n";
import cities from "@/composables/cities.json";

export const useConfigureStore = defineStore('configure', () => {
    const {t, locale} = useI18n()

    const themes = ref([{
        text_trans: "text-neutral-100 hover:text-yellow-400",
        icon: "mdi:star-shooting",
        btn:" border-neutral-100  nav-item text-white hover:shadow-full hover:shadow-rose-700  hover:bg-rose-600 hover:border-neutral-100 hover:text-neutral-100 align-middle",
        frame: 'border-2 max-sm:border-0 border-eggplant-200/80 sm:rounded-md bg-eggplant-950/70 z-30',
        frameWeek: `border-2 border-eggplant-200/80 rounded-xl bg-eggplant-950/70 z-30`,
        viewBtn: `bg-eggplant-900 px-4 py-0.5 rounded-lg text-neutral-50`,
        text: 'text-neutral-100',
        searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
        backgroundColor: "linear-gradient(#373555,#373555,#534C6C,#615878)",
        about: 'text-yellow-400',
        charts: "md:w-[380px] lg:w-[380px] sm:w-[400px] xl:w-[350px] 2xl:w-[400px] max-sm:w-[330px] max-sm:w-[300px] max-[500px]:w-[400px] max-[400px]:w-[350px] max-[600px]:w-[500px] max-[350px]:w-[250px] min-[2000px]:w-[450px]",
        headerFooterBgColor: `bg-eggplant-950`,
        menuBgColor: `bg-eggplant-500 `,
        regionsHoverBgColor: `hover:bg-eggplant-100`,
    },
        {
            text_trans: "text-neutral-100 hover:text-yellow-400",
            icon: "mdi:star-shooting",
            btn:" border-neutral-100  nav-item text-white hover:shadow-full hover:shadow-rose-700  hover:bg-rose-600 hover:border-neutral-100 hover:text-neutral-100 align-middle",
            frame: 'border-2 max-sm:border-0 border-weather-500/80 sm:rounded-md bg-weather-950/80 z-30',
            frameWeek: 'border-2 border-weather-500/80 rounded-xl bg-weather-950/60 z-30',
            viewBtn: `bg-weather-950 text-white px-4 py-0.5 rounded-lg`,
            text: 'text-neutral-100',
            searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
            backgroundColor: "linear-gradient(#23789D,#8FC9D7)",
            about: 'text-weather-100',
            charts: "md:w-[380px] lg:w-[380px] sm:w-[400px] xl:w-[350px] 2xl:w-[400px] max-sm:w-[330px] max-sm:w-[300px] max-[500px]:w-[400px] max-[400px]:w-[350px] max-[600px]:w-[500px] max-[350px]:w-[250px] min-[2000px]:w-[450px]",
            headerFooterBgColor: `bg-weather-950`,
            menuBgColor: `bg-weather-800 brightness-75`,
            regionsHoverBgColor: `hover:bg-weather-500`,
        }
    ]);

    const trans = ref("transition ease-linear duration-300 delay-100");

    const showRegions = ref(false);

    const daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const  icons = ref({
        "clear-day": "meteocons:clear-day-fill",
        "showers-day": "meteocons:rain-fill",
        "thunder-showers-day": "meteocons:thunderstorms-fill",
        "hail-day": "meteocons:hail-fill",
        "snow-showers-day": "meteocons:overcast-snow-fill",
        "partly-cloudy-day": "meteocons:partly-cloudy-day-fill",
        "clear-night": "meteocons:starry-night-fill",
        "showers-night": "meteocons:extreme-rain-fill",
        "snow-showers-night": "meteocons:extreme-snow-fill",
        "thunder-showers-night": "meteocons:thunderstorms-extreme-fill",
        "thunder-rain": "meteocons:thunderstorms-fill",
        "night-hail":"meteocons:extreme-hail-fill",
        "partly-cloudy-night": "meteocons:extreme-night-fill",
        "wind": "meteocons:wind",
        "windsock": "meteocons:windsock",
        "cold": "meteocons:thermometer-colder",
        "fog": "meteocons:fog",
        "pollen-tree": "meteocons:pollen-tree",
        "pollen-flower": "meteocons:pollen-flower-fill",
        "pollen-grass": "meteocons:pollen-grass-fill",
        "cloudy": "meteocons:extreme-fill",
        "snow": "meteocons:snowflake-fill",
        "rain": "meteocons:raindrops-fill",
        "percip" : "meteocons:raindrops",
        sunrise: "meteocons:sunrise-fill",
        moonrise: "meteocons:moonrise-fill",
        stars: "meteocons:star-fill",
        danger: "meteocons:code-orange-fill",
        rocket: "emojione-v1:rocket",
        linkedin: "line-md:linkedin",
        earth: "material-symbols:globe",
        github: "line-md:github-loop",
        termometer: "meteocons:thermometer",
        humidity: "meteocons:humidity-fill",
        dust: "meteocons:dust",
        hot: "meteocons:thermometer-warmer",
        preassurehot: "meteocons:pressure-high-fill",
        preassurelow: "meteocons:pressure-low-fill",
        en: "cif:gb",
        el: "cif:gr"
    });

    const iconsArr = ref(["meteocons:clear-day-fill","meteocons:cloudy-fill","meteocons:snowflake-fill","meteocons:raindrops-fill","meteocons:thunderstorms-extreme-fill","meteocons:starry-night-fill"]);

    const themeNum = ref(1)

    const open = ref(false);

    const selectedCity = ref()

    const active = ref(false)

    const pushCity = ref('');

    watch(selectedCity, (newVal) => {
        if (newVal !==``)  {
            pushCity.value = cities.filter(city => {
                    return (city.en.toLowerCase().includes(newVal.toLowerCase()) || city.gr.toLowerCase().includes(newVal.toLowerCase()))
                }
            );
            if (pushCity.value.length > 0) {
                location.replace(`/weather/${pushCity.value[0].en}`);
            }
        }
    })

    const checkLang = () => {
        if (localStorage.getItem('lang')) locale.value = localStorage.getItem('lang');
        if ( navigator.language.includes('el')) {
            locale.value = 'el';
            localStorage.setItem('lang', 'el');
        } else localStorage.setItem('lang', 'en')
        selectedCity.value = t('daily.search')
    }

    return { themes, trans,  icons, iconsArr, daysArr,open,themeNum, selectedCity, showRegions, active, checkLang}
})
