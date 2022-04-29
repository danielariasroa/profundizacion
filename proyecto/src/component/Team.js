import React,{ Component } from 'react'

class Team extends Component{
    constructor(props){
        super(props)
        this.state = {
            team: props.team,
        }
    }
    render (){
        return (
            <section className="team text-center" >
            <div className="container py-5" >
                <h1 className="text-white">Equipo</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, deserunt.</p>
                <div className="row d-flex flex-row justify-content-center">
                   
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="img/person.png" class="img-fluid rounded-circle w-50" alt="Care verga 1" />
                                <h3>Daniel Arias</h3>
                                <p>Experto y apasionado </p>                            
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                            <div class="card">
                                <div class="card-body">
                                    <img src="img/person.png" class="img-fluid rounded-circle w-50" alt="Care verga 2" />
                                    <h3>Johan Valencia</h3>
                                    <p>Experto y apasionado.</p>
                                 
                                </div>
                            </div>
                    </div>
                    
                    
                </div>
            </div>
           
        </section>

            
          
             
    




        )
    }   
}
export default Team