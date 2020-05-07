/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import { APIError, parseResponse, ID } from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Question,
    QueryParams,
    QuestionGetInput,
    QuestionUpdateInput,
    /* [UGC dto-import] */
    VoteResult,
    /* [/UGC] */
} from './dto';

/* [UGC classes] */
/* [/UGC] */

export default class QuestionController {
    private readonly http: HttpClient;
    private readonly id: ID;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(id: ID, http: HttpClient) {
        this.id = id;
        this.http = http;

        /* [UGC constructor] */
        /* [/UGC] */
    }

    public async get(input: QuestionGetInput = {}): Promise<Question> {
        const {
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get(`/questions/${this.id}`, {
            query: {
                /* [UGC get-query] */
                /* [/UGC] */
            },
            headers: {
                /* [UGC get-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async update(data: QuestionUpdateInput, params: QueryParams = {}): Promise<Question> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            /* [UGC update-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.put(`/questions/${this.id}`, data, {
            query: {
                /* [UGC update-query] */
                /* [/UGC] */
            },
            headers: {
                /* [UGC update-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async delete(): Promise<string> {
        const response = await this.http.delete(`/questions/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    public async vote(level: number): Promise<VoteResult> {
        if (level < 1 || level > 5) {
            throw new APIError('INVALID-LEVEL', 'Level must be number from 1 to 5');
        }

        const response = await this.http.get(`/questions/${this.id}/vote`, {
            query: { level },
        });

        return parseResponse(response);
    }
    /* [/UGC] */
}
