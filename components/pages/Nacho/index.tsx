import axios from "axios"
import { useCallback, useContext, useEffect, useMemo, useState } from "react"

import { Stack } from "tamagui"

import FlyingImage from "./FlyingImage"
import BackButton from ".components/BackButton"
import { config } from ".modules/config"
import { ToastContext } from ".modules/toast"

const endpointImageList = new URL("/nacho/image_list.json", config.EndpointService).href

export default function Nacho() {
  const toast = useContext(ToastContext)

  const interval = useMemo(() => 20000, [])
  const duration = useMemo(() => 50000, [])

  const [imageList, setImageList] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])

  const pick = useCallback((imageList: string[]) => (
    imageList.length > 0 ? (
      imageList[Math.floor(Math.random() * imageList.length)]
    ) : (
      "なちょ逃げた"
    )
  ), [])

  const addImage = useCallback(() => {
    if (imageList.length > 0) {
      setImages(images => {
        const m = new Set()
        images.forEach(image => m.add(image))

        const image = pick(imageList.filter(image => !m.has(image)))
        setTimeout(() => removeImage(image), duration)

        return [...images, image]
      })
    }
  }, [imageList])

  const removeImage = useCallback((id: string) => (
    setImages(images => images.filter(image => image !== id))
  ), [])

  useEffect(() => {
    toast("Scrolling images~")

    console.log("fetching image list")
    toast("Fetching image list~")
    axios.get<string[]>(endpointImageList).then(resp => {
      setTimeout(() => {
        console.log("image list fetched")
        toast("Image list fetched~")
        setImageList(resp.data)
      }, 500)
    }).catch(err => {
      console.warn(err)
      toast("Connection error~")
    })
  }, [toast])

  useEffect(() => {
    if (imageList.length > 0) {
      addImage()
      const worker = setInterval(addImage, interval)
      return () => {
        setImages([])
        clearInterval(worker)
      }
    }
  }, [imageList, addImage])

  return (
    <>
      <Stack height="100%" backgroundColor="$background">
        {images.map(image => (
          <FlyingImage key={image} src={new URL(image, config.EndpointService).href} duration={duration} />
        ))}
      </Stack>

      <BackButton />
    </>
  )
}

