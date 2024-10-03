import { ElectionPromiseAnswer, ElectionPromiseAnswerDto } from "../../../domain/election-promise-answer.entity"
import { ElectionPromisesAnswerRepository } from "../../../domain/repositories/election-promises-answer.repository"

export class InMemoryElectionPromisesAnswerRepository implements ElectionPromisesAnswerRepository {
    answers :Map<string, ElectionPromiseAnswer>
    constructor(){
        this.answers = new Map<string, ElectionPromiseAnswer>()
    }
    public ofId(electionPromiseId:string): null|ElectionPromiseAnswerDto {
        return this.answers.get(electionPromiseId)?.toPrimitive()??null   
    }
    public saveElectionPromiseAnswer (electionPromiseAnswer: ElectionPromiseAnswer){
        this.answers.set(electionPromiseAnswer.toPrimitive().answerId, 
        electionPromiseAnswer
    )
    }
}