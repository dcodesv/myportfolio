import React from "react";

function Maintenance(props) {
  const { imgComputer } = props;
  const urlFigma = 'https://www.figma.com/proto/x8I3v0iZSHM5kIxkPQeUsW/Rebranding-Web-Portfolio-V2?node-id=124%3A36&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=124%3A36&show-proto-sidebar=1'
  const urlPortfolio = 'portfolio-diego-villalobos.pdf'

  const social = {
    github: "https://github.com/dcodesv",
    linkedin: "https://www.linkedin.com/in/diegocodesv/",
    twitter: "https://twitter.com/diegocodesv",
  };
  const imgLogo = 'diegocodesv.png'

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
          ? "maintenance-container color-mode relative flex justify-center items-center lg:justify-start lg:items-start h-full flex-col"
          : "maintenance-container light-mode relative flex justify-center items-center lg:justify-start lg:items-start h-full flex-col"
      }
    >
      <div className="top-bar flex justify-between items-center w-full box-border lg:px-16 lg:py-10 pt-6 pb-12 px-12">
        <img src={imgLogo} alt='Logo Diego Code SV' className="w-24 h-auto"/>
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
        className="logo-shade lg:w-1/5 w-1/3"
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
      <div className="content-container flex lg:flex-row flex-col justify-start items-center lg:justify-center lg:items-start w-full mb-24">
        <div className="content flex flex-col justify-center items-center lg:justify-center lg:items-start mt-0 lg:mt-12">
          <h1 className="text-up text-center text-xl md:text-2xl lg:text-right lg:text-3xl">
            Hello, I'm web
          </h1>
          <h2 className="text-down text-center text-3xl md:text-4xl lg:text-right lg:text-5xl">
            Developer.
          </h2>
          <span className="text-base mt-4 lg:mt-6 mb-2 font-normal">Follow me</span>
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
          alt="Dcodesv"
          className="computer w-1/3 md:w-1/4 lg:w-1/4 lg:ml-16 mt-8 lg:mt-0"
        />
      </div>

      <div className="flex justify-center items-center flex-col mx-auto">
        <h1 className='text-down tracking-normal font-bold mb-4 text-xl'>Portafolio en mantenimiento</h1>
        <p className='font-medium text-gray-600 w-8/12 text-center text-sm'>Estoy trabajando en una actualización mayor para mi portafolio en la cual incluiré algunos de mis proyectos y un par de cosas geniales.</p>
        <p className="font-medium text-gray-600 w-8/12 text-center text-sm mt-3">Por el momento, puedes echar un vistazo en el siguiente link: </p>
        <div className="flex justify-center items-center">
        <a className='flex justify-center items-center mt-10 mb-20 py-3 px-4 mx-2 bg-gray-600 hover:bg-black rounded-md text-white font-normal' href={urlPortfolio} rel="noopener noreferrer" target="_blank">Portafolio temporal <i className="ri-download-cloud-2-line ml-2"></i></a>
        <a className='flex justify-center items-center mt-10 mb-20 py-3 px-4 mx-2 bg-indigo-700 hover:bg-indigo-900 rounded-md text-white font-normal' href={urlFigma}>Portafolio en Figma <i className="ri-links-fill ml-2"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
