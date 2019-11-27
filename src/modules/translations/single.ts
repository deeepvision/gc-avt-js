/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import { APIError, parseResponse, ID } from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Translation,
    QueryParams,
    TranslationGetInput,
    TranslationUpdateInput,
    /* [UGC dto-import] */
    ApproveResult,
    /* [/UGC] */
} from './dto';

/* [UGC classes] */
/* [/UGC] */

export default class TranslationController {
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

    public async get(input: TranslationGetInput = {}): Promise<Translation> {
        const {
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get(`/translations/${this.id}`, {
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

    public async update(data: TranslationUpdateInput, params: QueryParams = {}): Promise<Translation> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            /* [UGC update-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.put(`/translations/${this.id}`, data, {
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
        const response = await this.http.delete(`/translations/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    public async approve(): Promise<ApproveResult> {
        const response = await this.http.get(`/translations/${this.id}/approve`);

        return parseResponse(response);
    }
    /* [/UGC] */
}
