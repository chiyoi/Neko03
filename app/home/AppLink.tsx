import Link from 'next/link'
import { styled } from '@stitches/react'
import { Avatar, Flex, Text, Link as LinkText, Tooltip } from '@radix-ui/themes'
import { Blurhash } from 'react-blurhash'

import { Page } from '@/functions/common/page'

export default ({ title, description, href, avatar }: Page) => (
  <Tooltip side='bottom' content={description}>
    <LinkText asChild>
      <Link href={href} style={{ margin: 'auto' }}>
        <AppLinkFlex m='auto' p='3' gap='2' direction='column' justify='center' align='center'>
          <Avatar size='5' src={avatar.src} style={{
            overflow: 'hidden',
          }} fallback={
            <Blurhash width='100%' height='100%' resolutionX={32} resolutionY={32} hash={
              avatar.blurhash
            } />
          } />
          <Text as='div' wrap='nowrap'>{title}</Text>
        </AppLinkFlex>
      </Link>
    </LinkText>
  </Tooltip>
)

const AppLinkFlex = styled(Flex, {
  '&:hover': {
    backgroundColor: 'var(--accent-4)',
    borderRadius: 'var(--radius-4)',
  }
})
