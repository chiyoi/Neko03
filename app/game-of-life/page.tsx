import { Card, Container } from '@radix-ui/themes'

export default () => (
  <Container pt='9' px='5'>
    <Card mx='auto' style={{ width: 'min-content' }}>
      <iframe src='https://games.neko03.moe/game-of-life' width='640' height='360' />
    </Card>
  </Container>
)
