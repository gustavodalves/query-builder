import { Join } from "./Join";
export declare class LeftJoin extends Join {
    constructor(table: string, on: {
        left: string;
        right: string;
    });
}
