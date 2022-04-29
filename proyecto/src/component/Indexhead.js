import React,{ Component } from 'react'
import { Redirect } from 'react-router-dom'



class Indexhead extends Component{
    constructor(props){
        super(props)
        this.state = {
            indexhead: props.indexhead,
            redirect: undefined
        }
        this.onClick = this.onClick.bind(this)
    }
    async onClick(url){
      const pathname = window.location.pathname
      if (url !== pathname){
          this.setState ({
         redirect: url
      })
      }
    }
    render (){
      if (this.state.redirec){
          return (
            <Redirect to={this.state.redirect} />
        )
      }
        return (
         <body>
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">ClassRoom</a>
        <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ">
              <a class="nav-link" onClick={() => this.onClick('/Subida')} >INICIO </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" onClick={() => this.onClick('/Cursos')}>REGISTRO </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" onClick={() => this.onClick('/Creacion')}>CREAR CURSO </a>
            </li>
      
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PUBLICACIONES</a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">Ciencia</a>
                <a class="dropdown-item" href="#">literatura</a>
                <a class="dropdown-item" href="#">lenguas</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar publicacion</button>
          </form>
        </div>
      </nav>
      
      <main role="main" class="text-center ">
      

        <header className="main header " >
          
        <div class="jumbotron">
          <div className= "row">
            <div className="col-md-6 justify-content-center align-self-center">
              
                            <h1 class="display-3 text-white texte center justifi-content-center align-self-center">ClassRoom</h1>
                            <p class="text-white">En esta pagina podrás encontrar ayuda escolar compartida directamente pro tus maestros, incluso encontraras otras publicaciones que otros maestros subieron</p>
                            <a href="#" class="btn btn-primary">Más info </a>
                                            
              </div> 
          
            <div className="col-mod-6" >
              <div className="container " className="text-left">
                  <form className="form-singin" >
                  
                  <h1 className= "h3 mb-3 font-weight-normal text-white">INGRESO</h1>
                  <label for="inputEmail" className="sr-only">Email address</label>
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                  <label for="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  </form>
                 </div>
                 
                  
                  <div className="container" >
                 <div className="row" >
                  <div className="col-md-6 ">
                   
                      <button className="btn btn-lg btn-primary btn-block" type="submit" >Ingresar</button>                      
                       <button type="button" className="btn btn-lg btn-primary btn-block"  >Registrarse</button>
                      </div>
                     
                  </div>
                  </div>
              </div>

                 
               </div>
            </div>
        
       
            </header>
            </main>
                
        </body> 
            
          
             
    




        )}
}
export default Indexhead