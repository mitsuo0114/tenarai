import React from "react";
import Button from "react-bootstrap/Button";
import {WhiteBoardEventHandler} from "./whiteboard";

function Question(props: any) {
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(props.mathtext) + "&chs=30"
    return (
        <p className={"question"}>
            <pre>{props.question}</pre>
            <img src={url} alt={""}/>
        </p>
    );
}


function ProblemNum(props: any) {
    return (
        <p className={"problemnum"}>({props.num})</p>
    );
}


function Answer(props: any) {
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(props.answer) + "&chs=30"
    return (
        <p>
            <img src={url} alt={""}/>
        </p>
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