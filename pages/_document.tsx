import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="TMDB App" />
        <meta name="keywords" content="NextJS, React, TMDB-API, MUI" />
        <meta name="author" content="Burak İskender" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
