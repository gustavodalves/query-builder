import { Join } from "query-mysql-builder/src/MySQL/Commands/Query/Join/Join";

export class RightJoin extends Join {
    constructor(table: string, on: { left: string, right: string }) {
        super('RIGHT', table, on);
    }
}
