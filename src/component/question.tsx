import React from "react";
import Button from "react-bootstrap/Button";
import {WhiteBoardEventHandler} from "./whiteboard";
import { MathComponent } from 'mathjax-react'

function Question(props: any) {
    const problem = props.problem
    return (
        <p className={"question"}>
            <p>{problem.questiontext}</p>
            {problem.questionmathtext !== "" && <MathComponent tex={problem.questionmathtext} />}
            {problem.questionpretext && <pre>{problem.questionpretext}</pre>}
        </p>
    );
}


function Answer(props: any) {
    const problem = props.problem
    return (
        <p>
            {problem.answermathtext && <MathComponent tex={problem.answermathtext} />}
            {problem.answertextimage && <pre>{problem.answertextimage}</pre>}
        </p>
    );
}


function ProblemNum(props: any) {
    return (
        <p className={"problemnum"}>({props.num})</p>
    );
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


export {Question, ProblemNum, Answer, WhiteBoard, SelfCheckButtons}