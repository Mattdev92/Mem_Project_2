import Nav from 'components/navigation/nav';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Nav />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
