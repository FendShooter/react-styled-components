import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *::after, *::before{
margin:0;
padding:0;
box-sizing:inherit
}
html{
box-sizing:border-box; 
font-size: 62.5%
}
body{
height:100%;
background-color: ${({ theme }) => theme.colors.body};
}
ul{
  list-style: none;
}
`;

export default GlobalStyles;
