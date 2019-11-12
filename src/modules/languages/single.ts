/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import { APIError, parseResponse, ID } from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Language,
    QueryParams,
    LanguageGetInput,
    LanguageUpdateInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

/* [UGC classes] */
/* [/UGC] */

export default class LanguageController {
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

    public async get({ ml, lang }: LanguageGetInput = {}): Promise<Language> {
        const response = await this.http.get(`/languages/${this.id}`, {
            query: {
                ml,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    public async update(data: LanguageUpdateInput, { ml, lang }: QueryParams = {}): Promise<Language> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.put(`/languages/${this.id}`, data, {
            query: {
                ml: lang ? false : ml,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    public async delete(): Promise<string> {
        const response = await this.http.delete(`/languages/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
