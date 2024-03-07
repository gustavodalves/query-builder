export interface QueryCommand {
    position: number;
    build(): string;
    separator?: string
}
