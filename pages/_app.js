import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import '@hackclub/theme/fonts/reg-bold.css'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Nav from '../components/nav'
import Wrapper from '../components/wrapper'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Wrapper>
        <ThemeProvider theme={theme}>
          <Meta
            as={Head}
            name="Hack Club"
            title="Meetings"
            description="A collection of real Hack Club meetings, paired with everything you need to run them in your own club."
            image="https://cloud-6igzrxeem-hack-club-bot.vercel.app/0meetings.png"
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </Wrapper>
    )
  }
}
