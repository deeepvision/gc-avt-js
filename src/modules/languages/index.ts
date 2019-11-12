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
    Language,
    QueryParams,
    LanguageInput,
    LanguageListQuery,
    LanguageListInput,
    LanguageList,
    LanguageOrder,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import LanguageController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): LanguageController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new LanguageController(id, this.http);
    }

    async list(input: LanguageListInput = {}): Promise<LanguageList> {
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

        const query: LanguageListQuery = {
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

        const response = await this.http.get('/languages', {
            query,
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    async create(data: LanguageInput, { ml, lang }: QueryParams = {}): Promise<Language> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.post('/languages', data, {
            query: {
                ml: lang ? false : ml,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response, { successCode: 201 });
    }

    async reorder(data: object): Promise<Array<LanguageOrder>> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.post('/languages/reorder', data);

        return parseResponse(response);
    }

    /* [UGC methods] */
    /* [/UGC] */
}
