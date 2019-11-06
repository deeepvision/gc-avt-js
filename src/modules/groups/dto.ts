/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseGroup {
    id: string;
    name: object;
}

export interface BaseGroupInput {
    name: object;
}

export interface BaseGroupUpdateInput {
    name?: object;
}

export interface Group extends BaseGroup {
    /* [UGC class] */
    /* [/UGC] */
}

export interface GroupInput extends BaseGroupInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface GroupUpdateInput extends BaseGroupUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
}

export interface GroupGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface GroupListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ml?: boolean;
    ids?: string;
    exclude?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface GroupListInput extends GroupListQuery {
    lang?: string;
}

export interface GroupList {
    messages: Array<Group>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
