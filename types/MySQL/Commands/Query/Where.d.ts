import { MySQLCommand } from "../Protocol";
declare type LogicalOperator = 'AND' | 'OR';
export declare abstract class Where implements MySQLCommand {
    protected readonly column: string;
    protected readonly value: any;
    protected readonly logicalOperator?: LogicalOperator | undefined;
    position: number;
    constructor(column: string, value: any, logicalOperator?: LogicalOperator | undefined);
    protected formatValue(value: any): string;
    abstract do(): string;
    build(): string;
}
export declare class WhereEquals extends Where {
    constructor(column: string, value: any, logicalOperator?: LogicalOperator);
    do(): string;
}
export declare class WhereGreaterThan extends Where {
    constructor(column: string, value: any, logicalOperator?: LogicalOperator);
    do(): string;
}
export declare class WhereLessThan extends Where {
    constructor(column: string, value: any, logicalOperator?: LogicalOperator);
    do(): string;
}
export declare class WhereBetween extends Where {
    private readonly startValue;
    private readonly endValue;
    constructor(column: string, startValue: any, endValue: any, logicalOperator?: LogicalOperator);
    do(): string;
}
export {};
