'use client'
import { useState } from 'react'
import { Grid } from '@radix-ui/themes'
import AppLink from '@/app/components/AppLink'
import { AppLinkProps } from '@/app/internal/props'
import Welcome from '@/app/components/Welcome'
import { useQuery } from '@tanstack/react-query'

export default () => {
  const [welcome, setWelcome] = useState(true)
  const { data: pages } = useQuery<AppLinkProps[]>({
    queryKey: ['pages'],
    queryFn: () => fetch('/pages').then(r => r.json())
  })
  if (welcome) return (
    <Welcome setWelcome={setWelcome} />
  )
  return pages !== undefined && (
    <Grid pt='9' px='5' width='auto' columns='5'>
      {pages.map(page => (
        <AppLink key={page.href} {...page} />
      ))}
    </Grid>
  )
}
