import { Injectable } from "@nestjs/common";
import { ElectionPromisesAnswerRepository } from "../../domain/repositories/election-promises-answer.repository";
import { ElectionPromise } from "../../domain/election-promise.entity";
import { ElectionPromiseAnswer, ElectionPromiseAnswerDto } from "../../domain/election-promise-answer.entity";

@Injectable()
export class MongoElectionPromiseAnswerRepository implements ElectionPromisesAnswerRepository{
    saveElectionPromiseAnswer: (electionPromiseAnswer: ElectionPromiseAnswer) => {

    };

    ofId(electionPromiseId: string):null|ElectionPromiseAnswerDto{
        return null
    }
    
}