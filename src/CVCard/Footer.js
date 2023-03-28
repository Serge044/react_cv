import React from "react";

import TwitterLogo from "/Users/serhiima/projects/CV_React/react-app/src/images/twitter.png";
import FacebookLogo from "/Users/serhiima/projects/CV_React/react-app/src/images/facebook.png";
import InstagramLogo from "/Users/serhiima/projects/CV_React/react-app/src/images/instagram.png";
import GithubLogo from "/Users/serhiima/projects/CV_React/react-app/src/images/github.png";

export default function Footer() {
  return (
    <div className="divFooter">
      <img src={TwitterLogo} alt="Twitter" className="twitterLogo" />
      <img src={FacebookLogo} alt="Facebook" className="facebookLogo" />
      <img src={InstagramLogo} alt="Instagram" className="instagramLogo" />
      <img src={GithubLogo} alt="Github" className="githubLogo" />
    </div>
  );
}
