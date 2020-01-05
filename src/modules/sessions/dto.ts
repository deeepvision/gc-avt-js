/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseSession {
    id: string;
    finished?: boolean;
    language?: string;
    progress?: object;
    votedQuestions?: Array<string>;
    dateCreated?: string;
    user?: object;
    questions?: Array<object>;
}

export interface BaseSessionInput {
    finished?: boolean;
    language?: string;
    userId?: string;
}

export interface BaseSessionUpdateInput {
    finished?: boolean;
    language?: string;
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
    ids?: string;
    exclude?: string;
    relations?: boolean;
    finished?: string;
    user?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface SessionListInput extends SessionListQuery {
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
export interface SessionExistsResult {
    exists: boolean;
}
/* [/UGC] */
