import { ElectionPromisePriority } from "./enums/election-promise-priority.enum";
import { PromiseAnswer } from "./enums/promise-answer.enum";

export interface ElectionPromiseAnswer {
    electionPromiseId:string;
    electorId:string;
    electionPromisePriority:ElectionPromisePriority
    answer:PromiseAnswer
}