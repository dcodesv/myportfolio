import React from "react";
import "./styles/app.css";
import "./styles/Maintenance.css";
import "./App.css";
import "remixicon/fonts/remixicon.css";

//Imagenes
import imgComputer from './assets/img/computer.svg'

//Componentes
import Maintenance from "./components/Maintenance";

function App() {
  return (
    <div>
      <Maintenance 
        imgComputer={imgComputer}>
      </Maintenance>
    </div>
  );
}

export default App;
