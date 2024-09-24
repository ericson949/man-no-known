import { ElectionPromisePriority } from '../../../domain/enums/election-promise-priority.enum';
import { PromiseAnswer } from '../../../domain/enums/promise-answer.enum';

export interface SaveElectionPromiseAnswerCommand {
  electionPromiseId: string;
  electorId: string;
  priority: ElectionPromisePriority;
  answer: PromiseAnswer;
}
