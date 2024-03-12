import { Join } from "./Join";
export declare class RightJoin extends Join {
    constructor(table: string, on: {
        left: string;
        right: string;
    });
}
