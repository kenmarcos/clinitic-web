import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	border: 0;
    box-sizing: border-box;
    outline: 0;
}

ol, ul {
	list-style: none;
}

button {
    cursor: pointer;
}

:root {
    --primaryColor: #0063ff;
    --secondaryColor: #ffffff;
    --tertiaryColor: #dae8ff;
    --quaternaryColor: #b6d2ff;
    --quinaryColor: #91bcff;
    --blackColor: ##1a1a1a;
    --grayColor: #666666;
    --darkGrayColor: #212529;
    --font1: 'Open Sans', sans-serif;
    --font2: Roboto, sans-serif;
}

`;
