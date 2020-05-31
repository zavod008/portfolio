import projects from './components/Project/projects'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/portfolio/'
    }
} : {};

module.exports = {
    ...routerBase,
    head: {
        title: 'portfolio',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Press+Start+2P:400:700&display=swap'}
        ]
    },
    css: [
        'normalize.css/normalize.css',
        '~/assets/scss/main.scss'
    ],
    loading: {
        color: '#005aba',
        height: '5px',
    },
    modules: [
        'nuxt-lazy-load',
        '@nuxtjs/svg-sprite',
    ],
    buildModules: [
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: [
            '~/assets/scss/abstract/_module.scss'
        ]
    },
    build: {
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    generate: {
        routes() {
            return projects.map(({id}) => {
                return `/projects/${id}`
            })
        }
    }
}

