'use client'
import { Card, Container } from '@radix-ui/themes'

import NotFound from '@/app/common/NotFoundMessage'

export default () => (
  <Container pt='9' px='5'>
    <Card>
      <NotFound />
    </Card>
  </Container>
)
