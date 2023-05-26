import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/add-blog" component={BlogForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

