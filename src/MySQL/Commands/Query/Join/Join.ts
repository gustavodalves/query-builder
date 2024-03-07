import { MySQLCommand } from "../../Protocol";

export abstract class Join implements MySQLCommand {
    readonly position: number = 4;
    constructor(
        readonly type: string,
        readonly table: string,
        readonly on: { left: string, right: string },
    ) {}

    build() {
        const { type, table, on } = this;
        return `${type} JOIN ${table} ON ${on.left} = ${on.right}`;
    }
}
