import { error } from 'itty-router'
import { Env } from '@/functions/internal/env'

export const onRequest: PagesFunction<Env> = async ({ env, params }) => {
  const { filename } = params
  const { assets } = env
  if (typeof filename !== 'string') return error(400, 'Malformed filename.')
  if (assets === undefined) return error(500, 'Bucket not exist.')
  const key = ['Icons', decodeURIComponent(filename)].join('/')
  const item = await assets.get(key)
  if (item === null) return error(404)
  const headers = new Headers()
  item.writeHttpMetadata(headers)
  return new Response(item.body, { headers })
}
