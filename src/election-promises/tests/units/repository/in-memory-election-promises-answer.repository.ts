import { ElectionPromiseAnswer } from "../../../domain/election-promise-answer.entity"

export class InMemoryElectionPromisesAnswerRepository {
    answers = Array<ElectionPromiseAnswer>()
    public ofId(electionPromiseId:string): null|ElectionPromiseAnswer {
        return this.answers.find(e=> e.electionPromiseId === electionPromiseId)??null   
    }
}