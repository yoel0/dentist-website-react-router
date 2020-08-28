import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import WidgetShow from './WidgetShow';
import Associates from './Associates';
import Testimonials from './Testimonials';
import CelebrityClients from './CelebrityClients';

function App() {
  const procedures = [
    "Deep Cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Implants",
    "Fillings"
  ];

  return (
    <Router>
      <div className="App">
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/procedures">See our Procedures</Link>{' '}
        <Link to="/contact">Contact us!</Link>{' '}
        <Link to="/associates">Associates</Link>{' '}
        <Link to="/testimonials">Testimonials</Link>{' '}
        <Link to="/celebrityclients">Celebrity Clients</Link>{' '}
      </nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={()=> <Procedures procedures={procedures} /> } />
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures} {...props} />} />
        <Route path="/associates" component={Associates} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/celebrityclients" component={CelebrityClients} />
      </div>
    </Router>
  );
}

export default App;
