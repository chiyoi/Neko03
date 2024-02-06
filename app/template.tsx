'use client'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { Theme } from '@radix-ui/themes'
import { ToastProvider } from '@neko03/general/toast'
import AccountButton from '@neko03/general/components/AccountButton'
import HomeLink from '@neko03/general/components/HomeLink'
import { wagmiConfig, queryClient } from '@/app/internal/configurations'
import { ChildrenProps } from '@/app/internal/props'

export default ({ children }: ChildrenProps) => (
  <ThemeProvider attribute='class'>
    <Theme accentColor='pink'>
      <WagmiProvider config={wagmiConfig} >
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            {children}
            <HomeLink title='neko03★moe' href='/' avatar={{
              src: '/assets/cat_girl__cute__loli_1231998692.png',
              blurhash: 'e5L;5Uns4X1Z8@%Q%eNCrHRP06yC_2VXxn{gITPB0fnPDSxSDjfm9F', // cspell: disable-line
            }} />
            <AccountButton />
          </ToastProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Theme>
  </ThemeProvider >
)
