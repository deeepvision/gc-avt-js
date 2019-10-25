/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import {
    APIError,
    parseResponse,
    ID,
} from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Translation,
    QueryParams,
    TranslationInput,
    TranslationListQuery,
    TranslationListInput,
    TranslationList,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import TranslationController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): TranslationController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new TranslationController(id, this.http);
    }

    async list(input: TranslationListInput = {}): Promise<TranslationList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            ml,
            ids,
            exclude,
            lang,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: TranslationListQuery = {
            sort,
            text,
            ml,
            /* [UGC list-query] */
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

        const response = await this.http.get('/translations', {
            query,
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    async create(data: TranslationInput, { ml, lang }: QueryParams = {}): Promise<Translation> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.post('/translations', data, {
            query: {
                ml: lang ? false : ml,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response, { successCode: 201 });
    }

    public async getByRef(ref, { ml, lang }: QueryParams = {}): Promise<Translation> {
        const response = await this.http.get(`/translations/byRef/${ref}`, {
            query: {
                ml,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    /* [UGC methods] */
    /* [/UGC] */
}
