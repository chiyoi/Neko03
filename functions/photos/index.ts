import { error, json } from 'itty-router'
import { Env } from '@/functions/internal/env'

export const onRequest: PagesFunction<Env> = async ({ env, params }) => {
  const prefix = 'Photos/'
  const { assets } = env
  if (assets === undefined) return error(500, 'Bucket not exist.')
  const { objects } = await assets.list({ prefix })
  const list = objects.map(({ key }) => key.slice(prefix.length))
  return json(list)
}
