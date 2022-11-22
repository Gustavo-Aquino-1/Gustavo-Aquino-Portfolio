import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <Switch>
      <Route exact path="/about/me" component={AboutMe} />
      <Route exact path="/my/projects" component={MyProjects} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
