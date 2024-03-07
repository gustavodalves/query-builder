import { Join } from "./Join";

export class RightJoin extends Join {
    constructor(table: string, on: { left: string, right: string }) {
        super('RIGHT', table, on);
    }
}
