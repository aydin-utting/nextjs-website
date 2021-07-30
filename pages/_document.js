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

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
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