/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseEvent {
    id: string;
    dateCreated: string;
    name: string;
    props: object;
    user?: object;
}

export interface BaseEventInput {
    name: string;
    props: object;
    userId?: string;
}

export interface BaseEventUpdateInput {
    name?: string;
    props?: object;
    userId?: string;
}

export interface Event extends BaseEvent {
    /* [UGC class] */
    /* [/UGC] */
}

export interface EventInput extends BaseEventInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface EventUpdateInput extends BaseEventUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
    relations?: boolean;
}

export interface EventGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface EventListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ml?: boolean;
    ids?: string;
    exclude?: string;
    relations?: boolean;
    name?: string;
    user?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface EventListInput extends EventListQuery {
    lang?: string;
}

export interface EventList {
    messages: Array<Event>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
export interface Statistic {
    approvedQuestions: number;
    addedQuestions: number;
}

export interface GroupsActivity {
    groups: Array<{
        id: string;
        approvedQuestions: number;
        totalQuestions: number;
        questions: Array<{
            id: number;
            approvedTranslations: number;
        }>;
    }>;
    meta: {
        total: number;
    };
}
/* [/UGC] */
