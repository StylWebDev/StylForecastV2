import {defineStore} from "pinia";
import {ref} from "vue";

export const useConfigureStore = defineStore('configure', () => {
    const themes = ref([{
        text_trans: "text-neutral-100 hover:text-yellow-400",
        btn:" border-neutral-100  nav-item text-white hover:shadow-full hover:shadow-rose-700  hover:bg-rose-600 hover:border-neutral-100 hover:text-neutral-100 align-middle",
        icon: "mdi:star-shooting",
        brand: 'text-yellow-400',
        selected : 'shadow-rose-500 text-shadow-sm text-rose-600',
        frame: 'border-2 border-white border-opacity-40 rounded-2xl bg-neutral-900 bg-opacity-20',
        text: 'text-neutral-100',
        searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
        backgroundColor: "linear-gradient(#373555,#373555,#534C6C,#615878)",
        about: 'text-yellow-400',
        foregroundColor: "bg-transparent",
        charts: "md:w-[380px] lg:w-[380px] sm:w-[400px] xl:w-[350px] 2xl:w-[400px] max-sm:w-[330px] max-[350px]:w-[260px] min-[2000px]:w-[450px]",
        searchBtn: "text-rose-500 font-normal disabled:animate-none disabled:text-white animate-bounce hover:brightness-150"
    },
        {
            text_trans: "text-neutral-100 hover:text-yellow-400",
            btn:" border-white nav-item text-white hover:shadow-full hover:shadow-fuchsia-500 hover:bg-fuchsia-500 hover:border-neutral-100 hover:text-neutral-100 align-middle",
            icon: "mdi:star-shooting",
            brand: 'text-yellow-400',
            selected : 'shadow-rose-500 text-shadow-sm text-rose-600',
            frame: 'border-2 border-white border-opacity-80 rounded-2xl bg-neutral-900 bg-opacity-20',
            text: 'text-neutral-100',
            searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
            backgroundColor: "linear-gradient(#D8EEEE,#8FC9D7,#8FC9D7,#23789D)",
            about: 'text-yellow-400',
            foregroundColor: "bg-transparent",
            charts: "md:w-[380px] lg:w-[380px] sm:w-[400px] xl:w-[350px] 2xl:w-[400px] max-sm:w-[330px] max-[350px]:w-[260px] min-[2000px]:w-[450px]",
            searchBtn: "text-violet-500 font-normal disabled:animate-none disabled:text-white animate-bounce hover:brightness-150"
        }
    ]);

    const trans = ref("transition ease-linear duration-300 delay-100");

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

    const open = ref(1);

    const selectedCity = ref(`Find Your Area`)


    return { themes, trans,  icons, iconsArr, daysArr,open,themeNum, selectedCity}
})
