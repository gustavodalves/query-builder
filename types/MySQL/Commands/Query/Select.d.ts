import { MySQLCommand } from "../Protocol";
export declare class Select implements MySQLCommand {
    position: number;
    readonly items: string[];
    separator: string;
    add(...items: string[]): this;
    setSeparator(separator: string): this;
    build(): string;
}
