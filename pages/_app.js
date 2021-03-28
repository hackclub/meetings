import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import '@hackclub/theme/fonts/reg-bold.css'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Nav from '../components/nav'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta
          as={Head}
          name="Hack Club"
          title="Meetings"
          description="A collection of real Hack Club meetings, paired with everything you need to run them in your own club."
          image="https://cloud-yjk47pvf1-hack-club-bot.vercel.app/0screen_shot_2021-03-28_at_2.54.20_pm.png"
        />
        <ColorSwitcher />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
