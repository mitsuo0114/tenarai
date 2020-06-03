import React from "react";
import Button from "react-bootstrap/Button";
import {WhiteBoardEventHandler} from "./whiteboard";

function Question(props: any) {
    const problem = props.problem
    let url = ""
    if (problem.questionmathtext) {
        url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(problem.questionmathtext) + "&chs=30"
    }
    return (
        <p className={"question"}>
            <p>{problem.questiontext}</p>
            {url !== "" && <img src={url} alt={""}/>}
            {problem.questionpretext && <pre>{problem.questionpretext}</pre>}
        </p>
    );
    return (
        <div> {"\\(ax+b=0\\) \\[ x = -\\frac{b}{a} \\]"}</div>
    )
}


function Answer(props: any) {
    const problem = props.problem
    let url = ""
    if (problem.answermathtext) {
        url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(problem.answermathtext) + "&chs=30"
    }
    // TODO: change answertextimage to actual image instead of pre
    return (
        <p>
            {url && <img src={url} alt={""}/>}
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