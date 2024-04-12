'use client'
import { Container } from '@radix-ui/themes'

import { ChildrenProps } from '../common/props'

export default ({ children }: ChildrenProps) => (
  <Container pt='9' px='5'>
    {children}
  </Container>
)
