import { ElectionPromise } from "../election-promise.entity";

export interface ElectionPromisesRepository {
    ofId:(electionPromiseId:string)=> ElectionPromise|null
}