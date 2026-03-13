import Link from 'next/link'
import { Flex, Heading, IconButton, Text } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { styled } from '@stitches/react'

import { FontHachiMaruPop } from '@/app/common/fonts'
import { moe } from '@/app/common/moe'

export default ({ title, href }: Props) => (
  <Flex gap='3' align='center' style={{
    position: 'fixed',
    right: 5,
    top: 5,
  }}>
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
}
