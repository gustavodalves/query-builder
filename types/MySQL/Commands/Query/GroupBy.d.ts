import { MySQLCommand } from "../Protocol";
export declare class GroupBy implements MySQLCommand {
    private readonly field;
    position: number;
    constructor(field: string);
    build(): string;
}
