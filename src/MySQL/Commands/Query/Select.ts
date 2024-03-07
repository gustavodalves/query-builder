import { MySQLCommand } from "../Protocol";

export class Select implements MySQLCommand {
    position = 1
    readonly items: string[] = [];
    separator = ', ';

    add(...items: string[]) {
        this.items.push(...items);
        return this;
    }

    setSeparator(separator: string) {
        this.separator = separator;
        return this;
    }

    build() {
        return this.items.join(this.separator);
    }
}
