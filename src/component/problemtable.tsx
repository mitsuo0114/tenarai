import {useSelector} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Answer, ProblemNum, Question, SelfCheckButtons, WhiteBoard} from "./question";
import {QuestionData} from "../questsions/questiondata";
import Container from "react-bootstrap/Container";
import React from "react";

function ProblemLine(props: any) {
    const showAnswer = useSelector((state: any) => state.showAnswer)
    const showWhiteBoard = useSelector((state: any) => state.showWhiteBoard)
    const isLefty = useSelector((state: any) => state.isLefty)
    if (!isLefty) {
        return (
            <Row>
                {props.problemnum}
                <Col lg={2}> {props.question}</Col>
                {showWhiteBoard && <Col lg={4}><WhiteBoard/></Col>}
                <Col lg={4}>{showAnswer && props.answer}</Col>
                <Col lg={1}>{showAnswer && <SelfCheckButtons/>}</Col>
            </Row>
        )
    } else {
        return (
            <Row>
                {props.problemnum}
                <Col lg={1}>{showAnswer && <SelfCheckButtons/>}</Col>
                <Col lg={4}>{showAnswer && props.answer}</Col>
                {showWhiteBoard && <Col lg={4}><WhiteBoard/></Col>}
                <Col lg={2}>{props.question}</Col>
            </Row>
        )
    }

}


function ProblemTable() {
    const programs = useSelector((state: any) => state.programs)

    var compiledlines = programs.map((problem: QuestionData,
                                      index: number) =>
        <ProblemLine
            problemnum={<Row><Col><ProblemNum num={index + 1}/></Col></Row>}
            question={<Question problem={problem}/>}
            answer={<Answer problem={problem}/>}
        />
    );
    return (
        <Container fluid>
            {compiledlines}
        </Container>
    )
}

export {ProblemLine, ProblemTable}
