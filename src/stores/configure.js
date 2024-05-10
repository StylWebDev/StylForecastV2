import {defineStore} from "pinia";
import {ref} from "vue";

export const useConfigureStore = defineStore('configure', () => {
    const themes = ref([{
        text_trans: "text-neutral-100 hover:text-yellow-400",
        icon: "mdi:star-shooting",
        btn:" border-neutral-100  nav-item text-white hover:shadow-full hover:shadow-rose-700  hover:bg-rose-600 hover:border-neutral-100 hover:text-neutral-100 align-middle",
        frame: 'border-2 border-white border-opacity-40 rounded-2xl bg-neutral-900 bg-opacity-20',
        text: 'text-neutral-100',
        searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
        backgroundColor: "linear-gradient(#373555,#373555,#534C6C,#615878)",
        about: 'text-yellow-400',
        charts: "md:w-[380px] lg:w-[380px] sm:w-[400px] xl:w-[350px] 2xl:w-[400px] max-sm:w-[330px] max-[350px]:w-[260px] min-[2000px]:w-[450px]",
        headerFooterBgColor: `bg-eggplant-950`,
        menuBgColor: `bg-eggplant-500 `,
        regionsHoverBgColor: `hover:bg-eggplant-100`
    },
        {
            text_trans: "text-neutral-100 hover:text-yellow-400",
            icon: "mdi:star-shooting",
            btn:" border-neutral-100  nav-item text-white hover:shadow-full hover:shadow-rose-700  hover:bg-rose-600 hover:border-neutral-100 hover:text-neutral-100 align-middle",
            frame: 'border-2 border-white border-opacity-80 rounded-2xl bg-neutral-900 bg-opacity-20',
            text: 'text-neutral-100',
            searchbar: 'text-center py-0.5 outline-3 outline-neutral-900 rounded-2xl text-neutral-900 bg-neutral-100 capitalize  font-normal w-auto xl:w-[280px] max-sm:w-[200px] text-neutral-100 sm:text-lg md:text-xl lg:text-lg max-[300px]:w-[200px]',
            backgroundColor: "linear-gradient(#23789D,#8FC9D7,#8FC9D7,#D8EEEE)",
            about: 'text-weather-100',
            charts: "md:w-[380px] lg:w-[380px] sm:w-[400px] xl:w-[350px] 2xl:w-[400px] max-sm:w-[330px] max-[350px]:w-[260px] min-[2000px]:w-[450px]",
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

    const open = ref(1);

    const selectedCity = ref(`Find Your Area`)

    const active = ref(false)


    return { themes, trans,  icons, iconsArr, daysArr,open,themeNum, selectedCity, showRegions, active}
})
