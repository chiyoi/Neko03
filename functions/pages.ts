import { json } from 'itty-router'
import { z } from 'zod'

import { Env } from './common/env'

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const prefix = 'Neko03/Pages/'
  const { assets } = env
  const { objects } = await assets.list({ prefix })
  const list = await Promise.all(objects.map(async ({ key }) => {
    const item = await assets.get(key)
    return await item!.json()
  }))
  return json(list)
}
