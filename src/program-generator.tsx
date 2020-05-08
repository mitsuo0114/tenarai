import React from "react";

class Program {
    question: string;
    mathtext: string;
    answer: string;

    constructor(question: string, text: string, answer: string) {
        this.question = question;
        this.mathtext = text;
        this.answer = answer;
    }

}

class ProgramGenerator {
    static getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static getRandomRange(min: number, max: number, exclude: Array<number> = []) {
        var k = ProgramGenerator.getRandomInt(max - min) + min
        while (exclude.includes(k)) {
            k = ProgramGenerator.getRandomInt(max - min) + min
        }
        return k
    }


    static generate_basic_plus(): Program {
        var a = ProgramGenerator.getRandomInt(10);
        var b = ProgramGenerator.getRandomInt(10);
        return new Program("計算せよ", String(a) + "+" + String(b), String(a + b))
    }

    static generate_basic_minus(): Program {
        var a = ProgramGenerator.getRandomInt(10);
        var b = ProgramGenerator.getRandomInt(10);
        return new Program("計算せよ",String(a) + "-" + String(b), String(a - b))
    }

    static generate_basic_mul(): Program {
        var a = ProgramGenerator.getRandomInt(10);
        var b = ProgramGenerator.getRandomInt(10);
        return new Program("計算せよ",String(a) + "\\times" + String(b), String(a * b))
    }

    static generate_basic_div(): Program {
        var a = ProgramGenerator.getRandomInt(9);
        var b = ProgramGenerator.getRandomInt(9);
        a += 1
        b += 1
        var k = a * b
        return new Program("計算せよ",String(k) + "\\div" + String(b), String(a))
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

    static generate_basic_quadraticequation(): Program {
        var x1 = ProgramGenerator.getRandomRange(-9, 9, [0]);
        var x2 = ProgramGenerator.getRandomRange(-9, 9, [0]);
        var b = x1 + x2
        var c = x1 * x2
        var text = ProgramGenerator._quadraticequation_text(1, b, c)
        text += "=0"


        var answer = "x=" + String(-x1)
        if (x1 !== x2) {
            answer += ", " + String(-x2)
        }

        return new Program(
            "次の方程式を解け",
            text,
            answer
        )

    }

    static generate_basic_quadraticequation_extract(): Program {
        var x1 = ProgramGenerator.getRandomRange(-9, 9, [0]);
        var x2 = ProgramGenerator.getRandomRange(-9, 9,[0]);
        var x3 = ProgramGenerator.getRandomRange(-9, 9,[0]);
        var x4 = ProgramGenerator.getRandomRange(-9, 9,[0]);

        var text = "(" + ProgramGenerator._linerequation_text(x1, x2) + ")"
        text += "(" + ProgramGenerator._linerequation_text(x3, x4) + ")"

        var a = (x1 * x3)
        var b = (x1 * x4 + x2 * x3)
        var c = (x2 * x4)
        return new Program("展開せよ",
            text,
            ProgramGenerator._quadraticequation_text(a, b, c))

    }

    static generate_basic_sin(): Program {
        var text = "sin 30^{o}"
        var ans = "\\frac{1}{2}"
        return new Program("単位円上での値を書け",
            text,
            ans
        )
    }


    static generate(): Array<Program> {
        const ret = [
            ProgramGenerator.generate_basic_quadraticequation_extract(),
            ProgramGenerator.generate_basic_quadraticequation(),
            ProgramGenerator.generate_basic_quadraticequation_extract(),
            ProgramGenerator.generate_basic_quadraticequation(),
            ProgramGenerator.generate_basic_quadraticequation_extract(),
            ProgramGenerator.generate_basic_quadraticequation(),
            ProgramGenerator.generate_basic_quadraticequation_extract(),
            ProgramGenerator.generate_basic_quadraticequation(),
            ProgramGenerator.generate_basic_quadraticequation_extract(),
            ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_plus(),
            // ProgramGenerator.generate_basic_plus(),
            // ProgramGenerator.generate_basic_minus(),
            // ProgramGenerator.generate_basic_minus(),
            // ProgramGenerator.generate_basic_mul(),
            // ProgramGenerator.generate_basic_mul(),
            // ProgramGenerator.generate_basic_div(),
            // ProgramGenerator.generate_basic_div(),
            // ProgramGenerator.generate_basic_quadraticequation_extract(),
            // ProgramGenerator.generate_basic_quadraticequation_extract(),
            // ProgramGenerator.generate_basic_quadraticequation_extract(),
            // ProgramGenerator.generate_basic_quadraticequation_extract(),
            // ProgramGenerator.generate_basic_sin(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
            // ProgramGenerator.generate_basic_quadraticequation(),
        ];
        return ret;
    }

}

export {Program, ProgramGenerator}