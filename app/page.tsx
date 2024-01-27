'use client'
import { Grid } from '@radix-ui/themes'
import AppLink from '@/app/components/AppLink'
import { AppLinkProps } from '@/app/internal/props'

export default () => (
  <Grid m='9' width='auto' columns='5' gap='5'
  // style={{ marginTop: 80 }}
  >
    {apps.map(app => (
      <AppLink key={app.href} {...app} />
    ))}
  </Grid>
)

const apps: AppLinkProps[] = [
  {
    title: 'LaTex',
    href: 'https://latex.neko03.moe',
    avatar: {
      src: 'https://latex.neko03.moe/favicon.ico',
      blurhash: 'eKN0e#DjI.9Z4.XSMxRPD%Mx.TIU-BWBoJxvWAIU-;S5XSayITMy%2', // cspell: disable-line
    }
  },
  {
    title: 'Neko',
    href: 'https://neko.neko03.moe',
    avatar: {
      src: 'https://neko.neko03.moe/favicon.ico',
      blurhash: 'eSP6N:Wa.l%L?tD~M{.7NGt7-oa$$ewcMz-=xaMfbbMxXUWUWCM{%M', // cspell: disable-line
    }
  },
]
