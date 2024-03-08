import { MySQLCommand } from "../Protocol";

export class GroupBy implements MySQLCommand {
    position: number = 7;
    constructor(
        private readonly field: string,
    ) {}

    build(): string {
        return `GROUP BY ${this.field}`
    }
}