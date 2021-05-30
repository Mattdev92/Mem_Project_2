import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hot from 'views/hot';
import Regular from 'views/regular';
import Favourite from 'views/favourite';
import Default from 'views/default';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/hot">
              <Hot />
            </Route>
            <Route path="/regular">
              <Regular />
            </Route>
            <Route path="/favourite">
              <Favourite />
            </Route>
            <Route path="/">
              <Default />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
