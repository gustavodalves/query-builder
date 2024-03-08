import { Builder } from "../Builder";
import { MySQLCommand } from "./Commands/Protocol";
import { Query } from "./Commands/Query/Query";
import { Where } from "./Commands/Query/Where";

export class MySQLBuilder extends Builder<MySQLCommand> {
    constructor() {
        super([
            {
                instance: Where,
                clause: "WHERE"
            }
        ])
    }

    query(){
        this.addCommand(new Query())
        return this;
    }
}

