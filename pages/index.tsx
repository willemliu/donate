import styled, { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import Head from 'next/head';

export default function Index() {
    const [appInsights, setAppInsights] = useState(null);

    useEffect(() => {
        const ai = new ApplicationInsights({
            config: {
                instrumentationKey:
                    process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY || '',
                enableAutoRouteTracking: true,
            },
        });
        setAppInsights(ai);
        ai.loadAppInsights();
        ai.trackEvent({ name: 'Donate landing page' });
    }, []);

    function onSubmit() {
        appInsights.trackEvent({ name: 'Donate button clicked' });
    }

    return (
        <>
            <GlobalStyle />

            <Head>
                <title>Donate</title>
            </Head>

            <StyledForm
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                onSubmit={onSubmit}
            >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                    type="hidden"
                    name="hosted_button_id"
                    value="DF2MC8SK2569J"
                />
                <input
                    type="image"
                    src="https://www.paypalobjects.com/WEBSCR-640-20110429-1/en_US/GB/i/btn/btn_donateCC_LG.gif"
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online."
                />
                <img
                    alt=""
                    src="https://www.paypalobjects.com/WEBSCR-640-20110429-1/nl_NL/i/scr/pixel.gif"
                    width="1"
                    height="1"
                />
                <h2>Support our free products</h2>
                <StyledProducts>
                    <a
                        href="https://www.moviesom.com"
                        rel="noopener nofollow"
                        target="_blank"
                    >
                        <img src="/static/moviesom128x128.png" />
                    </a>
                    <a
                        href="https://www.willim.nl"
                        rel="noopener nofollow"
                        target="_blank"
                    >
                        <img src="/static/WilliM128x128.png" />
                    </a>
                </StyledProducts>
            </StyledForm>
        </>
    );
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    [type='image'] {
        max-width: 160px;
    }
    input,
    img {
        border: none;
    }
    h2 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
            'Lucida Sans', Arial, sans-serif;
    }
`;

const StyledProducts = styled.section`
    display: flex;
    flex-wrap: wrap;
    > a:not(:last-child) {
        margin-right: 1rem;
    }
`;

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100vh;
    }
    body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
