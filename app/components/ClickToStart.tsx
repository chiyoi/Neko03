import { useEffect, useState } from 'react'
import { Text } from '@radix-ui/themes'
import { moe } from '@/app/internal/moe'
import { FontHachiMaruPop } from '@/app/internal/fonts'

export default ({ onClick }: {
  onClick: () => void,
}) => {
  const [opacity, setOpacity] = useState(1)
  const [opacityDelta, setOpacityDelta] = useState(-0.01)
  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(opacity => {
        if (opacity <= 0.1) setOpacityDelta(0.01)
        if (opacity >= 0.9) setOpacityDelta(-0.01)
        return opacity + opacityDelta
      })
    }, 10)
    return () => clearTimeout(timer)
  })
  return (
    <Text mt='9' style={{ opacity }} onClick={onClick}>
      {moe('Click to start...').map((c, i) => (
        <Text
          key={i}
          style={{
            ...FontHachiMaruPop,
            color: `var(--${c.color}-8)`,
          }}
          size={c.char === '★' ? '1' : '5'}
        >
          {c.char}
        </Text>
      ))}
    </Text>
  )
}
