import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles'
import LightTheme from '../themes/theme'
import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'

function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={LightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Container style={{ 'margin-top': '10px' }}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
