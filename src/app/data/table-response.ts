export interface TableResponse {
    table: string;
    metaData: Map<string, string>;
    rows: string[][]
}
