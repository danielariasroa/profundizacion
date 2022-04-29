import React,{ Component } from 'react'

class Crear extends Component{
    constructor(props){
        super(props)
        this.state = {
            crear: props.crear,
        }
    }
    render (){
        return(
            <body class="bg-light">
            <div class="container">
          <div class="py-5 text-center">
        
            <h2>Creacion de Cursos</h2>
            <p class="lead">Aqui puedes crear el curso que desees así como inscribir a los estudiantes de tu salón.</p></div>
        
          <div class="row">
        
        
        
            </div>
            <div class="col-md-8 order-md-1">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="CursoName">Nombre del curso</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                  </div>
                </div>
        
                <div class="mb-3">
        
                  <div class="input-group-prepend">
                        <label for="CursoName">Descripcion del Curso</label>
                      </div>
                      <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
        
               
                <button class="btn btn-primary btn-lg btn-block" type="submit">Crear curso</button>
        
            </div>
          </div>
        
        </body>
        
            
          
             
    




        )}   
}
export default Crear