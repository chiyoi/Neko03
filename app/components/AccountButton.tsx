import { useState, useEffect } from 'react'
import { Connector, useAccount, useConnect, useConnectors } from 'wagmi'
import { DropdownMenu, IconButton } from '@radix-ui/themes'
import { AvatarIcon, CopyIcon } from '@radix-ui/react-icons'
import Blockies from 'react-blockies'
import { useMounted } from '@/app/internal/hooks'
import { useToast } from '@/app/internal/toast'
import { FontNotoSansMono } from '@/app/internal/fonts'

export default () => {
  const toast = useToast()
  const connectors = useConnectors()
  const { address, isConnected } = useAccount()
  return useMounted() && (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton size='3' variant='soft' radius='full' style={{
          position: 'fixed',
          right: 30,
          top: 5,
          overflow: 'hidden',
        }}>
          {address !== undefined ? (
            <Blockies scale={5} seed={address.toLowerCase()} />
          ) : (
            <AvatarIcon />
          )}
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {address !== undefined && (
          <DropdownMenu.Item style={{ ...FontNotoSansMono }} onClick={() => {
            navigator.clipboard.writeText(address)
            toast('Address copied~')
          }}>
            {address}
            <CopyIcon style={{
              marginLeft: 3,
              color: 'var(--accent-11)'
            }} />
          </DropdownMenu.Item>
        )}
        {!isConnected && (
          <>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger style={{ ...FontNotoSansMono }}>Connect</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                {connectors.map(connector => (
                  <WalletOption key={connector.uid} connector={connector} />
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
          </>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

const WalletOption = ({ connector }: {
  connector: Connector,
}) => {
  const { connect } = useConnect()
  const [ready, setReady] = useState(false)
  useEffect(() => {
    ; (async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])
  return (
    <DropdownMenu.Item disabled={!ready} style={{ ...FontNotoSansMono }} onClick={() => connect({ connector })}>
      {connector.name}
    </DropdownMenu.Item>
  )
}
