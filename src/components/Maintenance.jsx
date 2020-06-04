import React from "react";

function Maintenance(props) {
  const { logo, logoShade, imgComputer } = props;
  const social = {
    github: "https://github.com/dcodesv",
    linkedin: "https://www.linkedin.com/in/diegocodesv/",
    twitter: "https://twitter.com/diegocodesv"
  }
  return (
    <div className="maintenance-container relative flex justify-center items-center lg:justify-start lg:items-start h-screen flex-col">
      <div className="top-bar flex justify-between w-full box-border lg:p-20 pt-6 pb-12 px-12">
        <img src={logo} alt="DiegoCodeSV" className="lg:w-32 w-20"/>
      </div>
      {/**Este logo es shade */}
      <img src={logoShade} alt="" className="logo-shade lg:w-1/4 w-1/2"/>
      <div className="content-container flex lg:flex-row flex-col justify-start items-center lg:justify-center lg:items-start w-full h-full">
        <div className="content flex flex-col justify-center items-center lg:justify-center lg:items-start mt-0 lg:mt-12">
            <h1 className="text-up text-center text-2xl md:text-3xl lg:text-right lg:text-4xl">Hello, I'm web</h1>
            <h1 className="text-down text-center text-4xl md:text-5xl lg:text-right lg:text-6xl">Developer.</h1>
            <span className="text-base mt-4 lg:mt-6 mb-2">Follow me</span>
            <div className="social-media flex">
                <a href={social.twitter} className="mr-6 relative"><i className="ri-twitter-fill"></i></a>
                <a href={social.github} className="mr-6 relative"><i className="ri-github-fill"></i></a>
                <a href={social.linkedin} className="relative"><i className="ri-linkedin-fill"></i></a>
            </div>
        </div>
        <img src={imgComputer} alt="" className="w-1/2 md:w-1/3 lg:w-1/3 lg:ml-16 mt-8 lg:mt-0"/>
      </div>
    </div>
  );
}

export default Maintenance;
