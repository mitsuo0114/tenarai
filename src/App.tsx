import React from 'react';
import './App.css';
import {Program, ProgramGenerator} from "./program-generator";
import {WhiteBoardEventHandler} from "./whiteboard";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

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

function ControlButtons(props: any) {
    var anstext = "show all answers"
    if (props.state.showAnswer) {
        anstext = "hide all answers"
    }
    var whiteboardtext = "disable whiteboards"
    if (!props.state.showWhiteBoard) {
        whiteboardtext = "enable whiteboards"
    }

    return (
        <Container>
            <Row>
                <Col sm={2}>
                    <Button onClick={props.toggleAnswer}>{anstext}</Button>
                </Col>
                <Col sm={2}>
                    <Button onClick={props.toggleWhiteBoard}>{whiteboardtext}</Button>
                </Col>
            </Row>
        </Container>
    )
}

function SelfCheckButtons(props: any) {
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

class ProblemLine extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Row>
                    <Col>
                        <ProblemNum num={this.props.num}/>
                    </Col>
                </Row>
                <Col lg={2}>
                    <Question mathtext={this.props.mathtext} question={this.props.question}/>
                </Col>
                {this.props.state.showWhiteBoard &&
                <Col lg={5}>
                    <WhiteBoard/>
                </Col>
                }
                {this.props.state.showAnswer &&
                <Col lg={4}>
                    <Answer answer={this.props.answer}/>
                </Col>
                }
                {this.props.state.showAnswer &&
                <Col lg={1}>
                    <SelfCheckButtons/>
                </Col>
                }
            </Row>
        )

    }
}


class ProblemTable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        var compiledlines = this.props.state.programs.map((problem: Program,
                                                           index: number) =>
            <ProblemLine num={index + 1}
                         mathtext={problem.mathtext}
                         question={problem.question}
                         answer={problem.answer}
                         state={this.props.state}/>
        );
        return (
            <Container fluid>
                {compiledlines}
            </Container>
        )
    }
}

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            showAnswer: false,
            showWhiteBoard: true,
            programs: ProgramGenerator.generate()
        }
    }

    toggleAnswer() {
        this.setState({showAnswer: !this.state.showAnswer})
    }

    toggleWhiteBoard() {
        this.setState({showWhiteBoard: !this.state.showWhiteBoard})
    }

    render() {
        return (
            <div className="App">
                <ControlButtons state={this.state}
                                toggleAnswer={this.toggleAnswer.bind(this)}
                                toggleWhiteBoard={this.toggleWhiteBoard.bind(this)}/>
                <ProblemTable state={this.state}/>
                <ControlButtons state={this.state}
                                toggleAnswer={this.toggleAnswer.bind(this)}
                                toggleWhiteBoard={this.toggleWhiteBoard.bind(this)}/>
            </div>
        );
    }
}

export default App;
