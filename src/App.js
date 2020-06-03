import React from "react";
import "./styles/app.css";
import "./styles/Maintenance.css";
import "./App.css";
import "remixicon/fonts/remixicon.css";

//Imagenes
import Logo from "./logo.svg";
import LogoShade from './assets/img/logoshade.svg'
import imgComputer from './assets/img/computer.svg'

//Componentes
import Maintenance from "./components/Maintenance";

function App() {
  return (
    <div>
      <Maintenance 
        imgComputer={imgComputer}
        logo={Logo} 
        logoShade={LogoShade}>
      </Maintenance>
    </div>
  );
}

export default App;
