import { MySQLCommand } from "../Protocol";

type LogicalOperator = 'AND' | 'OR'


export abstract class Where implements MySQLCommand {
    position: number = 5;

    constructor(
        protected readonly column: string,
        protected readonly value: any,
        protected readonly logicalOperator?: LogicalOperator
    ) {}

    protected formatValue(value: any): string {
        if (typeof value === 'string') {
            return `'${value}'`;
        }
        return String(value);
    }

    abstract do(): string;

    build(): string {
        if(this.logicalOperator) {
            return `${this.logicalOperator || ""} ${this.do()}`
        }

        return this.do()
    }
}

export class WhereEquals extends Where {
    constructor(column: string, value: any, logicalOperator?: LogicalOperator) {
        super(column, value, logicalOperator);
    }

    do(): string {
        return `${this.column} = ${this.formatValue(this.value)}`;
    }
}

export class WhereGreaterThan extends Where {
    constructor(column: string, value: any, logicalOperator?: LogicalOperator) {
        super(column, value, logicalOperator);
    }

    do(): string {
        return `${this.column} > ${this.formatValue(this.value)}`;
    }
}

export class WhereLessThan extends Where {
    constructor(column: string, value: any, logicalOperator?: LogicalOperator) {
        super(column, value, logicalOperator);
    }

    do(): string {
        return `${this.column} < ${this.formatValue(this.value)}`;
    }
}

export class WhereBetween extends Where {
    constructor(
        column: string,
        private readonly startValue: any,
        private readonly endValue: any,
        logicalOperator?: LogicalOperator
    ) {
        super(column, null, logicalOperator);
    }

    do(): string {
        return `${this.column} BETWEEN ${this.formatValue(this.startValue)} AND ${this.formatValue(this.endValue)}`;
    }
}
