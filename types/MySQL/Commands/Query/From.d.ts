import { MySQLCommand } from "../Protocol";
export declare class From implements MySQLCommand {
    private table;
    constructor(table: string);
    position: number;
    build(): string;
}
