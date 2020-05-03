import React, { useEffect, useState } from "react";

function About() {
  return (
    <div class='container'>
    <div class='row'>
        <div class='col-12 maincontent'>
    <h2>About Me</h2>
    <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHhHscfRSlL8g/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=0juudDZGJSQlmes9HyYAoly_r_5Xl47QxCymirwnsqg" />
    <a href='email:esugrad2004@gmail.com' target='_blank'>Email esugrad2004@gmail.com</a>
    <br/>
    <a href='tel:913-579-9070' target='_blank'>Call 913-579-9070</a>
    <br/>
    <br/>
    <p>Full Stack Web Developer with expertise in both Operations and the Human Side of Business.
        <br/>
        <br/>
Certificate from University of Kansas Professional Education in full stack web technologies including JavaScript, CSS, HTML, and Node.js. I also maintain a Senior Professional of Human Resources Certification (SPHR) from HRCI and received my MBA from UMKC. Additionally, I am sitting for my Project Management Professional Certification (PMP) exam in June 2020. 
<br/> 
<br/> I speak Coding, Operations, and HR, and I can bridge the gap in your projects among subject matter experts. Having mastered everything from program compliance audit creation to automated sorting system troubleshooting, I am the expert you’ve been searching for to achieve and exceed your organization’s project goals. My ability to bring the software and human sides together makes me a valuable addition to your technology team.
    </p>
   <br/> 
    <a href='https://github.com/ksaudra2010' target='_blank'>GitHub</a>
    <br/>
    <br/>
   <a href={`${process.env.PUBLIC_URL}/assets/images/Resume 2020.pdf`} target='_blank'>Resume</a>
   <br/>
   <br/>
   <a href='https://www.linkedin.com/in/audrakosinski' target='_blank'>Linked In</a>
</div></div></div>
  );
}

export default About;
