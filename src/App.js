import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from './components/MiApi';
import React from 'react';

function App() {
  return (    
    <>
      <div className="App">
        <nav className="navbar bg-success">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Landing Page</span>
          </div>
        </nav>
        <h1 className="encabezado">Lista de Monedas y su valor en CLP</h1>
        <MiApi />
        <div className="text-center p-3 footer bg-success">
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/"> Jorge_Aguilar.com</a>
        </div>
      </div>
    </>
  );
}

export default App;
