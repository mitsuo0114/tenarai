import {MathQuestionData} from "../questiondata"


class MathQuestionDataGenerator {
    static getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static getRandomRange(min: number, max: number, exclude: Array<number> = []) {
        var k = MathQuestionDataGenerator.getRandomInt(max - min) + min
        while (exclude.includes(k)) {
            k = MathQuestionDataGenerator.getRandomInt(max - min) + min
        }
        return k
    }


    static generate_basic_plus(): MathQuestionData {
        var a = MathQuestionDataGenerator.getRandomInt(10);
        var b = MathQuestionDataGenerator.getRandomInt(10);
        return new MathQuestionData("計算せよ", "",
            String(a) + "+" + String(b), String(a + b))
    }

    static generate_basic_minus(): MathQuestionData {
        var a = MathQuestionDataGenerator.getRandomInt(10);
        var b = MathQuestionDataGenerator.getRandomInt(10);
        return new MathQuestionData("計算せよ", "",String(a) + "-" + String(b), String(a - b))
    }

    static generate_basic_mul(): MathQuestionData {
        var a = MathQuestionDataGenerator.getRandomInt(10);
        var b = MathQuestionDataGenerator.getRandomInt(10);
        return new MathQuestionData("計算せよ", "",String(a) + "\\times" + String(b), String(a * b))
    }

    static generate_basic_div(): MathQuestionData {
        var a = MathQuestionDataGenerator.getRandomInt(9);
        var b = MathQuestionDataGenerator.getRandomInt(9);
        a += 1
        b += 1
        var k = a * b
        return new MathQuestionData("計算せよ", "",String(k) + "\\div" + String(b), String(a))
    }

    static _quadraticequation_text(a: number, b: number, c: number) {
        var text = ""
        if (a !== 1) {
            if (a === -1) {
                text += "-"
            } else {
                text += String(a)
            }
        }
        text += "x^2"

        if (b !== 0) {
            if (b > 0) {
                text += "+"
            }
            if (b !== 1) {
                if (b === -1) {
                    text += "-"
                } else {
                    text += String(b)
                }
            }
            text += "x"
        }
        if (c > 0) {
            text += "+"
        }
        text += String(c)
        return text
    }

    static _linerequation_text(a: number, b: number) {
        var text = ""
        if (a !== 0) {
            if (a !== 1) {
                if (a === -1) {
                    text += "-"
                } else {
                    text += String(a)
                }
            }
            text += "x"
        }
        if (b > 0) {
            text += "+"
        }
        text += String(b)
        return text

    }

    static generate_basic_quadraticequation(): MathQuestionData {
        var x1 = MathQuestionDataGenerator.getRandomRange(-9, 9, [0]);
        var x2 = MathQuestionDataGenerator.getRandomRange(-9, 9, [0]);
        var b = x1 + x2
        var c = x1 * x2
        var text = MathQuestionDataGenerator._quadraticequation_text(1, b, c)
        text += "=0"


        var answer = "x=" + String(-x1)
        if (x1 !== x2) {
            answer += ", " + String(-x2)
        }

        return new MathQuestionData(
            "次の方程式を解け",
            "",
            text,
            answer
        )

    }

    static generate_basic_quadraticequation_extract(): MathQuestionData {
        var x1 = MathQuestionDataGenerator.getRandomRange(-9, 9, [0]);
        var x2 = MathQuestionDataGenerator.getRandomRange(-9, 9, [0]);
        var x3 = MathQuestionDataGenerator.getRandomRange(-9, 9, [0]);
        var x4 = MathQuestionDataGenerator.getRandomRange(-9, 9, [0]);

        var text = "(" + MathQuestionDataGenerator._linerequation_text(x1, x2) + ")"
        text += "(" + MathQuestionDataGenerator._linerequation_text(x3, x4) + ")"

        var a = (x1 * x3)
        var b = (x1 * x4 + x2 * x3)
        var c = (x2 * x4)
        return new MathQuestionData("展開せよ",
            "",
            text,
            MathQuestionDataGenerator._quadraticequation_text(a, b, c))

    }

    static generate_basic_sin(): MathQuestionData {
        var text = "sin 30^{o}"
        var ans = "\\frac{1}{2}"
        return new MathQuestionData("単位円上での値を書け",
            "",
            text,
            ans
        )
    }
}

export {MathQuestionDataGenerator}