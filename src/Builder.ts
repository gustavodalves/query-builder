import { QueryCommand } from "query-mysql-builder/src/Command";
import { MySQLCommand } from "query-mysql-builder/src/MySQL/Commands/Protocol";

type OneTime<T extends new (...args: any[]) => QueryCommand> = {
    instance: T;
    clause: string;
};

export abstract class Builder<T extends QueryCommand> {
    constructor(
        protected readonly onlyOneTime: OneTime<any>[]
    ) {}

    commands: T[] = [];

    addCommand(...command: T[]) {
        command.forEach(command => this.commands.push(command))
        return this;
    }

    build() {
        const init: Record<string, Array<T>> = {};
        const sortedCommands = this.commands
            .sort((a, b) => a.position - b.position)
            .reduce((acc, item) => {
                acc[item.position] = acc[item.position] || [];
                acc[item.position].push(item);
                return acc;
            }, init);
        
        const converted = Object.values(sortedCommands);
        const result = converted.map((item) => {
            const builded = item.map((command, index) => {
                const foundedOneTime = this.onlyOneTime.find(oneTime => command instanceof oneTime.instance);
                if(foundedOneTime && !index) {
                    return `${foundedOneTime.clause} ${command.build()}`;
                }
                return command.build();
            });
            return builded.join(item[0]?.separator || ' ');
        });

        return result.join(' ') + ";";
    }
}
