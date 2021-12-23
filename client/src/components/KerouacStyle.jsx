import { createGlobalStyle } from "styled-components";

export const KerouacStyle = createGlobalStyle`
  * {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Iosevka Etoile Web','IBM Plex Sans', 'Courier New', Courier, monospace;
    transition: all 0.50s linear;


    .content-container{
      color:${({ theme }) => theme.text};
      background-color:${({ theme }) => theme.body}; 
      width: 75%;
      height: 100%;
      padding-left: 10vw;
      padding-right: 10vw;
    }

    .material-icons-outlined {
      font-family: 'Material Icons Outlined';
      color:${({theme})=>theme.accent};
    }
`
