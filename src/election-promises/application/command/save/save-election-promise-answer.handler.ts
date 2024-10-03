import { Injectable } from "@nestjs/common";
import { SaveElectionPromiseAnswerCommand } from "./save-election-promise-answer.command";
import { SaveElectionPromiseAnswerResponse } from "./save-election-promise-answer.response";
import { ElectionPromisesAnswerRepository } from "../../../domain/repositories/election-promises-answer.repository";
import { Id } from "../../../../shared/vo/Id.vo";
import { ElectionPromiseAnswer } from "../../../domain/election-promise-answer.entity";

@Injectable()
export class SaveElectionPromiseAnswerHandler {
  constructor(private electionPromiseRepo:ElectionPromisesAnswerRepository){}

  handle(command:SaveElectionPromiseAnswerCommand):SaveElectionPromiseAnswerResponse {
    const electorId = new Id(command.electorId);
    const electionPromiseId = new Id(command.electorId);
    const electionPromiseAnswer = ElectionPromiseAnswer.create(
        electionPromiseId,electorId,
        command.priority,command.answer
    )
    this.electionPromiseRepo.saveElectionPromiseAnswer(electionPromiseAnswer)
    return {
      isSaved:true,
      answerId:electionPromiseAnswer.toPrimitive().answerId
    }
  }
}