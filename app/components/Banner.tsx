import { Box } from '@radix-ui/themes'
import AccountIcon from '@/app/components/AccountButton'
import HomeIcon from '@/app/components/HomeLink'

export default () => (
  <>
    <Box style={{
      position: 'fixed',
      backgroundColor: 'var(--accent-2)',
      opacity: 0.8,
      height: 64,
      width: '100%',
      left: 0,
      top: 0,
    }} />
    <HomeIcon title='neko03★moe' href='/' avatar={{
      src: '/assets/cat_girl__cute__loli_1231998692.png',
      blurhash: 'e5L;5Uns4X1Z8@%Q%eNCrHRP06yC_2VXxn{gITPB0fnPDSxSDjfm9F', //cspell: disable-line
    }} />
    <AccountIcon />
  </>
)
