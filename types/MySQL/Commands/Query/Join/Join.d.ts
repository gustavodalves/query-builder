import { MySQLCommand } from "../../Protocol";
export declare abstract class Join implements MySQLCommand {
    readonly type: string;
    readonly table: string;
    readonly on: {
        left: string;
        right: string;
    };
    readonly position: number;
    constructor(type: string, table: string, on: {
        left: string;
        right: string;
    });
    build(): string;
}
