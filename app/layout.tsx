import '@radix-ui/themes/styles.css'
import type { Metadata, Viewport } from 'next'

import '@/app/theme.css'
import ClientLayout from '@/app/ClientLayout'
import { ChildrenProps } from '@/app/common/props'
import { NotoSansMonoVariable } from '@/app/common/fonts'

export const metadata: Metadata = {
  title: 'Neko03',
  description: 'Nyan!',
  icons: {
    icon: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FEF7FB' },
    { media: '(prefers-color-scheme: dark)', color: '#21121D' },
  ],
}

export default ({ children }: ChildrenProps) => (
  <html lang='en' className={NotoSansMonoVariable}>
    <ClientLayout>
      {children}
    </ClientLayout>
  </html>
)
