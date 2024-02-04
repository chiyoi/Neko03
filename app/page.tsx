'use client'
import { useState } from 'react'
import { Avatar, Box, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import AppLink from '@/app/components/AppLink'
import { AppLinkProps } from '@/app/internal/props'
import Nekos from '@/app/components/Nekos'
import { Blurhash } from 'react-blurhash'
import { moe } from '@/app/internal/moe'
import { FontHachiMaruPop } from '@/app/internal/fonts'
import ClickToStart from '@/app/components/ClickToStart'

export default () => {
  const [welcome, setWelcome] = useState(true)
  if (welcome) return (
    <>
      <Nekos />
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
          <Avatar src={'/assets/cat_girl__cute__loli_1231998692.png'} radius='none' style={{
            width: 320,
            height: 160,
            overflow: 'hidden',
            maskImage: 'linear-gradient(transparent, black, transparent)',
            WebkitMaskImage: 'linear-gradient(transparent, black, transparent)',
          }} fallback={(
            <Blurhash width='100%' height='100%' resolutionX={32} resolutionY={32} hash={
              'e5L;5Uns4X1Z8@%Q%eNCrHRP06yC_2VXxn{gITPB0fnPDSxSDjfm9F' // cspell: disable-line
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
    <Grid mt='9' mx='5' width='auto' columns='5' gap='5'>
      {apps.map(app => (
        <AppLink key={app.href} {...app} />
      ))}
    </Grid>
  )
}

const apps: AppLinkProps[] = [
  {
    title: 'LaTex',
    description: 'Render LaTeX on type.',
    href: 'https://latex.neko03.moe',
    avatar: {
      src: 'https://latex.neko03.moe/favicon.ico',
      blurhash: 'eKN0e#DjI.9Z4.XSMxRPD%Mx.TIU-BWBoJxvWAIU-;S5XSayITMy%2', // cspell: disable-line
    },
  },
  {
    title: 'Neko',
    description: 'Discord assistant.',
    href: 'https://neko.neko03.moe',
    avatar: {
      src: 'https://neko.neko03.moe/assets/Icon.png',
      blurhash: 'eSP6N:Wa.l%L?tD~M{.7NGt7-oa$$ewcMz-=xaMfbbMxXUWUWCM{%M', // cspell: disable-line
    },
  },
  {
    title: 'Game of Life',
    description: "Conway's Game of Life.",
    href: 'https://game-of-life.neko03.moe',
    avatar: {
      src: 'https://game-of-life.neko03.moe/favicon.ico',
      blurhash: 'eKJ8nuM^Ff*0O9-:kq9aELxa-.VF%M%3wJx]%Lt6nORP~pNbtSs.NH', // cspell: disable-line
    },
  },
]
