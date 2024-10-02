import { Id } from "../../shared/vo/Id.vo";
import { ElectionPromisePriority } from "./enums/election-promise-priority.enum";
import { PromiseAnswer } from "./enums/promise-answer.enum";

export interface ElectionPromiseAnswerDto {
    electionPromiseId:string;
    answerId:string
    electorId:string;
    electionPromisePriority:ElectionPromisePriority
    answer:PromiseAnswer
}

export class ElectionPromiseAnswer {
    private constructor(
        private answerId:Id,
        private electionPromiseId:Id,
        private electorId:Id,
        private electionPromisePriority:ElectionPromisePriority,
        private answer:PromiseAnswer
    ){

    }
    static create(
        electionPromiseId:Id,
        electorId:Id,
        electionPromisePriority:ElectionPromisePriority,
        answer:PromiseAnswer
    ){
        const answerId = new Id();
        return new this(
            answerId,
            electionPromiseId,
            electorId,
            electionPromisePriority,
            answer
        ) 
    }
    public toPrimitive():ElectionPromiseAnswerDto{
        return{
            electionPromiseId:this.electionPromiseId.value(),
            electorId:this.electorId.value(),
            electionPromisePriority:this.electionPromisePriority,
            answer:this.answer,
            answerId:this.answerId.value(),
        }
    }
}