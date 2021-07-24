import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./variables";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
} 
html, 
body {  
       
        background: rgb(247,219,240);
background: linear-gradient(321deg, rgba(247,219,240,1) 0%, rgba(190,174,226,1) 33%, rgba(120,188,237,1) 87%, rgba(0,212,255,1) 100%);
        color: #333;
        font-family:  ${fonts.openSans};
        font-size: 16px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
    }
   
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 3em 1.2em;
        position: relative;

        
    }
    li {
        list-style: none;
    }
    button {
        border: none;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    p {
        line-height: 1.4em;
    }
    img {
        max-width: 100%;
    }
    input,
    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
}
`;
