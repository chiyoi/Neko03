import { z } from 'zod'

export const Page = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  date_created: z.date({ coerce: true }),
  avatar: z.object({
    src: z.string(),
    blurhash: z.string(),
  }),
})

export type Page = z.infer<typeof Page>
