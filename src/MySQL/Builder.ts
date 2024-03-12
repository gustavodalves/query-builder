import { Builder } from "query-mysql-builder/src/Builder";
import { MySQLCommand } from "query-mysql-builder/src/MySQL/Commands/Protocol";
import { Query } from "query-mysql-builder/src/MySQL/Commands/Query/Query";
import { Where } from "query-mysql-builder/src/MySQL/Commands/Query/Where";

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

