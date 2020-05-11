import React from "react";
import Button from "react-bootstrap/Button";
import {WhiteBoardEventHandler} from "./whiteboard";

function Question(props: any) {
    const problem = props.problem
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(problem.questionmathtext) + "&chs=30"
    return (
        <p className={"question"}>
            <pre>{problem.questiontext}</pre>
            <img src={url} alt={""}/>
        </p>
    );
}


function Answer(props: any) {
    const problem = props.problem
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(problem.answermathtext) + "&chs=30"
    return (
        <p>
            <img src={url} alt={""}/>
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