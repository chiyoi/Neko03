'use client'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider } from '@tanstack/react-query'
import { Theme } from '@radix-ui/themes'
import { ToastProvider } from '@neko03/general/toast'
import HomeLink from '@/app/components/HomeLink'
import { queryClient } from '@/app/internal/configurations'
import { ChildrenProps } from '@/app/internal/props'

export default ({ children }: ChildrenProps) => (
  <ThemeProvider attribute='class'>
    <Theme accentColor='pink'>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          {children}
          <HomeLink title='neko03★moe' href='/' avatar={{
            src: '/assets/Photos/cat_girl__cute__loli_1231998692.640x320.png',
            blurhash: 'e6L;5Usc8~61DJ%j%LNDraRP06yC^+VXxn{%IUO@0fi{DSxSIBWF9Z', // cspell: disable-line
          }} />
        </ToastProvider>
      </QueryClientProvider>
    </Theme>
  </ThemeProvider >
)
