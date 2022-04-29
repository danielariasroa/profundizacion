import React from 'react'
import Pub from '../component/Pub'
import Nav from '../component/Nav'
import Team from '../component/Team'
import Login from '../component/Login'
import '../css/main.css';
import Indexhead from '../component/Indexhead';


function App(){
    return (
        <div>
        <Nav />
        <Login />
        <Pub />
        <Team />

        
        </div>
    );
}

export default App;