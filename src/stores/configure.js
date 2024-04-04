import {defineStore} from "pinia";
import {ref} from "vue";

export const useConfigureStore = defineStore('configure', () => {
    const themes = ref([{
        text_trans: "text-neutral-100 hover:shadow-rose-700 hover:text-rose-700",
        btn:" border-neutral-100  nav-item text-white hover:shadow-full hover:shadow-rose-700  hover:bg-rose-600 hover:border-neutral-100 hover:text-neutral-100 align-middle",
        icon: "mdi:star-shooting",
        brand: 'text-yellow-400',
        selected : 'shadow-rose-500 text-shadow-sm text-rose-600',
        frame: 'border-2 border-white border-opacity-40 rounded-2xl bg-neutral-900 bg-opacity-20',
        text: 'text-neutral-100',
        searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
        backgroundColor: "linear-gradient(#422680,#341671,#280659,#660F56,#AE2D68)",
        about: 'text-yellow-400',
        foregroundColor: "bg-transparent",
        charts: "md:w-[400px] lg:w-[480px] sm:w-[600px]   xl:w-[650px] 2xl:w-[520px] max-md:w-screen  min-[2000px]:w-[650px]",
        searchBtn: "text-rose-500 font-normal disabled:animate-none disabled:text-white animate-bounce hover:brightness-150"
    },
        {
            text_trans: "text-neutral-100 hover:shadow-violet-800 hover:text-fuchsia-500",
            btn:" border-white nav-item text-white hover:shadow-full hover:shadow-fuchsia-500 hover:bg-fuchsia-500 hover:border-neutral-100 hover:text-neutral-100 align-middle",
            icon: "mdi:star-shooting",
            brand: 'text-yellow-400',
            selected : 'shadow-rose-500 text-shadow-sm text-rose-600',
            frame: 'border-2 border-white border-opacity-40 rounded-2xl bg-neutral-900 bg-opacity-10',
            text: 'text-neutral-100',
            searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
            backgroundColor: "linear-gradient(#EAAC8B,#E88C7D,#E56B6F,#B56576,#6D597A)",
            about: 'text-purple-700',
            foregroundColor: "bg-transparent",
            charts: "md:w-[400px] lg:w-[480px] sm:w-[600px]   xl:w-[650px] 2xl:w-[520px] max-md:w-screen  min-[2000px]:w-[650px]",
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


    return { themes, trans,  icons, iconsArr, daysArr,open,themeNum}
})
