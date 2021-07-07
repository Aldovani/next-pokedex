import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
   


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com "/>
<link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet"></link>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
