/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'src/styles/globals.css'
import PageWithLayoutType from 'src/types/pageWithLayout'
import React from 'react'
//Component es un element de Nextjs que no tiene una property layout
//Podemos extender Component para que tenga una property layout?

//No termino de entender que significa (Home as PageWithLayout)

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
