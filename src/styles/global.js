import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }

    body, input, button {
        font-family: 'Rubik', sans-serif;
    }

    html {
        /* a cada 1rem será considerado 10px*/
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
    }

    i:hover {
      color: #d35400;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    // media queries
    @media(max-width: 800px) {
      html {
        font-size: 50%;
      }
    }
`;
