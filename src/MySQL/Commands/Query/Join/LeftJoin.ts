import { Join } from "query-mysql-builder/src/MySQL/Commands/Query/Join/Join";

export class LeftJoin extends Join {
    constructor(table: string, on: { left: string, right: string }) {
        super('LEFT', table, on);
    }
}