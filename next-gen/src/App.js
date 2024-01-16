import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cohort from './components/Cohort';
import Blog from './components/Blog';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cohort" component={Cohort} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;