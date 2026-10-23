import { error, text } from 'itty-router'

export default {
    async fetch(request) {
        const url = new URL(request.url)

        if (url.pathname === '/nyan') {
            return text('Nyan!')
        }

        return error(404)
    },
} satisfies ExportedHandler<Env>
