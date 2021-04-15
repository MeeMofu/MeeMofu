import React from 'react';

function Contact() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      label: 'Github',
      title:'My GitHub',
      size: '55px',
      link: "https://github.com/MeeMofu"
    },
    {
      name: "fab fa-linkedin",
      label: 'LinkedIn',
      title:'My LinkedIn',
      size: '58px',
      link: "https://www.linkedin.com/in/vinh-tran144/"
    },
    // {
    //   name: "fas fa-envelope",
    //   label: 'Email',
    //   title:'My email',
    //   size: '61.5px',
    //   link: "mailto: tranvinh144@gmail.com"
    // },
    {
      name: "fas fa-file-alt",
      label: 'Resume',
      title:'My resume',
      size: '55px',
      link: "https://docs.google.com/document/d/1HhRIBI9cc9M02e8jKl0jreRsBraAR4sO1XUuGLYFQ0U/edit?usp=sharing"
    }
  ]

  return (
    <footer>
      <div className="d-flex justify-content-center" style ={{padding:'33px 0px 14px 0px'}} >
        {icons.map(icon =>
        (
          <div className={'d-flex text-center justify-content-between flex-column'} key={icon.name} style={{height:81}}>
              <a href={icon.link} style={{fontSize:icon.size}} title={icon.title} target="_blank" rel="noopener noreferrer"><i className={`${icon.name}`}></i></a>
              <div style={{fontWeight:'bold',color:'var(--text-dark)',fontSize:'12px'}}>{icon.label}</div>
          </div>
        )
          )}

      </div>
      <div className ={'pt-2 pb-4'} style={{textAlign:'center', color:'var(--text-dark)'}}>
        <p className="m-1">Email me:</p>
        <p  style={{fontWeight:'bold'}}> tranvinh144@gmail.com</p>

      </div>
    </footer>
  );
}

export default Contact;
