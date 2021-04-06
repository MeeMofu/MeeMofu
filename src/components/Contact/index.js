import React from 'react';

function Contact() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      title:'My GitHub',
      link: "https://github.com/MeeMofu"
    },
    {
      name: "fab fa-linkedin",
      title:'My LinkedIn',
      link: "https://www.linkedin.com/in/vinh-tran144/"
    },
    {
      name: "fas fa-envelope",
      title:'Email me',
      link: "mailto: tranvinh144@gmail.com"
    }
  ]

  return (
    <footer className="d-flex justify-content-center w-100" >
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} title={icon.title} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
     
    </footer>
  );
}

export default Contact;
