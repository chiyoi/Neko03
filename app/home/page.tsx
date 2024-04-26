'use client'
import { Grid } from '@radix-ui/themes'

import { Page } from '@/functions/common/page'
import AppLink from '@/app/home/AppLink'
import { useQueryData } from '@/app/common/hooks'
import ErrorMessage from '@/app/common/ErrorMessage'
import LoadingMessage from '@/app/common/LoadingMessage'

export default () => {
  const [data, status] = useQueryData('/pages', Page.array())
  if (status === 'error') return (
    <ErrorMessage error={data} />
  )
  if (status === 'loading') return (
    <LoadingMessage />
  )
  const pages = data.sort((a, b) => a.date_created > b.date_created ? 1 : -1)
  return (
    <Grid width='auto' gap='3' columns={{ initial: '3', md: '5' }}>
      {pages.map(page => (
        <AppLink key={page.href} {...page} />
      ))}
    </Grid>
  )
}
