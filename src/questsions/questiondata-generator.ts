import {MathQuestionDataGenerator} from "./math/mathQuestionGenerator";
import {QuestionData} from "./questiondata";
import {KanjiQuestionDataGenerator} from "./kanji/kanjiQuestionGenerator";


class QuestionDataGenerator {

    static generate(problem_type: any): Array<QuestionData> {
        console.log(problem_type)
        if (problem_type) {
            if (problem_type.class === "math") {
                const g = MathQuestionDataGenerator;
                if (problem_type.subclass === "add_sub") {
                    return [
                        g.generate_basic_plus(),
                        g.generate_basic_minus(),
                        g.generate_basic_plus(),
                        g.generate_basic_minus(),
                        g.generate_basic_plus(),
                        g.generate_basic_minus(),
                        g.generate_basic_plus(),
                        g.generate_basic_minus(),
                        g.generate_basic_plus(),
                        g.generate_basic_minus(),
                    ]
                } else if (problem_type.subclass === "mul_div") {
                    return [
                        g.generate_basic_mul(),
                        g.generate_basic_div(),
                        g.generate_basic_mul(),
                        g.generate_basic_div(),
                        g.generate_basic_mul(),
                        g.generate_basic_div(),
                        g.generate_basic_mul(),
                        g.generate_basic_div(),
                        g.generate_basic_mul(),
                        g.generate_basic_div(),
                    ]
                } else if (problem_type.subclass === "factorization") {
                    return [
                        g.generate_basic_quadraticequation_extract(),
                        g.generate_basic_quadraticequation(),
                        g.generate_basic_quadraticequation_extract(),
                        g.generate_basic_quadraticequation(),
                        g.generate_basic_quadraticequation_extract(),
                        g.generate_basic_quadraticequation(),
                        g.generate_basic_quadraticequation_extract(),
                        g.generate_basic_quadraticequation(),
                        g.generate_basic_quadraticequation_extract(),
                        g.generate_basic_quadraticequation(),
                    ]
                } else if (problem_type.subclass === "matrix") {
                    return [
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                        g.generate_basic_matrix(),
                    ]
                } else if(problem_type.subclass === "perm_combi"){
                    return [
                        g.generate_basic_permutation(),
                        g.generate_basic_combination(),
                        g.generate_basic_factorial(),
                        g.generate_basic_permutation(),
                        g.generate_basic_combination(),
                        g.generate_basic_factorial(),
                        g.generate_basic_permutation(),
                        g.generate_basic_combination(),
                        g.generate_basic_factorial(),
                        g.generate_basic_combination()
                    ]
                }
            } else if (problem_type.class === "kanji") {
                if (problem_type.subclass === "samples") {
                    return [
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                        KanjiQuestionDataGenerator.generate_basic(),
                    ]
                }
            }
        }
        return []

        // QuestionDataGenerator.generate_basic_sin(),
    }

}

export {
    QuestionDataGenerator
}