import React,{ Component } from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            head: props.head,
        }
    }
    render (){
        return (
            <header>
                
              
              <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
        
                  <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>Talleres</strong>
                    <button type="button" className="btn btn-dark"></button>
                    <button type="button" className="btn btn-dark">Talleres</button>
                    <button type="button" className="btn btn-dark">Publicaciones</button>
                  </a>
                  <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      opciones
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Perfil</a>
                        <a className="dropdown-item" href="#">Cerrar Sesion</a>
                      </div>
                    </div>
                  </div>
                </div>
                
              
            </header>
            
            
          
             
    




        )
    }
}
export default Header