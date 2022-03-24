import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Heroes, Home } from './pages';
import { ROUTES } from './routes';

function App() {
  return (
    <>
      <h1>Testing APP</h1>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />,
          <Route exact path={ROUTES.HEROES} component={Heroes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
