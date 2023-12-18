import Image from 'next/image'
import Link from 'next/link'
import { Flex, Heading, Text, Button } from '@radix-ui/themes'
import { FontHachiMaruPop } from '@/fonts'
import { StyleButtonColor } from '@/styles'
import { blurHashToDataURL } from '@/blurHashDataURL'

const title = colorLoopCharacters("neko03★moe")
const pages: Page[] = [
  {
    title: 'CHIYOI',
    href: '/chiyoi',
    avatar: {
      src: 'dotpict.png',
      blurhash: 'e8T5rnsD.%owGi${bHRqjZsQ*YbYHInmzzZ[jZ$[X8NiU4jIq+bYX%', // cspell: disable-line
    }
  },
]

export default function Page() {
  return (
    <>
      <Flex m='3' position='fixed' gap='1' direction='column' style={{ width: '20vh' }}>
        {pages.map(page =>
          <Link key={page.title} href={page.href}>
            <Button key={page.title}
              style={{
                ...StyleButtonColor,
                borderRadius: 'var(--radius-6)'
              }}>
              {page.avatar !== undefined && <Image src={page.avatar.src}
                alt={page.title}
                placeholder='blur'
                blurDataURL={blurHashToDataURL(page.avatar.blurhash)}
                width='366'
                height='366'
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: 'var(--radius-5)'
                }}
              />}
              <Text color='pink' className={FontHachiMaruPop.className}>{page.title}</Text>
            </Button>
          </Link>
        )}
      </Flex>

      <Flex gap='2' align='center' direction='column' m='auto'>
        <Image src='cat_girl__cute__loli_1231998692.png'
          alt='Neko03'
          width='640'
          height='320'
          placeholder='blur'
          blurDataURL={blurHashToDataURL('e5L;5Uns4X1Z8@%Q%eNCrHRP06yC_2VXxn{gITPB0fnPDSxSDjfm9F')} // cspell: disable-line
          style={{
            width: '320px',
            height: '160px',
            maskImage: 'linear-gradient(transparent, black, transparent)',
            WebkitMaskImage: 'linear-gradient(transparent, black, transparent)',
            borderRadius: 'var(--radius-2)'
          }}
        />
        <Heading>
          {title.map((c, i) => (
            <Text key={i}
              className={FontHachiMaruPop.className}
              style={{ color: `var(--${c.color}-8)` }}
              size={c.char === '★' ? {
                initial: '1',
                sm: '3',
              } : {
                initial: '8',
                sm: '9',
              }}>
              {c.char}
            </Text>
          ))}
        </Heading>
      </Flex>
    </>
  )
}

function colorLoopCharacters(s: string): ColoredCharacter[] {
  function loop(a: any[], i: number) {
    return () => a[i++ % a.length]
  }
  const color = loop(["pink", "blue", "yellow", "green"], 1)
  return [...s].map(c => { return { char: c, color: color() } })
}

type ColoredCharacter = {
  char: string,
  color: 'pink' | 'blue' | 'yellow' | 'green',
}

type Page = {
  title: string,
  href: string,
  avatar?: {
    src: string,
    blurhash: string,
  },
}