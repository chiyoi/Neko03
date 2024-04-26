import { error } from 'itty-router'

import { Env } from '@/functions/common/env'

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const { assets } = env
  const item = await assets.get('Icons/neko03.png')
  if (item === null) return error(404)
  const headers = new Headers()
  item.writeHttpMetadata(headers)
  return new Response(item.body, { headers })
}
