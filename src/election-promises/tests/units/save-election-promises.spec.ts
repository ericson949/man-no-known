import { SaveElectionPromiseAnswerCommand } from "../../application/command/save/save-election-promise-answer.command";
import { SaveElectionPromiseAnswerHandler } from "../../application/command/save/save-election-promise-answer.handler";
import { SaveElectionPromiseAnswerResponse } from "../../application/command/save/save-election-promise-answer.response";
import { ElectionPromise } from "../../domain/election-promise.entity";
import { ElectionPromisePriority } from "../../domain/enums/election-promise-priority.enum";
import { PromiseAnswer } from "../../domain/enums/promise-answer.enum";
import { InMemoryElectionPromisesAnswerRepository } from "./repository/in-memory-election-promises-answer.repository";
import { InMemoryElectionPromisesRepository } from "./repository/in-memory-election-response.repository";

describe("Election promises save ", ()=>{
    let electionPromisesRepository: InMemoryElectionPromisesRepository;
    let electionPromisesResponsesRepository: InMemoryElectionPromisesAnswerRepository;

    beforeEach(()=>{
        electionPromisesRepository = new InMemoryElectionPromisesRepository();
        electionPromisesResponsesRepository = new InMemoryElectionPromisesAnswerRepository();
    })

    test("can evealuate an election promise", ()=>{
        const question: ElectionPromise = {
            id:"election-promise-id-1",
                title:"election-promise-title-1",
                description:"election-promise-description-1",
                categoryId:"election-category-id-1",
                priority:ElectionPromisePriority.HIGH
        }
        saveInitDataInMemory(question);
        const command: SaveElectionPromiseAnswerCommand = {
            electionPromiseId:question.id,
            electorId:"elector-id-1",
            priority:ElectionPromisePriority.HIGH,
            answer:PromiseAnswer.YES
        }
        const response = saveElectionPromise(command);

        expect(response.isSaved).toBe(true);
        expect(response.answerId).not.toBeNull();
        expect(electionPromisesResponsesRepository.answers.get(response.answerId)).not.toBeNull()
    })

    function saveElectionPromise(command:SaveElectionPromiseAnswerCommand):SaveElectionPromiseAnswerResponse{
        const saveElectionPromiseAnswerHandler = new SaveElectionPromiseAnswerHandler(
            electionPromisesResponsesRepository
        )
        const response = saveElectionPromiseAnswerHandler.handle(command);
        return response
    }

    function saveInitDataInMemory(question:ElectionPromise){
        electionPromisesRepository.electionPromises = [question]
    }
})