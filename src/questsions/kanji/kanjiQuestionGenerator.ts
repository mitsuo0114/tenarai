import {KanjiQuestionData} from "../questiondata"
import kanjidata from './kanjidata.json'

class KanjiQuestionDataGenerator {
    static getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static getRandomRange(min: number, max: number, exclude: Array<number> = []) {
        var k = KanjiQuestionDataGenerator.getRandomInt(max - min) + min
        while (exclude.includes(k)) {
            k = KanjiQuestionDataGenerator.getRandomInt(max - min) + min
        }
        return k
    }


    static generate_basic(): KanjiQuestionData {
        const questionSet = kanjidata.kanjidata
        console.log(questionSet.length)
        const i = KanjiQuestionDataGenerator.getRandomRange(0, questionSet.length, [])

        return new KanjiQuestionData("カタカナを漢字に直せ", "",
            questionSet[i][0], questionSet[i][1])
    }

}

export {KanjiQuestionDataGenerator}