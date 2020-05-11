import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from "firebase/app";
import "firebase/analytics";

import './App.css';
import {useDispatch} from "react-redux";
import {ProblemTable} from './component/problemtable'
import {ControlButtons} from './component/header'

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "CREATE_NEW_PROBLEMS"})
    });
    return (
        <div className="App">
            <ControlButtons/>
                <ProblemTable/>
            <ControlButtons/>
        </div>
    );
}

const firebaseConfig = {
    apiKey: "AIzaSyBxgSuF8mQzUPxEw6XgJGez638hV3yVnFQ",
    authDomain: "learning-platform-276600.firebaseapp.com",
    databaseURL: "https://learning-platform-276600.firebaseio.com",
    projectId: "learning-platform-276600",
    storageBucket: "learning-platform-276600.appspot.com",
    messagingSenderId: "760877950219",
    appId: "1:760877950219:web:932fbd2c81781343796e0e",
    measurementId: "G-M56M78BJ4R"
};
firebase.initializeApp(firebaseConfig);
export default App;
