import React,{ Component } from 'react'

class Registro extends Component{
    constructor(props){
        super(props)
        this.state = {
            registro: props.registro,
        }
    }
    render (){
        return (
            <header class="main header" >
                <section className="jumbotron text-center">

                        <div className="container">
                            <h1 className="jumbotron-heading"></h1>
                            <form class="form-signin">
                                < img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                                <h1 class="h3 mb-3 font-weight-normal text-white">INGRESO</h1>
                                <label for="inputEmail" class="sr-only">Email /</label>>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
                                <label for="inputPassword" class="sr-only">Contraseña</label>
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                                <div class="checkbox mb-3">
                                    <label>
                                    <input type="checkbox" value="remember-me"> Recuerdame></input>
                                    </label>
                                </div>
                                <div class="container" >
                                    <div class="row" >
                                         <div class="col-md-6 ">
  
                                            <button class="btn btn-lg btn-primary btn-block" type="submit" >Ingresar</button>                      
                                             <button type="button" class="btn btn-lg btn-primary btn-block"  >Registrarse</button>
                                        </div>
                                    </div>
                                </div>

                                </form>
                            </div>
                    </section>

            </header>




        )}
    
}
export default Registro