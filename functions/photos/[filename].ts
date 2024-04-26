import { error } from 'itty-router'

import { Env } from '@/functions/common/env'

export const onRequest: PagesFunction<Env> = async ({ env, params }) => {
  const { filename } = params
  const { assets } = env
  if (typeof filename !== 'string') return error(400, 'Malformed filename.')
  if (assets === undefined) return error(500, 'Bucket not exist.')
  const key = ['Photos', decodeURIComponent(filename)].join('/')
  const item = await assets.get(key)
  if (item === null) return error(404)
  const headers = new Headers()
  item.writeHttpMetadata(headers)
  return new Response(item.body, { headers })
}
