import { MySQLCommand } from "../Protocol";
export declare class Query implements MySQLCommand {
    position: number;
    build(): string;
}
