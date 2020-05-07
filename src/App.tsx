import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProgramGenerator} from "./program-generator";
import {WhiteBoardEventHandler} from "./whiteboard";


function ProblemNum(props: any) {
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=(" + props.num + ")&chs=30"
    return (
        <td>
            <img className={"problemnum"} src={url}/>
        </td>
    );
}

function SmallProblem(props: any) {
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(props.mathtext) + "&chs=30"
    return (
        <td>
            <pre>{props.question}</pre>
            <img src={url}/>
        </td>
    );
}

function Answer(props: any) {
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(props.answer) + "&chs=30"
    return (
        <td>
            <img src={url}/>
        </td>
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

    componentDidMount(){
        this.handler.init()
    }

    render() {
        // because of passive property issue, I cannot setup touch event here.
        // https://github.com/facebook/react/issues/6436
        return (
            <td>
                <canvas ref={this.myRef}
                        onMouseDown={(event) => this.handler.onMouseDown(event)}
                        onMouseMove={(event) => this.handler.onMouseMove(event)}
                        onMouseUp={(event) => this.handler.onMouseUp(event)}
                        className="canvas" width="400px" height="200px"></canvas>
            </td>
        )
    }
}

function ControlButtons(props: any) {
    return (
        <td>
            <p>
                <button id="can">clear</button>
            </p>
            <p>
                <button id="can">show answer</button>
            </p>
        </td>
    )
}

function SelfCheckButtons(props: any) {
    return (
        <td>
            <p>
                <button id="can">OK</button>
            </p>
            <p>
                <button id="can">NG</button>
            </p>
        </td>
    )
}

function ProblemLine(props: any) {

    return (
        <tr>
            <ProblemNum num={props.num}/>
            <SmallProblem mathtext={props.mathtext} question={props.question}/>
            <WhiteBoard/>
            {/*<ControlButtons/>*/}
            <Answer answer={props.answer}/>
            <SelfCheckButtons/>
        </tr>
    )
}


function ProblemTable(props: any) {
    var problems = ProgramGenerator.generate();
    var compiledlines = problems.map((problem, index) =>
        <ProblemLine num={index + 1} mathtext={problem.mathtext} question={problem.question} answer={problem.answer}/>
    );
    return (
        <table>
            {compiledlines}
        </table>
    )
}

function App() {
    return (
        <div className="App">
            <ProblemTable/>
        </div>
    );
}

export default App;
