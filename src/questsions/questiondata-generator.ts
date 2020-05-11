import {MathQuestionDataGenerator} from "./math/mathQuestionGenerator";
import {QuestionData} from "./questiondata";
import {KanjiQuestionDataGenerator} from "./kanji/kanjiQuestionGenerator";


class QuestionDataGenerator {

    static generate(): Array<QuestionData> {
        const ret = [
            KanjiQuestionDataGenerator.generate_basic(),
            KanjiQuestionDataGenerator.generate_basic(),
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

export {QuestionDataGenerator}