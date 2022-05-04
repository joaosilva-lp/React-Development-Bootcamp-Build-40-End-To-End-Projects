import React from "react";
import "./Header.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className="header">
       <Link to="/" style={{textDecoration:"none"}}>
          <div className="header_logo">
            <StorefrontIcon className="header_logoImage" fontSize="larger"/>
            <h2 className="header_logoTitle">eShop</h2>
          </div>
        </Link>
        
      
      <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className='header_searchIcon' />
      </div>


      <div className="header_nav">
        <div className="nav_item">
        <span className="nav_itemLineOne">Hello Guest</span>
        <span className="itemLineTwo">Sign In</span>
        </div>
      </div>

      <div className="nav_item">
        <span className="nav_itemLineOne">Your</span>
        <span className="itemLineTwo">Shop</span>
      </div>

      <Link to="/checkout" style={{textDecoration:"none"}}>
        <div className="nav_item">
          <ShoppingBasketIcon className="itemBasket"/>
          <span className="itemLineTwo nav_basketCount">0</span>
        </div>

      </Link>

    </div>
  );
}

export default Header;