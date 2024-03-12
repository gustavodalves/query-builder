import { MySQLCommand } from "query-mysql-builder/src/MySQL/Commands/Protocol";

export class Query implements MySQLCommand {
    position: number = 0;
    build(): string {
        return "SELECT"
    }
}
