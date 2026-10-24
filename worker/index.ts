import { Router, text } from 'itty-router'
import { r2 } from './common/utils.ts'

const router = Router()

router.get('/nyan', () => text('Nyan!'))

router.get('/game-of-life/:key?', (request, env: Env) => {
    const { key } = request.params
    const { games } = env
    if (typeof key !== 'string') {
        return Response.redirect(new URL('/game-of-life/index.html', request.url).toString())
    }
    return r2(games, 'game-of-life/' + key)
})

router.get('*', (request, env: Env) => env.ASSETS.fetch(request))

export default { ...router }
