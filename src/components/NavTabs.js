import React from 'react';

const style ={
  background:{
    backgroundColor: "#92a8d1"
  }
}

function NavTabs({ handlePageChange }) {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between" style={style.background}>
    <h1 className="darkb" > Yeonseo </h1>
    <ul className="nav ">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className='nav-link darkb'
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className= 'nav-link darkb'
        >
          Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className='nav-link darkb'
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://docs.google.com/document/d/1XHjBgLYuT3Nn6uJftS2f96VGXuY24DDjjiGYGniTjvs/edit?usp=sharing" target="blank"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className='nav-link darkb'
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
