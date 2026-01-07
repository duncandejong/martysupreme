// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    devtools: {
        enabled: process.env.NUXT_SITE_ENV === "development",
        timeline: {
            enabled: true,
        },
    },
    ssr: true,
    site: {
        url: process.env.NUXT_SITE_URL || 'https://martysupreme.nl',
        name: "Marty Supreme | Officiele website | 19 februari",
        exclude: ["/404"],
        description: "Marty Mauser (Timothée Chalamet) is een slimme maar eigenwijze jongen met een droom waar niemand in gelooft. In zijn zoektocht naar succes gaat hij tot het uiterste en belandt in een wereld vol verleiding, risico’s en uitdagingen. Terwijl hij alles op alles zet om zijn droom waar te maken, ontdekt hij hoe hoog de prijs van succes echt is.",
        defaultLocale: "nl",
    },
    image: {
        //     provider: "static",
    },
    app: {
        head: {
            charset: "utf-8",
            htmlAttrs: {lang: 'nl'},
            viewport: "width=device-width, initial-scale=1",
            templateParams: {
                separator: '|'
                // other common separators: '·', '—', '•'
            },
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "96x96",
                    href: "/favicon/favicon-96x96.png",
                },
                {
                    rel: "icon",
                    type: "image/svg+xml",
                    href: "/favicon/favicon.svg",
                },
                {
                    rel: "shortcut icon",
                    href: "/favicon.ico",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/favicon/apple-touch-icon.png",
                },
                {
                    rel: "manifest",
                    href: "/favicon/site.webmanifest",
                },
            ],
            meta: [
                {
                    name: "theme-color",
                    content: "#020204",
                },
                {
                    name: "msapplication-TileColor",
                    content: "#020204",
                },
            ],
        },
    },
    css: ["@/assets/css/main.css", "vue-final-modal/style.css"],
    googleFonts: {
        // download: true,
        // outputDir: this.options.dir.assets + "/fonts",
        families: {
            // "Barlow": [400, 700, 800],
            "Barlow+Condensed": {
                wght: [300, 400, 600, 700, 800],
            },
            "Caladea": {
                wght: [400, 700],
                // ital: [400, 900],
            },
        },
        display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional',
    },
    modules: [
        // "@nuxt/image""
        "@nuxt/icon",
        "@nuxtjs/google-fonts",
        "@vueuse/nuxt",
        "nuxt-svgo",
        // "@dargmuesli/nuxt-cookie-control",
        "@pinia/nuxt",
        "@nuxt/image",
        "@nuxtjs/seo"],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    runtimeConfig: {
        // Keys within public, will be also exposed to the client-side
        public: {
            siteUrl: "https://martysupreme.nl",
            siteTitle: "Marty Supreme | Officiele website | 19 februari",
            googleTagManagerId: "GTM-TKWPKSCS",
            movieTitle: "Marty Supreme",
            mooveeApiKey: process.env.NUXT_PUBLIC_MOOVEE_API_KEY ?? 'MV-AAU3E4GQFEW4',
            cookiebotId: "de69a9ce-2411-4c5d-b7be-328db031cfba",
            cookiescriptId: "",
        },
    },
    svgo: {
        defaultImport: "component",
        autoImportPath: "./assets/images/svg/",
    },
    compatibilityDate: "2026-01-06",
});
