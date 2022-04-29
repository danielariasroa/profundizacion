import React,{ Component } from 'react'
import Nada from '../img/VA.jpeg'
import Jv from '../img/java.png'
import Is from '../img/html.png'


class Materias extends Component{
    constructor(props){
        super(props)
        this.state = {
            materias: props.materias,
        }
    }
    render (){
        return (
          <div className="container">

          <div className="row">
            <div className="col-md-4">
                    
              <div className="card mb-4 shadow-sm">
              <img src={Nada} alt=" Imagen del Producto"  
                            className="img-fluid d-none d-sm-block style=width:100% height=255" />
                 <div className="card-body">
                  <p className="card-text">Vision Artificial</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Abrir</button>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <img src={Jv} alt=" Imagen del Producto"  
                            className="img-fluid d-none d-sm-block style=width:100% height=255" />
                  <div className="card-body">
                    <p className="card-text">Preparacion en Java.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Abrir</button>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <img src={Is} alt=" Imagen del Producto"  
                    className="img-fluid d-none d-sm-block style=width:100% height=255"/>
                  <div className="card-body">
                    <p className="card-text">Ingenieria de Software Avanzada</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Abrir</button>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
    
              
                  </div>
                </div>   
        )}
  }
  export default Materias