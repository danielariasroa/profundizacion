import React,{ Component } from 'react'

class Pub extends Component{
    constructor(props){
        super(props)
        this.state = {
            pub: props.pub,
        }
    }
    render (){
        return (
          <section className="py-5">
          <div className="container">
              <div className="row d-flex flex-row justify-content-center">
                  <div className="col-md-3">
                      <div className="card text-center border-primary">
                          <div className="card-body">
                              <h3>Publicacion 1</h3>
                              <p>
                                  PUBLICACION RANDOM
                              </p>
                              <a href="#" class="btn btn-primary">Más info</a>

                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                          <div className="card text-center border-primary">
                                  <div className="card-body">
                                      <h3>Publicacion 2</h3>
                                      <p>
                                        PUBLICACION RANDOM                                        
                                      </p>
                                      <a href="#" class="btn btn-primary">Más info</a>

                                  </div>
                          </div>
                  </div>
                  <div className="col-md-3">
                          <div className="card text-center border-primary">
                                  <div className="card-body">
                                      <h3>Publicacion 3</h3>
                                      <p>
                                         PUBLICACION RANDOM
                                      </p>
                                      <a href="#" class="btn btn-primary">Más info</a>

                                  </div>
                          </div>
                  </div>                
              </div>            
          </div>
      </section>
            
            
          
             
    




        )
    }
}
export default Pub