import { QueryCommand } from "./Command";
declare type OneTime<T extends new (...args: any[]) => QueryCommand> = {
    instance: T;
    clause: string;
};
export declare abstract class Builder<T extends QueryCommand> {
    protected readonly onlyOneTime: OneTime<any>[];
    constructor(onlyOneTime: OneTime<any>[]);
    commands: T[];
    addCommand(...command: T[]): this;
    build(): string;
}
export {};
