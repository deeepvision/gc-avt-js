/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deeepvision/http-client';
import {
    APIError,
    ID,
    parseResponse,
} from '@deeepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Question,
    QueryParams,
    QuestionInput,
    QuestionListQuery,
    QuestionListInput,
    QuestionList,
    QuestionGetInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

export default class {
    private readonly http: HttpClient;
    private readonly groupId: ID;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient, groupId: ID) {
        this.http = http;
        this.groupId = groupId;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    async list(input: QuestionListInput = {}): Promise<QuestionList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            ids,
            exclude,
            /* [UGC list-input] */
            statistic,
            /* [/UGC] */
        } = input;

        const query: QuestionListQuery = {
            sort,
            text,
            /* [UGC list-query] */
            statistic,
            /* [/UGC] */
        };

        if (Array.isArray(ids)) {
            query.ids = ids.join(',');
        } else {
            query.limit = limit;
            query.offset = offset;
        }

        if (Array.isArray(exclude)) {
            query.exclude = exclude.join(',');
        }

        const response = await this.http.get(`/groups/${this.groupId}/questions`, {
            query,
            headers: {
                /* [UGC list-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    async create(data: QuestionInput, params: QueryParams = {}): Promise<Question> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            /* [UGC create-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.post(`/groups/${this.groupId}/questions`, data, {
            query: {
                /* [UGC create-query] */
                /* [/UGC] */
            },
            headers: {
                /* [UGC create-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response, { successCode: 201 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
