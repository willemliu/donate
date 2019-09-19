import Document, {
    Html,
    Main,
    NextScript,
    Head,
    DocumentContext,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<any> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps: any = await Document.getInitialProps(ctx);
            const styleElement = sheet.getStyleElement();
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {styleElement}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=UTF-8"
                    />
                    <meta name="theme-color" content="#e6d3c6" />
                    <link
                        rel="shortcut icon"
                        href="/static/favicon.ico"
                        type="image/x-icon"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=11" />
                    <title>Donate</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
