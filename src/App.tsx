import { Container } from '@mui/material';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Heroes, Home, Contract } from './pages';
import { ROUTES } from './routes';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.HEROES} component={Heroes} />
            <Route exact path={ROUTES.CONTRACT} component={Contract} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
