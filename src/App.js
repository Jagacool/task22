import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AllCourses from './pages/AllCourses';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/all" component={AllCourses} />
          <Route path="/full-stack" component={FullStack} />
          <Route path="/data-science" component={DataScience} />
          <Route path="/cyber-security" component={CyberSecurity} />
          <Route path="/career" component={Career} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
