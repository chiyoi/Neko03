import { Avatar, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { Blurhash } from 'react-blurhash'
import { AppLinkProps } from '@/app/internal/props'
import { moe } from '@/app/internal/moe'
import { FontHachiMaruPop } from '@/app/internal/fonts'

export default ({ title, href, avatar }: AppLinkProps) => (
  <Link href={href}>
    <Flex gap='3' align='baseline' style={{
      position: 'fixed',
      left: 30,
      top: 5,
    }}>
      <Avatar src={avatar.src} radius='none' style={{
        width: 80,
        height: 40,
        overflow: 'hidden',
        maskImage: 'linear-gradient(transparent, black, transparent)',
        WebkitMaskImage: 'linear-gradient(transparent, black, transparent)',
      }} fallback={(
        <Blurhash
          hash={avatar.blurhash}
          width='100%'
          height='100%'
          resolutionX={32}
          resolutionY={32}
        />
      )} />
      <Heading style={{ position: 'relative', top: -8 }}>
        {moe(title).map((c, i) => (
          <Text key={i}
            style={{
              ...FontHachiMaruPop,
              color: `var(--${c.color}-8)`,
            }}
            size={c.char === '★' ? '1' : '6'}>
            {c.char}
          </Text>
        ))}
      </Heading>
    </Flex>
  </Link>
)
