import React from 'react';
import Document, {
    DocumentInitialProps,
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="icon"
                        href="https://rocketseat.com.br/favicon.ico"
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
