import React, {useEffect} from 'react';

import './App.css';
import {useDispatch} from "react-redux";
import {ProblemTable} from './component/problemtable'
import {ControlButtons} from './component/header'
import {CommonNavBar} from "./component/CommonNavBar";
import {ProblemLeftNavBar} from "./component/ProblemLeftNavBar";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "CREATE_NEW_PROBLEMS"})
    });
    return (
        <div className="App">
            <CommonNavBar/>
            <ProblemLeftNavBar/>
            <ControlButtons/>
                <ProblemTable/>
            <ControlButtons/>
        </div>
    );
}

export default App;
