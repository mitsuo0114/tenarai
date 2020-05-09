import * as firebase from "firebase";
import {ProgramGenerator} from "./program-generator";

function reducer(state: any, action: any): any {
    firebase.analytics().logEvent(action.type);

    if (action.type === "TOGGLE_ANSWER") {
        return {...state, showAnswer: !state.showAnswer}
    } else if (action.type === "TOGGLE_WHITEBOARD") {
        return {...state, showWhiteBoard: !state.showWhiteBoard}
    } else if (action.type === "CREATE_NEW_PROBLEMS") {
        return {...state, programs: ProgramGenerator.generate()}
    }

    return state
}

export {reducer}