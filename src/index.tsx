import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import About from './About';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {reducer} from './reducer'
import {Provider} from "react-redux";
import * as firebase from "firebase/app";
import "firebase/analytics";
import ScriptTag from "./component/ScriptTag";

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

const store = createStore(reducer,
    {
        showAnswer: false,
        showWhiteBoard: true,
        showLeftnav: true,
        isLefty: false,
        programs: []
    }
)
ReactDOM.render(
    <React.StrictMode>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
        />
        <ScriptTag src={"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_CHTML"} />
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'><App/></Route>
                    <Route exact path='/about'><About/></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
