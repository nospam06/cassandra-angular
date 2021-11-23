import { TableMetadata } from './table-metadata';
export interface TableResponse {
    table: string;
    metaData: TableMetadata[];
    rows: string[][]
}
