import { Injectable } from "@nestjs/common";
import { ElectionPromisesAnswerRepository } from "../../domain/repositories/election-promises-answer.repository";
import { ElectionPromise } from "../../domain/election-promise.entity";

@Injectable()
export class MongoElectionPromiseAnswerRepository implements ElectionPromisesAnswerRepository{

    ofId(electionPromiseId: string):null|ElectionPromise{
        return null
    }
}