class QuestionData {
    questiontext: string
    answertext: string

    constructor(questiontext: string, answertext: string) {
        this.questiontext = questiontext;
        this.answertext = answertext;
    }

}

class MathQuestionData extends QuestionData {
    questionmathtext: string
    answermathtext: string

    constructor(questiontext: string,
                answertext: string,
                questionmathtext: string,
                answermathtext: string) {
        super(questiontext, answertext)
        this.questionmathtext = questionmathtext;
        this.answermathtext = answermathtext;
    }

}


class KanjiQuestionData extends QuestionData {
    questionpretext: string
    answertextimage: string

    constructor(questiontext: string,
                answertext: string,
                questionpretext: string,
                answerpretext: string) {
        super(questiontext, answertext)
        this.questionpretext = questionpretext;
        this.answertextimage = answerpretext;
    }

}
export {QuestionData, MathQuestionData, KanjiQuestionData}