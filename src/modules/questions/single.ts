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

    public async get({ ml, lang, relations }: QuestionGetInput = {}): Promise<Question> {
        const response = await this.http.get(`/questions/${this.id}`, {
            query: {
                ml,
                relations,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    public async update(data: QuestionUpdateInput, { ml, lang, relations }: QueryParams = {}): Promise<Question> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.put(`/questions/${this.id}`, data, {
            query: {
                ml: lang ? false : ml,
                relations,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    public async delete(): Promise<string> {
        const response = await this.http.delete(`/questions/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
