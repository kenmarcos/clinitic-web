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
    --color1: #4B04FC;
    --whiteColor: #ffffff;
    --color2: #dae8ff;
    --color3: #647CFC;
    --color4: #91bcff;
    --blackColor: ##1a1a1a;
    --grayColor: #666666;
    --redColor: #FA5858;
    --darkGrayColor: #212529;
    --font1: system-ui, sans-serif;
    --font2: Roboto, sans-serif;
}

body {
    font-family: var(--font2);
    color: var(--grayColor);
    background-color: var(--color2);
}

`;
