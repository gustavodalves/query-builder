import { MySQLCommand } from "../Protocol";
export declare class OrderBy implements MySQLCommand {
    private readonly field;
    private readonly rule;
    position: number;
    constructor(field: string, rule?: 'DESC' | 'ASC');
    build(): string;
}
