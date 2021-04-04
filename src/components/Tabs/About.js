import React from 'react';


function About() {
  
  return (
      <div style={{height: 3000}}>
        <div className="px-3 d-flex justified-contend-between">
          <div className="profile-img my-1 text-center text-md-left">
              <i className="fas fa-user-circle" style={{ fontSize: "96px", }}></i>
          </div>
          <div className="pl-5">
            <p>
                I'm Vinh Tran, a full stack web developer who loves slick and intuitive webdesigns. I enjoy challenges from both frontend and backend aspect, from designing a user friendly wireframe, to writing efficient algorithms that handles edge cases.
              </p>
              <p>
                Specialized in minimalistic, user-friendly web interfaces that provides responsive functionality. User experience is number 1 priority whether I design my application.
              </p>
              <p style={{fontWeight: 'bold'}}>
                Please note that this website is a quick place holder and does not fully refects my works
              </p>
          </div>
            
        </div>
      </div>
  );
}

export default About;
