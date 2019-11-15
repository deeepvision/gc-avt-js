/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseProject {
    id: string;
    name: object;
}

export interface BaseProjectInput {
    id: string;
    name: object;
}

export interface BaseProjectUpdateInput {
    id?: string;
    name?: object;
}

export interface Project extends BaseProject {
    /* [UGC class] */
    /* [/UGC] */
}

export interface ProjectInput extends BaseProjectInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface ProjectUpdateInput extends BaseProjectUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
}

export interface ProjectGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface ProjectListQuery {
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

export interface ProjectListInput extends ProjectListQuery {
    lang?: string;
}

export interface ProjectList {
    messages: Array<Project>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
