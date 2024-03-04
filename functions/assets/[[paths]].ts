import { error, json } from 'itty-router'
import { Env } from '@/app/env'

export const onRequest: PagesFunction<Env> = async ({ env, params }) => {
  const { paths } = params
  if (typeof paths !== 'object') return error(400)
  const key = paths.map(p => decodeURIComponent(p)).join('/')
  const item = await env.assets.get(key)
  if (item !== null) {
    const headers = new Headers()
    item.writeHttpMetadata(headers)
    return new Response(item.body, { headers })
  }
  const prefix = key
  const { objects } = await env.assets.list({ prefix })
  if (objects.length === 0) return error(404)
  const list = objects.map(({ key }) => key.slice(prefix.length + 1))
  return json(list)
}
