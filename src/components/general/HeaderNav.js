import React from 'react';

const HeaderNav = ( ) => (
	<nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSalestock" aria-controls="navbarSalestock" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-md-center" id="navbarSalestock">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Salestock</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/product">Product</a>
        </li>
        
      </ul>
    </div>
  </nav>
);

export default HeaderNav;
