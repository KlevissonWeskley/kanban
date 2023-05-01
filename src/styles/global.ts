import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    body {
        background: #7C3AED;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
        color: #CAB3FF;
        transition: .3s ease;

        &:hover {
            transform: scale(1.10);
            color: #fff;
        }
    }
`
