import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New','Pattaya','Shadows Into Light',
    monospace;
}

`;

export default GlobalStyle;
