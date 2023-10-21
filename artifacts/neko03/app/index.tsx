import { useEffect, useMemo } from "react"
import { useAssets } from "expo-asset"
import { Link } from "expo-router"

import { Button, ListItem, Popover, SizableText, Stack, XStack, YGroup, useMedia, useTheme, } from "tamagui"
import { Flower2, Cherry, Citrus } from "@tamagui/lucide-icons"

import { centralized, styleBounceDown, styleTopLeftIconButton } from ".modules/assets/styles"
import ColorAvatar from ".modules/components/ColorAvatar"
import ErrorDialog from ".modules/components/ErrorDialog"
import CenterSquare from ".modules/components/CenterSquare"

export default function Neko03() {
  useEffect(() => console.log(`Version: ${process.env.VERSION}`), [])

  const [assets, error] = useAssets([
    require(".modules/assets/icons/chiyoi.png"),
    require(".modules/assets/icons/nacho.png"),
    require(".modules/assets/icons/shigure.png"),
  ])

  const pages: Page[] = useMemo(() => [
    {
      title: "chiyoi",
      href: "/chiyoi",
      avatar: assets?.[0].localUri ?? undefined,
    }, {
      title: "nacho",
      href: "/nacho",
      avatar: assets?.[1].localUri ?? undefined,
    }, {
      title: "shigure",
      href: "/shigure",
      avatar: assets?.[2].localUri ?? undefined,
    },
  ], [assets])

  const media = useMedia()
  const theme = useTheme()

  const title = colorLoopCharacters("neko03★moe")

  if (error !== undefined) {
    return <ErrorDialog message={error.message} />
  }

  if (assets === undefined) {
    return <CenterSquare title="Loading~" />
  }

  return (
    <>
      <Stack {...centralized} backgroundColor="$background">
        <XStack alignItems="flex-end" scale={media.xs ? 0.3 : media.sm ? 0.6 : media.md ? 0.8 : 1}>
          {title.map((c, i) => (
            <SizableText fontFamily="$neko" padding={1} color={`$${c.color}8`} size={i == 6 ? "$10" : "$16"} key={i}>
              {c.char}
            </SizableText>
          ))}
        </XStack>
      </Stack>

      <Popover placement="bottom-start">
        <Popover.Trigger asChild>
          <Button {...styleTopLeftIconButton} chromeless icon={
            Math.random() > 0.5 ? (
              <Citrus size={30} />
            ) : Math.random() > 0.5 ? (
              <Cherry size={30} />
            ) : (
              <Flower2 size={30} />
            )
          } />
        </Popover.Trigger>
        <Popover.Content {...styleBounceDown} backgroundColor="$color4">
          <YGroup borderRadius={0} backgroundColor="">
            {pages.map((page, i) => (
              <YGroup.Item key={i}>
                <Popover.Close asChild>
                  <Link asChild href={page.href}>
                    <ListItem size="$4" width={170} hoverStyle={{ backgroundColor: theme.color6.val.toString() }} pressStyle={{ backgroundColor: theme.color3.val.toString() }} backgroundColor={theme.color5.val.toString()} justifyContent="flex-start" icon={(
                      <ColorAvatar size={25} uri={page.avatar} />
                    )}>
                      <SizableText color={theme.color8.val.toString()} fontFamily="$neko" size="$8">
                        {page.title}
                      </SizableText>
                    </ListItem>
                  </Link>
                </Popover.Close>
              </YGroup.Item>
            ))}
          </YGroup>
        </Popover.Content>
      </Popover >
    </>
  )
}

function colorLoopCharacters(s: string): ColoredCharacter[] {
  const color = loop(["pink", "blue", "yellow", "green"], 1)
  return [...s].map(c => { return { char: c, color: color() } })
}

function loop(a: any[], i: number) {
  return () => a[i++ % a.length]
}

type ColoredCharacter = {
  char: string,
  color: string,

  star?: boolean,
}

type Page = {
  title: string,
  href: string,
  avatar?: string,
}
