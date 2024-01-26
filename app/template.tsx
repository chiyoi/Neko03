'use client'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { Theme } from '@radix-ui/themes'
import { wagmiConfig, queryClient } from '@/app/internal/configurations'
import { ChildrenProps } from '@/app/internal/props'
import { ToastProvider } from '@/app/internal/toast'
import Banner from '@/app/components/Banner'

export default ({ children }: ChildrenProps) => (
  <ThemeProvider attribute='class'>
    <Theme accentColor='pink'>
      <WagmiProvider config={wagmiConfig} >
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            {children}
            <Banner />
          </ToastProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Theme>
  </ThemeProvider >
)
