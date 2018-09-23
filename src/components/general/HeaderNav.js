import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ( ) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSalestock" aria-controls="navbarSalestock" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-md-center" id="navbarSalestock">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Salestock</Link>
        </li>
        <li className="nav-item">
          <Link to="/product">Product</Link>
        </li>
        
      </ul>
    </div>
  </nav>
);

export default HeaderNav;
