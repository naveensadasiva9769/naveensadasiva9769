import React from 'react';
import {BrowserRouter ,Routes,Route,Link} from 'react-router-dom'
import FormRendering from './FormRendering';
import ListRendering from './ListRendering';
import StateinClassComponent from './StateinClassComponent';
import StateInFunctionalComponent from './StateInFunctionalComponent';

export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home1" element={<Main/>}></Route>
                <Route path="/home2" element={<ListRendering/>}></Route>
                <Route path="/home3" element={<FormRendering/>}></Route>
                <Route path="/home4" element={<StateInFunctionalComponent/>}></Route>
                <Route path="/home5" element={<StateinClassComponent/>}></Route>
                <Route path="/login" element={<FormRendering/>}></Route>
            

            </Routes>
            </BrowserRouter>
        </div>
    )
}

function Main(){
    return(
        <>
        <h1>::Home Page::</h1>
        <Link to="/login">Login</Link>
        </>
    )
}
