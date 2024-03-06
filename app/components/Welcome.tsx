'use client'
import { Avatar, Box, Flex, Heading, Text } from '@radix-ui/themes'
import { moe } from '@neko03/general/moe'
import PhotoWall from '@/app/components/PhotoWall'
import { Blurhash } from 'react-blurhash'
import { FontHachiMaruPop } from '@/app/internal/fonts'
import ClickToStart from '@/app/components/ClickToStart'

export default ({ setWelcome }: { setWelcome: (_: boolean) => void }) => (
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
        <Avatar src={'/storage/Photos/cat_girl__cute__loli_1231998692.640x320.png'} radius='none' style={{
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
