/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseSession {
    id: string;
    complete?: boolean;
    dateCreated?: string;
    user?: object;
    questions?: Array<object>;
}

export interface BaseSessionInput {
    complete?: boolean;
    userId?: string;
}

export interface BaseSessionUpdateInput {
    complete?: boolean;
    userId?: string;
}

export interface Session extends BaseSession {
    /* [UGC class] */
    /* [/UGC] */
}

export interface SessionInput extends BaseSessionInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface SessionUpdateInput extends BaseSessionUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
    relations?: boolean;
}

export interface SessionGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface SessionListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ml?: boolean;
    ids?: string;
    exclude?: string;
    relations?: boolean;
    complete?: string;
    user?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface SessionListInput extends SessionListQuery {
    lang?: string;
}

export interface SessionList {
    messages: Array<Session>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
