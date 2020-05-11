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

export {QuestionData, MathQuestionData}