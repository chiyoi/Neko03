import { useEffect } from "react"
import { Platform } from "react-native"
import { Prompt, ResponseType, useAuthRequest, useAutoDiscovery } from "expo-auth-session"

import { Button, Paragraph, Stack, YStack, GetProps, useMedia, } from "tamagui"

import { centralized } from ".assets/styles"
import CenterSquare from ".components/CenterSquare"
import ErrorDialog from ".components/ErrorDialog"
import { setCache } from ".components/pages/Trinity/auth"
import { useAssets } from "expo-asset"
import ColorAvatar from ".components/ColorAvatar"
import { config, isProd } from ".modules/config"

const clientId = config.ClientIDAzureADApplication
const discoveryEndpoint = "https://login.microsoftonline.com/common/v2.0"

const redirectUri = Platform.OS === "web" ? (
  isProd() ? (
    "https://neko03.moe/trinity"
  ) : (
    "http://localhost:19000/trinity"
  )
) : (
  "exp://silver.local:19000/--/trinity"
)

const styleFrame: GetProps<typeof YStack> = {
  backgroundColor: "$color3",
  borderRadius: "$5",
  elevation: 1,
  height: 200,
  width: 500,
}

const styleTitle: GetProps<typeof Paragraph> = {
  color: "$color7",
  fontFamily: "$neko",
  margin: "$3",
  padding: "$1",
  size: "$9",
}

const styleButton: GetProps<typeof Button> = {
  color: "$color8",
  fontFamily: "$neko",
}

export default function Login() {
  const [assets, error] = useAssets([require(".assets/icons/microsoft.png")])

  const discovery = useAutoDiscovery(discoveryEndpoint)
  const [request, response, promptAsync] = useAuthRequest({
    clientId,
    scopes: ["User.Read"],
    redirectUri,
    responseType: ResponseType.Token,
    prompt: Prompt.SelectAccount,
  }, discovery)

  const media = useMedia()

  useEffect(() => {
    if (discovery !== null && request !== null && response !== null && response.type === "success") {
      response.authentication && setCache(response.authentication)
    }
  }, [discovery, request, response])

  if (error !== undefined) {
    return <ErrorDialog message={error.message} />
  }

  if (assets === undefined) {
    return <CenterSquare title="Loading~" />
  }

  if (response !== null) {
    return response.type === "opened" || response.type === "success" || response.type === "locked" ? (
      <CenterSquare title="Logging in~" />
    ) : response.type === "error" ? (
      <ErrorDialog message={response.error?.description || ""} />
    ) : response.type === "cancel" || response.type === "dismiss" ? (
      <CenterSquare title="Login canceled~" />
    ) : null
  }

  return (
    <Stack {...centralized} theme="pink" backgroundColor="$background">
      <YStack {...styleFrame} scale={media.xs ? 0.7 : 1.0}>
        <Paragraph {...styleTitle}>
          Which cat you are?
        </Paragraph>
        <Stack {...centralized}>
          <Button {...styleButton} disabled={request === null} onPress={() => { promptAsync() }}>
            <ColorAvatar uri={assets[0].localUri ?? undefined} size={25} />
            Login with Microsoft
          </Button>
        </Stack>
      </YStack>
    </Stack>
  )
}
