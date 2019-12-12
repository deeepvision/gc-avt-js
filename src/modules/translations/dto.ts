/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseTranslation {
    id: string;
    lang: string;
    type: string;
    target: string;
    ref: string;
    text: string;
    votes?: number;
}

export interface BaseTranslationInput {
    lang: string;
    type: string;
    target: string;
    ref: string;
    text: string;
}

export interface BaseTranslationUpdateInput {
    lang?: string;
    type?: string;
    target?: string;
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
    ids?: string;
    exclude?: string;
    lang?: string;
    type?: string;
    target?: string;
    ref?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface TranslationListInput extends TranslationListQuery {
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
export interface ApproveInput {
    session: string;
}

export interface ApproveResult {
    votes: number;
}
/* [/UGC] */
