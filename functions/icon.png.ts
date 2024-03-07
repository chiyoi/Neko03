import { error } from 'itty-router'
import { Env } from '@/functions/internal/env'

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const { assets } = env
  const item = await assets.get('Icons/op1.png')
  if (item === null) return error(404)
  const headers = new Headers()
  item.writeHttpMetadata(headers)
  return new Response(item.body, { headers })
}
