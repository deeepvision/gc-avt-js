/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseLanguage {
    id: string;
    title: object;
    index?: number;
    active?: boolean;
}

export interface BaseLanguageInput {
    id: string;
    title: object;
    index?: number;
    active?: boolean;
}

export interface BaseLanguageUpdateInput {
    id?: string;
    title?: object;
    index?: number;
    active?: boolean;
}

export interface Language extends BaseLanguage {
    /* [UGC class] */
    /* [/UGC] */
}

export interface LanguageInput extends BaseLanguageInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface LanguageUpdateInput extends BaseLanguageUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
}

export interface LanguageGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface LanguageOrder {
    id: string;
    index: number;
}

export interface LanguageListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ml?: boolean;
    ids?: string;
    exclude?: string;
    active?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface LanguageListInput extends LanguageListQuery {
    lang?: string;
}

export interface LanguageList {
    messages: Array<Language>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
