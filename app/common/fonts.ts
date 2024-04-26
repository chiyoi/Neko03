import { Hachi_Maru_Pop, Noto_Sans_Mono } from 'next/font/google'

const HachiMaruPop = Hachi_Maru_Pop({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

const NotoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-noto-sans-mono',
})

export const FontHachiMaruPop = HachiMaruPop.style
export const FontNotoSansMono = NotoSansMono.style
export const NotoSansMonoVariable = NotoSansMono.variable
