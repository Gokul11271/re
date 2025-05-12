import React from 'react';

 // Optional: Add styles for the navbar

const Header = () => {
    return (
      // <nav className="navbar">
      //     <div className="logo">MyShop</div>
      //     <ul className="nav-links">
      //         <li><a href="#home">Home</a></li>
      //         <li><a href="#products">Products</a></li>
      //         <li><a href="#about">About</a></li>
      //         <li><a href="#contact">Contact</a></li>
      //     </ul>
      // </nav>
      <header className="header">
        <h1>
          logo
          <img src="D:\E-commerce\vite-project\src\img\ChatGPT Image May 12, 2025, 03_24_22 PM.png"></img>
        </h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    );
};

export default Header;