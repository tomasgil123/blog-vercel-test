/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'src/styles/globals.css'
import PageWithLayoutType from 'src/types/pageWithLayout'
import React from 'react'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

//our page components have a layout property

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
