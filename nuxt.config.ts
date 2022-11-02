// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        link: [
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: true
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100&display=swap",
            },
        ],
    },
})
