import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Gems Parlor</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;0,900;1,400&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" href="/base.svg" />
          <meta key="subject" name="subject" content="Gems Parlor" />
          <meta key="robots" name="robots" content="index,follow" />
          <meta key="og_type" property="og:type" content="website" />
          <meta key="og_title" property="og:title" content="Gems Parlor" />
          <meta name="description" content="Fine Gems and Jewels" />
        </Head>
        <body className="antialiased  bg-repeat" style={{ backgroundImage: "url('/scales.svg')" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
