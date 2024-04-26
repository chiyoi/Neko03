'use client'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Theme } from '@radix-ui/themes'
import { ToastProvider } from '@radix-ui/react-toast'

import { ChildrenProps } from '@/app/common/props'
import HomeLink from '@/app/common/HomeLink'
import Body from '@/app/common/Body'

export const queryClient = new QueryClient()

export default ({ children }: ChildrenProps) => (
  <Body style={{ margin: 0 }}>
    <ThemeProvider attribute='class'>
      <Theme accentColor='pink' hasBackground={false}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            {children}
            <HomeLink title='neko03★moe' href='/' />
          </ToastProvider>
        </QueryClientProvider>
      </Theme>
    </ThemeProvider>
  </Body>
)
