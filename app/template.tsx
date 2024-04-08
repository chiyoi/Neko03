'use client'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider } from '@tanstack/react-query'
import { Theme } from '@radix-ui/themes'
import { ToastProvider } from '@neko03/general/toast'
import HomeLink from '@neko03/general/components/HomeLink'
import { queryClient } from '@/app/internal/configurations'
import { ChildrenProps } from '@/app/internal/props'

export default ({ children }: ChildrenProps) => (
  <ThemeProvider attribute='class'>
    <Theme accentColor='pink' hasBackground={false}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          {children}
          <HomeLink title='neko03★moe' href='/' />
        </ToastProvider>
      </QueryClientProvider>
    </Theme>
  </ThemeProvider >
)
