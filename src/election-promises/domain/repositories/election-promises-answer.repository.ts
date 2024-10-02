import { ElectionPromiseAnswer, ElectionPromiseAnswerDto } from "../election-promise-answer.entity";

export interface ElectionPromisesAnswerRepository {
    ofId:(electionPromiseId:string)=> ElectionPromiseAnswerDto|null
    saveElectionPromiseAnwer:(electionPromiseAnswer:ElectionPromiseAnswer)=>void
}