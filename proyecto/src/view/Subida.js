import React, { Component } from 'react'
import Nav from '../component/Nav'
import Archivos from '../component/Archivos'
import Login from '../component/Login'
import '../css/main.css';
import Cabezote from '../component/Cabezote';


export class Subida extends Component {
    render() {
        return (
        <div>
        <Nav />
        <Cabezote/>
        <Archivos />

        
        </div>
    )    }
}

export default Subida