import React, { Component } from 'react'


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            login: props.login,
            
        }
    }
    
    render (){
     
        return (
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
                
                  <div className="col-md-6 ">
                   
                                          
                       <button type="button" className="btn  btn-primary"  >Ingresar</button>
                      </div>
                     
                  </div>
                  </div>
              

                 
               </div>
            </div>
        
       
            </header>
            </main>

        )
    }
  }
export default Login;