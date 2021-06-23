import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link href="/fonts/Bariol/Bariol-Regular-Webfont/stylesheet.css" rel="stylesheet"/>
        <link href="/fonts/Bariol/Bariol-Regular-Italic-Webfont/stylesheet.css" rel="stylesheet"/>
        <link
            rel="preload"
            href="/fonts/Bariol/Bariol-Regular-Webfont/bariol_regular-webfont.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="fonts/Bariol/Bariol-Regular-Italic-Webfont/bariol_regular_italic-webfont.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument