import { Builder } from "../Builder";
import { MySQLCommand } from "./Commands/Protocol";
import { Query } from "./Commands/Query/Query";
import { Where } from "./Commands/Query/Where";

export class MySQLBuilder extends Builder {
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

    addCommand(...command: MySQLCommand[]) {
        command.forEach(item => super.addCommand(item))
        return this
    }
}
