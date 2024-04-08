import '@radix-ui/themes/styles.css'
import type { Metadata, Viewport } from 'next'
import Body from '@neko03/general/components/Body'
import { ChildrenProps } from '@/app/internal/props'
import Providers from '@/app/components/Providers'

export const metadata: Metadata = {
  title: 'Neko03',
  description: 'Neko03 catalog.',
  icons: {
    icon: '/icon.png',
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FEF7FB' },
    { media: '(prefers-color-scheme: dark)', color: '#21121D' },
  ],
}

export default ({ children }: ChildrenProps) => (
  <html lang='en'>
    <Body style={{ margin: 0 }}>
      <Providers>
        {children}
      </Providers>
    </Body>
  </html>
)
