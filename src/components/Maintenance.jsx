import React from "react";

function Maintenance(props) {
  const { imgComputer } = props;

  const social = {
    github: "https://github.com/dcodesv",
    linkedin: "https://www.linkedin.com/in/diegocodesv/",
    twitter: "https://twitter.com/diegocodesv",
  };

  //Color and Light Mode
  const [colorMode, setColorMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("Color", JSON.stringify(colorMode));
  }, [colorMode]);

  function getInitialMode() {
    const isReturningUser = "Color" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("Color"));
    const userPreferColor = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPreferColor) {
      return true;
    } else {
      return false;
    }
    // eslint-disable-next-line
    return savedMode || false;
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: color-mode)").matches;
  }
  return (
    <div
      className={
        colorMode
          ? "maintenance-container color-mode relative flex justify-center items-center lg:justify-start lg:items-start h-screen flex-col"
          : "maintenance-container light-mode relative flex justify-center items-center lg:justify-start lg:items-start h-screen flex-col"
      }
    >
      <div className="top-bar flex justify-between w-full box-border lg:p-20 pt-6 pb-12 px-12">
        <svg
          className="lg:w-32 w-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 197.33 40"
        >
          <title>Recurso 5</title>
          <g id="logo" data-name="Capa 2">
            <g id="Capa_1-2" data-name="Capa 1">
              <path
                className="cls-1"
                d="M68.72,5.54H59.15a1,1,0,0,0-1,1V33.46a1,1,0,0,0,1,1h9.57c9.93,0,16.92-6,16.92-14.48S78.65,5.54,68.72,5.54Zm1.09,22.39H66.35a1,1,0,0,1-1-1V13.06a1,1,0,0,1,1-1h3.46c4.93,0,8.46,3.29,8.46,7.92S74.74,27.93,69.81,27.93Z"
              />
              <rect
                className="cls-1"
                x="91.41"
                y="5.54"
                width="7.2"
                height="28.92"
                rx="1"
              />
              <path
                className="cls-1"
                d="M113.21,13v2.5a1,1,0,0,0,1,1h12.15a1,1,0,0,1,1,1v4.45a1,1,0,0,1-1,1H114.21a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1h13.58a1,1,0,0,1,1,1v4.44a1,1,0,0,1-1,1H107a1,1,0,0,1-1-1V6.54a1,1,0,0,1,1-1h20.77a1,1,0,0,1,1,1V11a1,1,0,0,1-1,1H114.21A1,1,0,0,0,113.21,13Z"
              />
              <path
                className="cls-1"
                d="M149.07,17.87h11.18a1,1,0,0,1,1,1V29.55a1,1,0,0,1-.28.7A16.43,16.43,0,0,1,149.42,35c-8.55,0-15.7-6.87-15.7-15S140.87,5,149.42,5a16.67,16.67,0,0,1,11,4.18,1,1,0,0,1,0,1.5L156.72,14a1,1,0,0,1-1.35,0,8.66,8.66,0,0,0-6-2.44,8.44,8.44,0,0,0,0,16.88,8.73,8.73,0,0,0,4.34-1.2,1,1,0,0,0,.5-.87V24.3a1,1,0,0,0-1-1h-4.19a1,1,0,0,1-1-1V18.87A1,1,0,0,1,149.07,17.87Z"
              />
              <path
                className="cls-1"
                d="M181.75,5c-8.41,0-15.53,6.82-15.53,15s7.12,15,15.53,15,15.58-6.86,15.58-15S190.22,5,181.75,5Zm0,23.41A8.44,8.44,0,1,1,189.92,20,8.42,8.42,0,0,1,181.75,28.44Z"
              />
              <path
                className="cls-1"
                d="M23,1.43V8.09a1.43,1.43,0,0,1-1.43,1.43L11,9.55a.57.57,0,0,0-.57.57L10.38,21A1.43,1.43,0,0,1,9,22.37H1.43A1.43,1.43,0,0,1,0,20.94V1.43A1.43,1.43,0,0,1,1.43,0H21.52A1.43,1.43,0,0,1,23,1.43Z"
              />
              <path
                className="cls-1"
                d="M39.35,22.87c-.25,8.26-6,16.83-17.1,17.1-2.07.05-8.17,0-10.95,0a1.43,1.43,0,0,1-1.42-1.43V31.28a1.43,1.43,0,0,1,1.43-1.43h9.83a7.86,7.86,0,0,0,8.1-8.09V11.93a1.43,1.43,0,0,1,1.43-1.43h7.24a1.43,1.43,0,0,1,1.43,1.43Z"
              />
            </g>
          </g>
        </svg>
        <div
          className="toggle-button text-sm flex flex-row justify-center items-center cursor-pointer"
          onClick={() => setColorMode((prevMode) => !prevMode)}
        >
          <i className="ri-toggle-line mr-3 text-2xl"></i>
          {colorMode ? "Light Mode" : "Color Mode"}
        </div>
      </div>
      {/**Este logo es shade */}
      <svg
        className="logo-shade lg:w-1/4 w-1/2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 377.78 384"
      >
        <title>Recurso 6</title>
        <g id="logo-shade" data-name="Capa 2">
          <g id="Capa_1-2" data-name="Capa 1">
            <path
              className="cls-1"
              d="M220.28,13.71v64a13.72,13.72,0,0,1-13.67,13.71l-101,.32a5.5,5.5,0,0,0-5.47,5.46l-.58,104A13.71,13.71,0,0,1,85.9,214.78l-72.19,0A13.71,13.71,0,0,1,0,201V13.71A13.71,13.71,0,0,1,13.71,0H206.56A13.71,13.71,0,0,1,220.28,13.71Z"
            />
            <path
              className="cls-1"
              d="M377.78,219.53c-2.43,79.31-57.29,161.6-164.18,164.19-19.91.48-78.39.22-105.12.07a13.68,13.68,0,0,1-13.6-13.71V300.32a13.71,13.71,0,0,1,13.71-13.71H203c46.22,1.26,79.13-37.13,77.71-77.71l.14-94.39a13.72,13.72,0,0,1,13.71-13.7h69.55a13.71,13.71,0,0,1,13.71,13.72Z"
            />
          </g>
        </g>
      </svg>
      <div className="content-container flex lg:flex-row flex-col justify-start items-center lg:justify-center lg:items-start w-full h-full">
        <div className="content flex flex-col justify-center items-center lg:justify-center lg:items-start mt-0 lg:mt-12">
          <h1 className="text-up text-center text-2xl md:text-3xl lg:text-right lg:text-4xl">
            Hello, I'm web
          </h1>
          <h1 className="text-down text-center text-4xl md:text-5xl lg:text-right lg:text-6xl">
            Developer.
          </h1>
          <span className="text-base mt-4 lg:mt-6 mb-2">Follow me</span>
          <div className="social-media flex">
            <a href={social.twitter} className="mr-6 relative">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href={social.github} className="mr-6 relative">
              <i className="ri-github-fill"></i>
            </a>
            <a href={social.linkedin} className="relative">
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
        <img
          src={imgComputer}
          alt=""
          className="computer w-1/2 md:w-1/3 lg:w-1/3 lg:ml-16 mt-8 lg:mt-0"
        />
      </div>
    </div>
  );
}

export default Maintenance;
