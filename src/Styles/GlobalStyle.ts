import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  :root{
    --color-primary:#FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-negative:#59323F;
    --color-grey-0:#F8F9FA;
    --color-grey-1:#868E96;
    --color-grey-2:#343B41;
    --color-grey-3:#212529;
    --color-grey-4:#121214;
    --color-fb-sucess:#3FE864;
    --color-fb-negative:#E83F5B;
    --color-white:#FFFFFF;
    --color-tilte:#F8F9FA;
    --color-text:#F8F9FA;

    --font-title-1:20px;
    --font-title-2:18px;
    --font-title-3:16px;
    --font-text-1:12px;
  }

  body{
    background-color: var( --color-grey-4);
  }

  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;
