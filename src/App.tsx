import React from 'react';
import logo from './logo.svg';
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

class ControlButtons extends React.Component<any, any> {
    onClickButton: any

    constructor(props: any) {
        super(props);
        this.onClickButton = props.onClickButton
    }


    render() {
        if (this.props.state.showAnswer) {
            return (
                <Container>
                    <Row>
                        <Col sm={1}>
                            <Button onClick={this.onClickButton}>hide all answers</Button>
                        </Col>
                    </Row>
                </Container>
            )

        } else {
            return (
                <Container>
                    <Row>
                        <Col sm={1}>
                            <Button onClick={this.onClickButton}>show all answers</Button>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
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
        if (this.props.state.showAnswer) {
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
                    <Col lg={5}>
                        <WhiteBoard/>
                    </Col>
                    <Col lg={4}>
                        <Answer answer={this.props.answer}/>
                    </Col>
                    <Col lg={1}>
                        <SelfCheckButtons/>
                    </Col>
                </Row>
            )
        } else {
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
                    <Col lg={5}>
                        <WhiteBoard/>
                    </Col>
                </Row>
            )
        }
    }
}


class ProblemTable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        var compiledlines = this.props.state.programs.map((problem:Program,
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
            programs: ProgramGenerator.generate()
        }
    }

    onClickButton() {
        this.setState({showAnswer: !this.state.showAnswer})
        console.log("App", "onClickButton", this.state)
    }

    render() {
        return (
            <div className="App">
                <ControlButtons state={this.state} onClickButton={this.onClickButton.bind(this)}/>
                <ProblemTable state={this.state}/>
            </div>
        );
    }
}

export default App;
