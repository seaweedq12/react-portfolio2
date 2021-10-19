import React from 'react';

const styles ={
  style:{
    marginRight:"25px",
  }
}


function Footer() {
  return (
    <div className="footer">
      <ul className="d-flex flex-column flex-md-row " >
        <li style={styles.style}><a className="fontup" href="mailto: aldurq99@gmail.com">Email: aldurq99@gmail.com</a></li>
        <li style={styles.style}><a className="fontup" href="https://github.com/seaweedq12" target="blank">Github</a></li>
        <li style={styles.style}><a className="fontup" href="https://www.linkedin.com/in/yeonseo-choi-a64691212/" target="blank">linkedIn</a></li>
      </ul>
    </div> 
  );
}

export default Footer;
