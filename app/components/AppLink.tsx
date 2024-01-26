import { Avatar, Flex, Link, Text } from '@radix-ui/themes'
import { Blurhash } from 'react-blurhash'
import { FontNotoSansMono } from '@/app/internal/fonts'
import { AppLinkProps } from '@/app/internal/props'
import { styled } from '@stitches/react'

export default ({ avatar, title, href }: AppLinkProps) => (
  <Link m='auto' href={href}>
    <AppLinkFlex p='3' width='max-content' gap='2' direction='column' justify='center' align='center'>
      <Avatar size='5' src={avatar.src} style={{
        overflow: 'hidden',
      }} fallback={(
        <Blurhash
          hash={avatar.blurhash}
          width='100%'
          height='100%'
          resolutionX={32}
          resolutionY={32}
        />
      )} />
      <Text style={{ ...FontNotoSansMono }}>{title}</Text>
    </AppLinkFlex>
  </Link>
)

const AppLinkFlex = styled(Flex, {
  '&:hover': {
    backgroundColor: 'var(--accent-4)',
    borderRadius: 'var(--radius-4)',
  }
})
