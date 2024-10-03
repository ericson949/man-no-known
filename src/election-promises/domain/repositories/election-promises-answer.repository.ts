import { ElectionPromiseAnswer, ElectionPromiseAnswerDto } from "../election-promise-answer.entity";

export interface ElectionPromisesAnswerRepository {
    ofId:(electionPromiseId:string)=> ElectionPromiseAnswerDto|null
    saveElectionPromiseAnswer:(electionPromiseAnswer:ElectionPromiseAnswer)=>void
}