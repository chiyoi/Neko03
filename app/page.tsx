'use client'
import { useState } from 'react'
import { Avatar, Box, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { moe } from '@neko03/general/moe'
import AppLink from '@/app/components/AppLink'
import { AppLinkProps } from '@/app/internal/props'
import PhotoWall from '@/app/components/PhotoWall'
import { Blurhash } from 'react-blurhash'
import { FontHachiMaruPop } from '@/app/internal/fonts'
import ClickToStart from '@/app/components/ClickToStart'

export default () => {
  const [welcome, setWelcome] = useState(true)
  if (welcome) return (
    <>
      <PhotoWall />
      <Box onClick={() => setWelcome(false)} style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--accent-2)',
        opacity: 0.8,
      }} />
      <Flex justify='center' align='center' onClick={() => setWelcome(false)} style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
      }}>
        <Flex m='auto' direction='column' gap='3' justify='center' align='center'>
          <Avatar src={'/assets/Photos/cat_girl__cute__loli_1231998692.640x320.png'} radius='none' style={{
            width: 320,
            height: 160,
            overflow: 'hidden',
            maskImage: 'linear-gradient(transparent, black, transparent)',
            WebkitMaskImage: 'linear-gradient(transparent, black, transparent)',
          }} fallback={(
            <Blurhash width='100%' height='100%' resolutionX={32} resolutionY={32} hash={
              'e6L;5Usc8~61DJ%j%LNDraRP06yC^+VXxn{%IUO@0fi{DSxSIBWF9Z' // cspell: disable-line
            } />
          )} />
          <Heading>
            {moe('neko03★moe').map((c, i) => (
              <Text key={i} size={c.char === '★' ? '3' : '9'} style={{
                ...FontHachiMaruPop,
                color: `var(--${c.color}-8)`,
              }}>
                {c.char}
              </Text>
            ))}
          </Heading>
        </Flex>
      </Flex>
      <ClickToStart onClick={() => setWelcome(false)} />
    </>
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
      src: '/assets/Icons/op1.png',
      blurhash: 'eFOy9Q.RC8?ty=]P-pO@={=wJ#sBt+i_R+b^RQIpv#vgIVRkH@%Lo_', // cspell: disable-line
    },
  },
  {
    title: 'Render As You Type',
    description: 'Do some rendering as you type.',
    href: 'https://op2.neko03.moe',
    avatar: {
      src: '/assets/Icons/op2.png',
      blurhash: 'eKN0e#DjI.9Z4.XSMxRPD%Mx.TIU-BWBoJxuWAIU-;S5bvWVITMy%1', // cspell: disable-line
    },
  },
  {
    title: 'Assets',
    description: 'Assets provider.',
    href: 'https://op3.neko03.moe',
    avatar: {
      src: '/assets/Icons/op3.png',
      blurhash: 'eAJacl.90~9$Z#?w-p.959rppx-o-;S5R5^Io}Ip?GIv?wMxn#kp-n', // cspell: disable-line
    },
  },
  {
    title: 'Neko',
    description: 'Discord assistant.',
    href: 'https://op4.neko03.moe',
    avatar: {
      src: '/assets/Icons/op4.png',
      blurhash: 'eSO{%Lb1.l%M?tD~M{.7NGt7-oa$$fwcMz-=xaMfbbMxXUWUWCM{%M', // cspell: disable-line
    },
  },
  {
    title: 'Game of Life',
    description: "Conway's Game of Life.",
    href: 'https://op5.neko03.moe',
    avatar: {
      src: '/assets/Icons/op5.png',
      blurhash: 'eJJI9MMwFzysSw-:kq9aELxt-oVF%M%MwJx]-pt6i_RP~pNdtSs.NH', // cspell: disable-line
    },
  },
]
