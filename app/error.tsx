'use client'
import { Box, Card, Container, Flex } from '@radix-ui/themes'

import ErrorMessage from '@/app/common/ErrorMessage'

export default ({ error }: {
  error: Error & { digest?: string },
  reset: () => void,
}) => (
  <Container pt='9' px='5'>
    <Card>
      <ErrorMessage error={error} />
    </Card>
  </Container>
)
