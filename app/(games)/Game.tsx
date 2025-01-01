import { SizeIcon } from '@radix-ui/react-icons'
import { Button, Card, Container, Flex, IconButton } from '@radix-ui/themes'
import { useRef } from 'react'

export default ({ ID }: {
  ID: string
}) => {
  const iframe = useRef<HTMLIFrameElement>(null)
  return (
    <Container pt='9' px='5'>
      <Card mx='auto' style={{ width: 'min-content' }}>
        <iframe ref={iframe} src={`https://games.neko03.moe/${ID}/index.html`} width='640' height='360' />
        <Flex mt='3' justify='end' align='center' gap='3'>
          <Button variant='soft' radius='full' onClick={() => iframe.current?.requestFullscreen()}>
            <SizeIcon /> Fullscreen
          </Button>
        </Flex>
      </Card>
    </Container>
  )
}
