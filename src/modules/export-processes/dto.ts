/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseExportProcess {
    id: string;
    dateCreated: string;
    status?: string;
}

export interface BaseExportProcessInput {
    status?: string;
}

export interface BaseExportProcessUpdateInput {
    status?: string;
}

export interface ExportProcess extends BaseExportProcess {
    /* [UGC class] */
    /* [/UGC] */
}

export interface ExportProcessInput extends BaseExportProcessInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface ExportProcessUpdateInput extends BaseExportProcessUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
}

export interface ExportProcessGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface ExportProcessListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ids?: string;
    exclude?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface ExportProcessListInput extends ExportProcessListQuery {
}

export interface ExportProcessList {
    messages: Array<ExportProcess>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
