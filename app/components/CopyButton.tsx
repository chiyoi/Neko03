import { useCallback, useState } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import { CopyIcon } from '@radix-ui/react-icons'

export default ({ content }: {
  content: string,
}) => {
  const [tooltip, setTooltip] = useState('')
  const open = tooltip !== ''
  const setOpen = useCallback((open: boolean) => open ? setTooltip('Copy') : setTooltip(''), [])
  return (
    <Tooltip delayDuration={300} content={tooltip} open={open} onOpenChange={setOpen}>
      <IconButton ml='3' variant='ghost' radius='full' onMouseDown={e => e.stopPropagation()} onClick={() => {
        navigator.clipboard.writeText(content)
        setTooltip('Copied')
      }}>
        <CopyIcon />
      </IconButton>
    </Tooltip>
  )
}
