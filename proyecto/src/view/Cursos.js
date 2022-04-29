import React, { Component } from 'react'
import Nav from '../component/Nav'
import Materias from '../component/Materias'
import '../css/main.css';
import Cabezote from '../component/Cabezote';


export class Cursos extends Component {
    render() {
        return (
        <div>
        <Nav />
        <Cabezote />
        <Materias />

        
        </div>
        )}
}

export default Cursos