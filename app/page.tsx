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
    queryFn: async () => {
      const response = await fetch('/storage/Pages')
      const pageNames: string[] = await response.json()
      return Promise.all(pageNames.map(async pageName => {
        const response = await fetch(`/storage/Pages/${pageName}`)
        return response.json()
      }))
    }
  })
  if (welcome) return (
    <Welcome setWelcome={setWelcome} />
  )
  return pages !== undefined && (
    <Grid mt='9' mx='5' width='auto' columns='5'>
      {pages.map(page => (
        <AppLink key={page.href} {...page} />
      ))}
    </Grid>
  )
}
