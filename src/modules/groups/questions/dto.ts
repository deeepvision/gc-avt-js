/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseQuestion {
    id: string;
    text: string;
    reference: string;
    line: number;
    progress?: object;
    level: number;
    votes?: number;
    cleared?: boolean;
    groupId?: string;
    answers: Array<object>;
}

export interface BaseQuestionInput {
    id: string;
    text: string;
    reference: string;
    line: number;
    cleared?: boolean;
    answers: Array<object>;
}

export interface BaseQuestionUpdateInput {
    id?: string;
    text?: string;
    reference?: string;
    line?: number;
    cleared?: boolean;
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
    ids?: string;
    exclude?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface QuestionListInput extends QuestionListQuery {
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
