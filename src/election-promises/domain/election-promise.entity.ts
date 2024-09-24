import { ElectionPromisePriority } from "./enums/election-promise-priority.enum";

export interface ElectionPromise {
    id:string;
    description:string;
    categoryId:string;
    title:string;
    priority:ElectionPromisePriority
}