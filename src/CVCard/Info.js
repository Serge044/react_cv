import React from "react";
import SergePhoto from "/Users/serhiima/projects/CV_React/react-app/src/images/Serge-8bit.png";
import EmailIcon from "/Users/serhiima/projects/CV_React/react-app/src/images/mail.png";
import LinkedinIcon from "/Users/serhiima/projects/CV_React/react-app/src/images/linkedin.png";

export default function Info() {
  return (
    <div className="divInfo">
      <img src={SergePhoto} alt="Serge" className="sergePhoto" />
      <div className="infoTexts">
        <h1>Serge044</h1>
        <h3 className="fedText">Frontend Developer</h3>
        <h4 className="websiteText">serge044.website</h4>
      </div>
      <div className="buttonsLinks">
        <div className="emailLink">
          <img src={EmailIcon} alt="Email" className="emailIcon" />
          <p className="emailText">Email</p>
        </div>
        <div className="linkedinLink">
          <img src={LinkedinIcon} alt="LinkedIn" className="linkedinIcon" />
          <p className="linkedinText">LinkedIn</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
