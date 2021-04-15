import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'
import Wrapper from '../components/wrapper'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Wrapper>
            <InitializeColorMode />
            <Main />
            <NextScript />
          </Wrapper>
        </body>
      </Html>
    )
  }
}
