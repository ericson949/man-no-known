import { Id } from "../../../shared/vo/Id.vo"
import { ElectionPromiseAnswer } from "../../domain/election-promise-answer.entity"
import { ElectionPromisePriority } from "../../domain/enums/election-promise-priority.enum"
import { PromiseAnswer } from "../../domain/enums/promise-answer.enum"
import { ElectionPromisesAnswerRepository } from "../../domain/repositories/election-promises-answer.repository"
import { MongoElectionPromiseAnswerRepository } from "../../insfrastructure/repositories/mongo-election-promise-answer.repository"

describe("Feature save election promise answer",()=>{
    let repository :ElectionPromisesAnswerRepository
    beforeEach(()=>{
        repository = new MongoElectionPromiseAnswerRepository()
    })
    test("can save election promise answer ", ()=>{
        const electionPromiseAnswer = ElectionPromiseAnswer.create(
            new Id("election-promise-id"),
            new Id('elector-id-01'),
            ElectionPromisePriority.NORMAL,
            PromiseAnswer.YES
        )
        repository.saveElectionPromiseAnwer(electionPromiseAnswer);
        const testElectionPromiseAnswer  = ElectionPromiseAnswerModel.whereUuid(
            electionPromiseAnswer.toPrimitive().answerId
        )
        expect(testElectionPromiseAnswer).not.toBeNull()
    })
})