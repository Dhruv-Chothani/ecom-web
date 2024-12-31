import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";



function Nav() {
  return (
    <div className="head">
      {/* <!-- Top Header --> */}
      <header className="top-header  ">
        <div className="container ">
          <div className="txt">
          <p>Welcome to electon-store Store</p>
          </div>
          <div className="account-section">
            <p>self account</p>
          </div>
        </div>
      </header>

      {/* <!-- Main Navigation --> */}
      <nav className="main-nav">
        <div className="container ">
          {/* <!-- Logo --> */}
          <div className="logo">
            <img src={require('./assets/asset0.png')} alt="Electon Logo" />
            {/* <h1>Electon</h1> */}
          </div>

          {/* <!-- Search Bar --> */}
          <div className="search-bar">
            <input type="text" placeholder="Find our product" />
            <button>Search</button>
          </div>

          {/* <!-- Icons --> */}
          <div className="icons">
            <div className="icon">
              <i className="heart-icon"></i>
              <span><FaRegHeart /></span>
            </div>
            <div className="icon">
              <i className="cart-icon"></i>
              <span><IoCartSharp /></span>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Bottom Navigation --> */}
      <nav className="bottom-nav ">
        <div className="container ">
          <ul className="nav-links aitem align">

            <div class="dropdown">
              <button class="btn btn-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span><GiHamburgerMenu /></span>  Top Categories
              </button>
              <ul class="dropdown-menu dropdown-menu-white">
                <li><a class="dropdown-item " href="/"><img src={require('./assets/asset 1.jpeg')} alt="" />Computer</a></li>
                <li><a class="dropdown-item " href="/"><img src={require('./assets/asset 2.jpeg')} alt="" />Phone</a></li>
                <li><a class="dropdown-item " href="/"><img src={require('./assets/asset 3.jpeg')} alt="" />Camera</a></li>
                <li><a class="dropdown-item " href="/"><img src={require('./assets/asset 19.jpeg')} alt="" />Refrigerator</a></li>
                <li><a class="dropdown-item " href="/"><img src={require('./assets/asset 20.jpeg')} alt="" />Speaker</a></li>
               
              </ul>
            </div>


            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li ><Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link></li>
            <li>Collection</li>
            <li>Blogs</li>
            <li>Pages</li>
            <li className="hot-item">
              Buy Electon <span>HOT</span>
            </li>
          </ul>
        </div>
      </nav>


    </div>
  );
}

export default Nav;
