import { Injectable } from "@nestjs/common";
import { SaveElectionPromiseAnswerCommand } from "./save-election-promise-answer.command";
import { SaveElectionPromiseAnswerResponse } from "./save-election-promise-answer.response";
import { MongoElectionPromiseRepository } from "../../../insfrastructure/repositories/mongo-election-promise.repository";

@Injectable()
export class SaveElectionPromiseAnswerHandler {
  constructor(private electionPromiseRepo:MongoElectionPromiseRepository){}

  handle(command:SaveElectionPromiseAnswerCommand):SaveElectionPromiseAnswerResponse {

    return {
      isSaved:true,
      answerId:""
    }
  }
}