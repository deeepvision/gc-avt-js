/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseGroup {
    id: string;
    name: object;
    projectId?: string;
    statistic?: object;
}

export interface BaseGroupUpdateInput {
    name?: object;
}

export interface Group extends BaseGroup {
    /* [UGC class] */
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

/* [UGC interfaces] */
/* [/UGC] */
