import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/images/_site/apple-touch-icon/favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/images/_site/apple-touch-icon/57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/images/_site/apple-touch-icon/72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/images/_site/apple-touch-icon/76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/images/_site/apple-touch-icon/114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/images/_site/apple-touch-icon/120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/images/_site/apple-touch-icon/144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/images/_site/apple-touch-icon/152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/_site/apple-touch-icon/180x180.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
