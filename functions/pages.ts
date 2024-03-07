import { json } from 'itty-router'
import { Env } from '@/functions/internal/env'
import { z } from 'zod'

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const prefix = 'Neko03/Pages/'
  const { assets } = env
  const { objects } = await assets.list({ prefix })
  const list = await Promise.all(objects.map(async ({ key }) => {
    const item = await assets.get(key)
    return Page.parse(await item!.json())
  }))
  return json(list)
}

const Page = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  avatar: z.object({
    src: z.string(),
    blurhash: z.string(),
  }),
})
