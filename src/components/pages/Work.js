import React, { useState } from 'react';




export default function Work() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);



  return (
    <div>
      <h1 className="lightb h1">Work</h1>
      <div class="container">
        <div class="row">
          <div className="col-12 col-md-6 bottom" 
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}>
            <div className={isShown1? 'image1op' : 'image1'}></div>
            {isShown1 && (
              <div className='d-flex flex-column pa'>
                <h3 className="fontup">HTML, JavaScript, APIs</h3>
                <a className="fontup" href="https://nem-ajvaz.github.io/Group_Project/">Group Project</a>
                <a className="fontup" href="https://github.com/Nem-Ajvaz/Group_Project">Repository Link</a>
              </div>
            )} 
          </div>
          <div className="col-12 col-md-6 bottom"
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)} >
            <div className={isShown2? 'image2op' : 'image2'}></div>
            {isShown2 && (
              <div className='d-flex flex-column pa'>
                <h3 className="fontup">JavaScript</h3>
                <a className="fontup" href="https://seaweedq12.github.io/code-quiz/">Code Quiz</a>
                <a className="fontup" href="https://github.com/seaweedq12/code-quiz">Repository Link</a>
              </div>
            )} 
          </div>
          <div className="col-12 col-md-6 bottom" 
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}>
            <div className={isShown3? 'image3op' : 'image3'}></div>
            {isShown3 && (
              <div className='d-flex flex-column pa'>
                <h3 className="fontup">JavaScript, APIs</h3>
                <a className="fontup" href="https://seaweedq12.github.io/weather-dashboard/">Weather Dashboard</a>
                <a className="fontup" href="https://github.com/seaweedq12/weather-dashboard">Repository Link</a>
              </div>
            )} 
          </div>
          <div className="col-12 col-md-6 bottom"
              onMouseEnter={() => setIsShown4(true)}
              onMouseLeave={() => setIsShown4(false)} >
            <div className={isShown4? 'image4op' : 'image4'}></div>
            {isShown4 && (
              <div className='d-flex flex-column pa'>
                <h3 className="fontup">Sequelize, Express</h3>
                <a className="fontup" href="https://cryptic-anchorage-55186.herokuapp.com/">Tech blog</a>
                <a className="fontup" href="https://github.com/seaweedq12/Tech-Blog">Repository Link</a>
              </div>
            )} 
          </div>
          </div>
        </div>
  </div>
  );
}
