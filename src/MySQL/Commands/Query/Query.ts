import { MySQLCommand } from "../Protocol";

export class Query implements MySQLCommand {
    position: number = 0;
    build(): string {
        return "SELECT"
    }
}
