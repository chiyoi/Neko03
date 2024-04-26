import { useEffect, useState } from 'react'
import { Avatar } from '@radix-ui/themes'
import { useWindowSize } from '@uidotdev/usehooks'
import { z } from 'zod'

import { useQueryData } from '@/app/common/hooks'
import ErrorMessage from '@/app/common/ErrorMessage'
import LoadingMessage from '@/app/common/LoadingMessage'

const speed = 300

export default () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const [data, status] = useQueryData('/photos', z.string().array())
  const pick = (): Photo | undefined => {
    if (status !== 'success') return
    const filename = data[Math.floor(Math.random() * data.length)]
    return { filename, ...size(filename) }
  }
  const widthVH = (photo: Photo) => 100 / photo.height * photo.width
  const size = (filename: string) => (y => ({ width: Number(y[0]), height: Number(y[1]) }))(
    (x => x[x.length - 2].split('x'))(
      filename.split('.')
    )
  )

  const [firstXVH, setFirstXVH] = useState(0)
  const [photos, setPhotos] = useState<Photo[]>([])
  const push = () => {
    const photo = pick()
    setPhotos(photos => [...photos, photo ?? { filename: 'Error', width: 0, height: 0 }])
  }
  const shift = () => {
    if (photos.length === 0) return
    setPhotos(photos => photos.slice(1))
    setFirstXVH(firstXVH + widthVH(photos[0]))
  }
  const totalWidthVH = () => photos.reduce((sum, photo) => sum + widthVH(photo), 0)
  const xVH = () => [firstXVH, ...photos.map((prefixSum => photo => prefixSum += widthVH(photo))(firstXVH)).slice(0, -1)]

  useEffect(() => {
    if (status !== 'success' || windowHeight === null || windowWidth === null) return
    const rightVH = firstXVH + totalWidthVH()
    const right = rightVH / 100 * windowHeight
    if (right >= windowWidth) return
    push()
  }, [data, firstXVH, photos, windowHeight])

  useEffect(() => {
    if (photos.length === 0) return
    if (firstXVH + widthVH(photos[0]) >= 0) return
    shift()
  }, [firstXVH, photos])

  useEffect(() => {
    const timer = setInterval(() => setFirstXVH(firstXVH => firstXVH - 0.01), 1000 / speed)
    return () => clearTimeout(timer)
  }, [])

  if (status === 'error') return (
    <ErrorMessage error={data} />
  )
  if (status === 'loading') return (
    <LoadingMessage />
  )
  return (
    <>
      {photos.map((photo, i) => (
        <Avatar key={photo.filename} radius='none' fallback='Nyan~' src={
          `/photos/${photo.filename}`
        } style={{
          position: 'fixed',
          height: '100vh',
          width: `${widthVH(photo)}vh`,
          top: 0,
          left: `${xVH()[i]}vh`,
        }} />
      ))}
    </>
  )
}

type Photo = {
  filename: string,
  width: number,
  height: number,
}
