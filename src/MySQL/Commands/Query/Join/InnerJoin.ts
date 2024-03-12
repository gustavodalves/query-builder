import { Join } from "query-mysql-builder/src/MySQL/Commands/Query/Join/Join";

export class InnerJoin extends Join {
    constructor(table: string, on: { left: string, right: string }) {
        super('INNER', table, on);
    }
}