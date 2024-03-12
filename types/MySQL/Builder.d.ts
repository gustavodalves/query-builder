import { Builder } from "../Builder";
import { MySQLCommand } from "./Commands/Protocol";
export declare class MySQLBuilder extends Builder<MySQLCommand> {
    constructor();
    query(): this;
}
