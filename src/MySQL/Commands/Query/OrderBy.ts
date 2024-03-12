import { MySQLCommand } from "query-mysql-builder/src/MySQL/Commands/Protocol";

export class OrderBy implements MySQLCommand {
    position: number = 8;
    constructor(
        private readonly field: string,
        private readonly rule: 'DESC' | 'ASC' = 'ASC'
    ) {}

    build(): string {
        return `ORDER BY ${this.field} ${this.rule}`
    }
}