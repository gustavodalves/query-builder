import { MySQLCommand } from "query-mysql-builder/src/MySQL/Commands/Protocol";

export class GroupBy implements MySQLCommand {
    position: number = 7;
    constructor(
        private readonly field: string,
    ) {}

    build(): string {
        return `GROUP BY ${this.field}`
    }
}