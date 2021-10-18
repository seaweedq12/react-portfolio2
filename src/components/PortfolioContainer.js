import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import '../styles/Style.css';

document.body.style.backgroundColor = "#034f84";
document.body.style.backgroundColor = "#034f84";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="padding">
      {renderPage()}
      </div>
      <Footer/>
    </div>
  );
}
