import { Join } from "./Join";

export class InnerJoin extends Join {
    constructor(table: string, on: { left: string, right: string }) {
        super('INNER', table, on);
    }
}