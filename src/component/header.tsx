import {useDispatch, useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";

function ControlButtons() {
    const showAnswer = useSelector((state: any) => state.showAnswer)
    const showWhiteBoard = useSelector((state: any) => state.showWhiteBoard)
    const isLefty = useSelector((state: any) => state.isLefty)

    var anstext = "show all answers"
    if (showAnswer) {
        anstext = "hide all answers"
    }
    var whiteboardtext = "disable whiteboards"
    if (!showWhiteBoard) {
        whiteboardtext = "enable whiteboards"
    }
    var leftytext = "change to lefty"
    if (isLefty) {
        leftytext = "change to righty"
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
                <Col sm={3}>
                    <Button onClick={() => {
                        dispatch({type: "TOGGLE_WHITEBOARD"})
                    }}>{whiteboardtext}</Button>
                </Col>
                <Col lg={2}>
                    <Button onClick={() => {
                        dispatch({type: "TOGGLE_LEFTY"})
                    }}>{leftytext}</Button>
                </Col>
                <Col sm={3}>
                    <Button onClick={() => {
                        dispatch({type: "CREATE_NEW_PROBLEMS"})
                    }}>Create new problems</Button>
                </Col>
            </Row>
        </Container>
    )
}
export {ControlButtons}