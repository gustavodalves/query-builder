import { Join } from "./Join";

export class LeftJoin extends Join {
    constructor(table: string, on: { left: string, right: string }) {
        super('LEFT', table, on);
    }
}