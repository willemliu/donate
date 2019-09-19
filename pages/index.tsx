import styled, { createGlobalStyle } from 'styled-components';

export default function Index() {
    return (
        <>
            <GlobalStyle />

            <StyledForm
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
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
                <h2>Support our products</h2>
                <StyledProducts>
                    <img src="/static/moviesom128x128.png" />
                    <img src="/static/WilliM128x128.png" />
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
`;

const StyledProducts = styled.section`
    display: flex;
    flex-wrap: wrap;
    > img:not(:last-child) {
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
