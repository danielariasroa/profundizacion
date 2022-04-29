import React,{ Component } from 'react'

class Datos extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos: props.datos,
        }
    }
    render (){
        return (
            <main role="main" class="text-center">

  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading text-white">Ajustes de cuenta</h1>
      
    </div>
  </section>
  <div class="container text-center">
  <div class="col-md-8 order-md-1">
    <h4 class="mb-3">Edita tus datos</h4>
    <form class="needs-validation" novalidate>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Nombre</label>
          <input type="text" class="form-control" id="firstName" placeholder="" value="" required></input>
          <div class="invalid-feedback">
            Valid first name is required.
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="lastName">Apellido</label>
          <input type="text" class="form-control" id="lastName" placeholder="" value="" required></input>
          <div class="invalid-feedback">
            Valid last name is required.
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label for="username">Usuario</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" id="username" placeholder="Username" required></input>
          <div class="invalid-feedback" style="width: 100%;">
            Your username is required.
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label for="email">Email <span class="text-muted">(obligatorio)</span></label>
        <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
        <div class="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>

      <div class="mb-3">
        <label for="address">Contraseña actual</label>
        <input type="text" class="form-control" id="address" placeholder="*********" required></input>
        <div class="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>
      <div class="mb-3">
        <label for="address">Nueva contraseña</label>
        <input type="text" class="form-control" id="address" placeholder="*********" required></input>
        <div class="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>

      <div class="mb-3">
        <label for="address2">confirmar contraseña <span class="text-muted">(obligatorio)</span></label>
        <input type="text" class="form-control" id="address2" placeholder="*********"></input>
      </div>

      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="country">Institucion</label>
          <select class="custom-select d-block w-100" id="country" required>
            <option value="">Institucion...</option>
            <option>Universidad</option>
            <option>Escuela secundaria</option>
            <option>Escuela primaria</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid country.
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="state">Ciudad</label>
          <select class="custom-select d-block w-100" id="state" required>
            <option value="">ciudad...</option>
            <option>Neiva</option>
          </select>
          <div class="invalid-feedback">
            Please provide a valid state.
          </div>
        </div>
        <div class="col-md-5 mb-5">
          <label for="zip">Nombre de la institucion</label>
          <input type="text" class="form-control" id="zip" placeholder="" required></input>
          <div class="invalid-feedback">
            Zip code required.
          </div>
        </div>
      </div>
      <hr class="mb-4"></hr>
     
      <hr class="mb-4"></hr>

      <h4 class="mb-3">Tipo de usuario</h4>

      <div class="d-block my-3">
        <div class="custom-control custom-radio">
          <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
          <label class="custom-control-label" for="credit">Estudiante</label>
        </div>
        <div class="custom-control custom-radio">
          <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required></input>
          <label class="custom-control-label" for="debit">Maestro</label>
        </div>
      
      </div>
    
      <hr class="mb-4"></hr>
      <button class="btn btn-primary btn-lg btn-block" type="submit">Confirmar datos</button>
      
      
      
    </form>
    </div>
  </div>
  </main>


            
          
             
    




        )
    }   
}
export default Datos