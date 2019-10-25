/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseTranslation {
    id?: string;
    lang?: string;
    ref?: string;
    text?: string;
}

export interface BaseTranslationInput {
    lang?: string;
    ref?: string;
    text?: string;
}

export interface BaseTranslationUpdateInput {
    lang?: string;
    ref?: string;
    text?: string;
}

export interface Translation extends BaseTranslation {
    /* [UGC class] */
    /* [/UGC] */
}

export interface TranslationInput extends BaseTranslationInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface TranslationUpdateInput extends BaseTranslationUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
}

export interface TranslationGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface TranslationListQuery {
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

export interface TranslationListInput extends TranslationListQuery {
    lang?: string;
}

export interface TranslationList {
    messages: Array<Translation>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
