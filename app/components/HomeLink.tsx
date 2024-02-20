import Link from 'next/link'
import { Avatar, Flex, Heading, IconButton, Text } from '@radix-ui/themes'
import { Blurhash } from 'react-blurhash'
import { FontHachiMaruPop } from '../internal/fonts'
import { styled } from '@stitches/react'
import { moe } from '@neko03/general/moe'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default ({ title, href, avatar }: Props) => (
  <Flex gap='3' align='center' style={{
    position: 'fixed',
    left: 5,
    top: 5,
  }}>
    <Link href={href} style={{ textDecoration: 'none' }}>
      <HomeLinkFlex m='auto' p='1' gap='3' justify='center' align='center' style={{
        borderRadius: 5,
      }}>
        <Avatar src={avatar.src} radius='none' style={{
          width: 80,
          height: 40,
          overflow: 'hidden',
          maskImage: 'linear-gradient(transparent, black, transparent)',
          WebkitMaskImage: 'linear-gradient(transparent, black, transparent)',
        }} fallback={(
          <Blurhash width='100%' height='100%' resolutionX={32} resolutionY={32} hash={
            avatar.blurhash
          } />
        )} />
        <Heading>
          {moe(title).map((c, i) => (
            <Text key={i} size={c.char === '★' ? '1' : '6'} style={{
              ...FontHachiMaruPop,
              color: `var(--${c.color}-a8)`,
            }}>
              {c.char}
            </Text>
          ))}
        </Heading>
      </HomeLinkFlex>
    </Link>
    <Link href='https://github.com/chiyoi'>
      <IconButton radius='full' variant='soft'>
        <GitHubLogoIcon />
      </IconButton>
    </Link>
  </Flex>
)

const HomeLinkFlex = styled(Flex, {
  backgroundColor: 'var(--accent-a3)',
  '&:hover': {
    backgroundColor: 'var(--accent-a4)',
  },
  '&:active': {
    backgroundColor: 'var(--accent-a5)',
  },
})

type Props = {
  title: string,
  href: string,
  avatar: {
    src: string,
    blurhash: string,
  },
}
