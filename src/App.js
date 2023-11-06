import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'; // Import from the "components" folder
import SalesPage from './SalesPage'; // Import from the "components" folder
import Navigation from './Navigation'; // Import from the "components" folder

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={HomePage} /> {/* Route for Home page */}
        <Route exact path="/SalesPage" component={SalesPage} /> {/* Route for Sales page */}
      </div>
    </Router>
  );
}

export default App;
