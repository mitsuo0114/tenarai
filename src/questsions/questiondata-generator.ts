import {MathQuestionDataGenerator} from "./math/mathQuestionGenerator";

class QuestionData {
    questiontext: string;
    questionmathtext: string;
    answer: string;
    answermathtext: string;

    constructor(questiontext: string, mathtext: string, answertext: string) {
        this.questiontext = questiontext;
        this.questionmathtext = mathtext;
        this.answer = answertext;
        this.answermathtext = answertext;
    }

}

class QuestionDataGenerator {

    static generate(): Array<QuestionData> {
        const ret = [
            MathQuestionDataGenerator.generate_basic_quadraticequation_extract(),
            MathQuestionDataGenerator.generate_basic_quadraticequation(),
            MathQuestionDataGenerator.generate_basic_quadraticequation_extract(),
            MathQuestionDataGenerator.generate_basic_quadraticequation(),
            MathQuestionDataGenerator.generate_basic_quadraticequation_extract(),
            MathQuestionDataGenerator.generate_basic_quadraticequation(),
            MathQuestionDataGenerator.generate_basic_quadraticequation_extract(),
            MathQuestionDataGenerator.generate_basic_quadraticequation(),
            MathQuestionDataGenerator.generate_basic_quadraticequation_extract(),
            MathQuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_plus(),
            // QuestionDataGenerator.generate_basic_plus(),
            // QuestionDataGenerator.generate_basic_minus(),
            // QuestionDataGenerator.generate_basic_minus(),
            // QuestionDataGenerator.generate_basic_mul(),
            // QuestionDataGenerator.generate_basic_mul(),
            // QuestionDataGenerator.generate_basic_div(),
            // QuestionDataGenerator.generate_basic_div(),
            // QuestionDataGenerator.generate_basic_quadraticequation_extract(),
            // QuestionDataGenerator.generate_basic_quadraticequation_extract(),
            // QuestionDataGenerator.generate_basic_quadraticequation_extract(),
            // QuestionDataGenerator.generate_basic_quadraticequation_extract(),
            // QuestionDataGenerator.generate_basic_sin(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
            // QuestionDataGenerator.generate_basic_quadraticequation(),
        ];
        return ret;
    }

}

export {QuestionData, QuestionDataGenerator}