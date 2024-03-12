import { Join } from "./Join";
export declare class InnerJoin extends Join {
    constructor(table: string, on: {
        left: string;
        right: string;
    });
}
