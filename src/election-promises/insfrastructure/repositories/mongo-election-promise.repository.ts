import { Injectable } from "@nestjs/common";
import { ElectionPromisesRepository } from "../../domain/repositories/election-promises.repository";
import { ElectionPromise } from "../../domain/election-promise.entity";

@Injectable()
export class MongoElectionPromiseRepository implements ElectionPromisesRepository{

    ofId(electionPromiseId: string):null|ElectionPromise{
        return null
    }
}