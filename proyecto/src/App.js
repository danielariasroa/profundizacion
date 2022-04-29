import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Index from './view/Index'
import Subida from './view/Subida'
import Cursos from './view/Cursos'
import Creacion from './view/Creacion'
import Perfil from './view/Perfil'

import './css/main.css';



class App extends Component  {
    render(){
      return (
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/Subida' component={Subida} />
          <Route exact path='/Cursos' component={Cursos} />
          <Route exact path='/Creacion' component={Creacion} />
          <Route exact path='/Datos' component={Perfil} />
        </Switch>

      </Router>

      )
    }
  }


export default App
