import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <nav>
      <ul>
        <li><Link to="/HomePage">Home</Link></li> {/* Link to the Home page */}
        <li><Link to="/SalesPage">Sales</Link></li> {/* Link to the Sales page */}
      </ul>
    </nav>
  );
}

export default NavBar;
