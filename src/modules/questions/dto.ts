/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseQuestion {
    id?: string;
    text?: string;
    reference?: string;
    line?: number;
    level?: number;
    cleared?: boolean;
    group?: object;
    answers?: Array<object>;
}

export interface BaseQuestionInput {
    id?: string;
    text?: string;
    reference?: string;
    line?: number;
    level?: number;
    cleared?: boolean;
    groupId?: string;
    answers?: Array<object>;
}

export interface BaseQuestionUpdateInput {
    id?: string;
    text?: string;
    reference?: string;
    line?: number;
    level?: number;
    cleared?: boolean;
    groupId?: string;
    answers?: Array<object>;
}

export interface Question extends BaseQuestion {
    /* [UGC class] */
    /* [/UGC] */
}

export interface QuestionInput extends BaseQuestionInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface QuestionUpdateInput extends BaseQuestionUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
    relations?: boolean;
}

export interface QuestionGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface QuestionListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ml?: boolean;
    ids?: string;
    exclude?: string;
    relations?: boolean;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface QuestionListInput extends QuestionListQuery {
    lang?: string;
}

export interface QuestionList {
    messages: Array<Question>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
