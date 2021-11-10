import Head from 'next/head'
import { styled } from '../stitches.config'
import StitchesLogo from '../components/StitchesLogo'
import { ThemeToggle } from '../components/ThemeToggle'

const Box = styled('div', {})

const Text = styled('p', {
  fontFamily: '$system',
  color: '$theme-fg-default',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$theme-fg-muted',
})

export default function Home() {
  return (
    <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: 'auto', maxWidth: '600px', paddingY: '$6', background: '$theme-bg-subtle' }}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <div>
        <StitchesLogo />
        <Text as="h1">Hello, from Stitches.</Text>
        <Text>
          For full documentation, visit{' '}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
        <ThemeToggle />
      </div>
    </Box>
  )
}
