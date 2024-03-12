import { MySQLCommand } from "query-mysql-builder/src/MySQL/Commands/Protocol";

export class From implements MySQLCommand {
    constructor(
        private table: string
    ) {}

    position: number = 2;

    build(): string {
        return `FROM ${this.table}`
    }
}
