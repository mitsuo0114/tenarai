import React, {useEffect} from 'react';
import './App.css';
import {Program} from "./program-generator";
import {WhiteBoardEventHandler} from "./whiteboard";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/analytics";
import {useDispatch, useSelector} from "react-redux";

function ProblemNum(props: any) {
    // const url = "https://chart.apis.google.com/chart?cht=tx&chl=(" + props.num + ")&chs=30"
    return (
        <p className={"problemnum"}>({props.num})
            {/*<img src={url}/>*/}
        </p>
    );
}

function Question(props: any) {
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(props.mathtext) + "&chs=30"
    return (
        <p className={"question"}>
            <pre>{props.question}</pre>
            <img src={url}/>
        </p>
    );
}

function Answer(props: any) {
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(props.answer) + "&chs=30"
    return (
        <p>
            <img src={url}/>
        </p>
    );
}

class WhiteBoard extends React.Component {
    myRef: any
    handler: any

    constructor(props: any) {
        super(props)
        this.myRef = React.createRef();
        this.handler = new WhiteBoardEventHandler(this.myRef)
    }

    componentDidMount() {
        this.handler.init()
    }

    render() {
        // because of passive property issue, I cannot setup touch event here.
        // https://github.com/facebook/react/issues/6436
        return (
            <canvas ref={this.myRef}
                    onMouseDown={(event) => this.handler.onMouseDown(event)}
                    onMouseMove={(event) => this.handler.onMouseMove(event)}
                    onMouseUp={(event) => this.handler.onMouseUp(event)}
                    className="canvas" width="400%" height="200px"/>
        )
    }
}

function ControlButtons() {
    const showAnswer = useSelector((state: any) => state.showAnswer)
    const showWhiteBoard = useSelector((state: any) => state.showWhiteBoard)

    var anstext = "show all answers"
    if (showAnswer) {
        anstext = "hide all answers"
    }
    var whiteboardtext = "disable whiteboards"
    if (!showWhiteBoard) {
        whiteboardtext = "enable whiteboards"
    }
    const dispatch = useDispatch()
    return (
        <Container>
            <Row>
                <Col sm={2}>
                    <Button onClick={() => {
                        dispatch({type: "TOGGLE_ANSWER"})
                    }}>{anstext}</Button>
                </Col>
                <Col sm={2}>
                    <Button onClick={() => {
                        dispatch({type: "TOGGLE_WHITEBOARD"})
                    }}>{whiteboardtext}</Button>
                </Col>
                <Col sm={2}>
                    <Button onClick={() => {
                        dispatch({type: "CREATE_NEW_PROBLEMS"})
                    }}>Create new problems</Button>
                </Col>
            </Row>
        </Container>
    )
}

function SelfCheckButtons() {
    return (
        <p>
            <p>
                <Button id="can" variant="success">OK</Button>
            </p>
            <p>
                <Button id="can" variant="danger">NG</Button>
            </p>
        </p>
    )
}

function ProblemLine(props: any) {
    const showAnswer = useSelector((state: any) => state.showAnswer)
    const showWhiteBoard = useSelector((state: any) => state.showWhiteBoard)

    return (
        <Row>
            <Row>
                <Col>
                    <ProblemNum num={props.num}/>
                </Col>
            </Row>
            <Col lg={2}>
                <Question mathtext={props.mathtext} question={props.question}/>
            </Col>
            {showWhiteBoard &&
            <Col lg={5}>
                <WhiteBoard/>
            </Col>
            }
            {showAnswer &&
            <Col lg={4}>
                <Answer answer={props.answer}/>
            </Col>
            }
            {showAnswer &&
            <Col lg={1}>
                <SelfCheckButtons/>
            </Col>
            }
        </Row>
    )

}


function ProblemTable() {
    const programs = useSelector((state: any) => state.programs)

    var compiledlines = programs.map((problem: Program,
                                      index: number) =>
        <ProblemLine num={index + 1}
                     mathtext={problem.mathtext}
                     question={problem.question}
                     answer={problem.answer}/>
    );
    return (
        <Container fluid>
            {compiledlines}
        </Container>
    )
}

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
