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
    Question,
    QueryParams,
    QuestionInput,
    QuestionListQuery,
    QuestionListInput,
    QuestionList,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import QuestionController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): QuestionController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new QuestionController(id, this.http);
    }

    async list(input: QuestionListInput = {}): Promise<QuestionList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            ml,
            ids,
            exclude,
            lang,
            relations,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: QuestionListQuery = {
            sort,
            text,
            ml,
            relations,
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

        const response = await this.http.get('/questions', {
            query,
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    async create(data: QuestionInput, { ml, lang, relations }: QueryParams = {}): Promise<Question> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.post('/questions', data, {
            query: {
                ml: lang ? false : ml,
                relations,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response, { successCode: 201 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
