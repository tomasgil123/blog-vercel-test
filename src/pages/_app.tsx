/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
