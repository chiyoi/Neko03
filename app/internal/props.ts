import { ReactNode } from 'react'

export type ChildrenProps = {
  children: ReactNode,
}

export type AppLinkProps = {
  title: string,
  description: string,
  href: string,
  avatar: {
    src: string,
    blurhash: string,
  },
}
