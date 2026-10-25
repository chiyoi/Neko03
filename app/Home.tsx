import { Flex, Heading, Text } from '@radix-ui/themes'

import { moe } from './common/moe'
import { FontHachiMaruPop } from './common/fonts'

export default function Home() {
    return (
        <Flex justify='center' align='center' style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
        }}>
            <Flex direction='column' gap='3' justify='center' align='center'>
                <Heading>
                    {moe('neko03★moe').map((c, i) => (
                        <Text key={i} size='5' style={{
                            ...FontHachiMaruPop,
                            ...(c.char === '★' ? { fontSize: '30%' } : {}),
                            color: `var(--${c.color}-8)`,
                        }}>
                            {c.char}
                        </Text>
                    ))}
                </Heading>
            </Flex>
        </Flex>
    )
}
