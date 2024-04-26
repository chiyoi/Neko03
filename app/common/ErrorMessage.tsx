import { Text } from '@radix-ui/themes'

export default ({ error }: {
  error: Error
}) => (
  <>
    <Text as='div'>Something bad happened...</Text>
    <Text as='div'>Error message: {error.message}</Text>
  </>
)
