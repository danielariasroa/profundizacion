import React, {Component} from 'react'
import Nav from '../component/Nav'
import Crear from '../component/Crear'
import Login from '../component/Login'
import '../css/main.css';
import Cabezote from '../component/Cabezote';


export class  Creacion extends Component {
    render(){
        return(
   
        <div>
        <Nav />
        <Cabezote />
        <Crear />

        
        </div>
    )}
}

export default Creacion