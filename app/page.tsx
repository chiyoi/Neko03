'use client'
import { useState } from 'react'
import { Grid } from '@radix-ui/themes'
import AppLink from '@/app/components/AppLink'
import { AppLinkProps } from '@/app/internal/props'
import Welcome from '@/app/components/Welcome'

export default () => {
  const [welcome, setWelcome] = useState(true)
  if (welcome) return (
    <Welcome setWelcome={setWelcome} />
  )
  return (
    <Grid mt='9' mx='5' width='auto' columns='5'>
      {apps.map(app => (
        <AppLink key={app.href} {...app} />
      ))}
    </Grid>
  )
}

const apps: AppLinkProps[] = [
  {
    title: 'Neko03',
    description: 'Neko03 catalog. (You are here.)',
    href: '/',
    avatar: {
      src: 'https://assets.neko03.moe/Icons/op1.png',
      blurhash: 'eFOy9Q.RC8?ty=]P-pO@={=wJ#sBt+i_R+b^RQIpv#vgIVRkH@%Lo_', // cspell: disable-line
    },
  },
  {
    title: 'Render as You Type',
    description: 'Do some rendering as you type.',
    href: 'https://op2.neko03.moe',
    avatar: {
      src: 'https://assets.neko03.moe/Icons/op2.png',
      blurhash: 'eKN0e#DjI.9Z4.XSMxRPD%Mx.TIU-BWBoJxuWAIU-;S5bvWVITMy%1', // cspell: disable-line
    },
  },
  {
    title: 'Assets',
    description: 'Neko03 assets provider.',
    href: 'https://op3.neko03.moe',
    avatar: {
      src: 'https://assets.neko03.moe/Icons/op3.png',
      blurhash: 'eAJacl.90~9$Z#?w-p.959rppx-o-;S5R5^Io}Ip?GIv?wMxn#kp-n', // cspell: disable-line
    },
  },
  {
    title: 'Neko',
    description: 'Discord assistant.',
    href: 'https://op4.neko03.moe',
    avatar: {
      src: 'https://assets.neko03.moe/Icons/op4.png',
      blurhash: 'eSO{%Lb1.l%M?tD~M{.7NGt7-oa$$fwcMz-=xaMfbbMxXUWUWCM{%M', // cspell: disable-line
    },
  },
  {
    title: 'Game of Life',
    description: "Conway's Game of Life.",
    href: 'https://chiyoi.itch.io/game-of-life',
    avatar: {
      src: 'https://assets.neko03.moe/Icons/op5.png',
      blurhash: 'eJJI9MMwFzysSw-:kq9aELxt-oVF%M%MwJx]-pt6i_RP~pNdtSs.NH', // cspell: disable-line
    },
  },
]
