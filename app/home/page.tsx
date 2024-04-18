'use client'
import { useQuery } from '@tanstack/react-query'
import { Grid, Text } from '@radix-ui/themes'

import { Page } from '../../functions/common/page'
import AppLink from './AppLink'

export default () => {
  const { data, error, isSuccess } = useQuery({
    queryKey: ['/pages'],
    queryFn: async () => {
      const response = await fetch('/pages')
      if (!response.ok) throw new Error(`Code ${response.status}`)
      const item = await response.json()
      return Page.array()
        .parse(item)
        .sort((a, b) => a.date_created > b.date_created ? 1 : -1)
    }
  })

  if (error !== null) return (
    <>
      <Text as='div'>Something bad happened.</Text>
      <Text as='div' mt='3'>Error message: {error.message}</Text>
    </>
  )
  if (!isSuccess) return (
    <Text as='div'>Loading...</Text>
  )
  return (
    <Grid width='auto' gap='3' columns={{ initial: '3', md: '5' }}>
      {data.map(page => (
        <AppLink key={page.href} {...page} />
      ))}
    </Grid>
  )
}
