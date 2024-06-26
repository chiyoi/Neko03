import { json } from 'itty-router'

import { Env } from '@/functions/common/env'
import { Page } from '@/functions/common/page'

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const { pages } = env
  const { keys } = await pages.list()
  const list = (await Promise.all(keys.map(async ({ name }) => pages.get(name))))
    .map(item => Page.parse(JSON.parse(item!)))
  return json(list)
}
