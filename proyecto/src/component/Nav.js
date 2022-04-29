import React,{ Component } from 'react'
import { Redirect } from 'react-router-dom'
import Logo from '../img/goku.jpg'


class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
            nav: props.nav,
            redirect: undefined
        }
        this.onClick = this.onClick.bind(this)
    }
    async onClick(url){
        const pathname = window.location.pathname
        if (url !== pathname){
            this.setState({
              redirect: url
            })
        }
    }
    render (){
      if (this.state.redirect){
          return(
            <Redirect to={this.state.redirect} />
          )
      }
        return (
          <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <li class= "nav-item">
            <a class="nav-link" onClick={ () => this.onClick('/')}>ClassRoom</a>
            </li>
                          <form class="form-inline my-2 my-lg-0">
                
              </form>
              
            <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav ml-auto">            
                <li className="nav-item">
                  <a className="nav-link" onClick={() => this.onClick('/Subida')}>SUBIDA </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => this.onClick('/Cursos')}>CURSOS </a>
                </li>
          
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
                  <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <li className="nav-item">
                  <a className="nav-link" className="dropdown-item" onClick={() => this.onClick('/Datos')}>Perfil </a>
                </li>
                    <a class="dropdown-item" >Configuraciones</a>
                    <a class="dropdown-item" >Cerra Sesion</a>
                  </div>
                </li>
              </ul>


            </div>
          </nav>

        </header>



        )
    }
}
export default Nav