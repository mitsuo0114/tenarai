import * as firebase from "firebase";
import {QuestionDataGenerator} from "./questsions/questiondata-generator";

function reducer(state: any, action: any): any {
    firebase.analytics().logEvent(action.type);
    console.log(action.type)

    if (action.type === "TOGGLE_ANSWER") {
        return {...state, showAnswer: !state.showAnswer}
    } else if (action.type === "TOGGLE_WHITEBOARD") {
        return {...state, showWhiteBoard: !state.showWhiteBoard}
    } else if (action.type === "TOGGLE_LEFTY") {
        return {...state, isLefty: !state.isLefty}
    } else if (action.type === "CREATE_NEW_PROBLEMS") {
        return {...state, programs: QuestionDataGenerator.generate(action.problem_type)}
    } else if (action.type === "CLOSE_LEFTNAV"){
        return {...state, showLeftnav: false}
    } else if (action.type === "TOGGLE_LEFTNAV"){
        return {...state, showLeftnav: !state.showLeftnav}
    }

    return state
}

export {reducer}