import { ElectionPromise } from "../../../domain/election-promise.entity"

export class InMemoryElectionPromisesRepository {
    electionPromises = Array<ElectionPromise>()
    public ofId(electionPromiseId:string): null|ElectionPromise {
        return this.electionPromises.find(e=> e.id === electionPromiseId)??null   
    }
}