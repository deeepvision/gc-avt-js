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
    Session,
    QueryParams,
    SessionInput,
    SessionListQuery,
    SessionListInput,
    SessionList,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import SessionController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): SessionController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new SessionController(id, this.http);
    }

    async list(input: SessionListInput = {}): Promise<SessionList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            lang,
            ml,
            ids,
            exclude,
            relations,
            complete,
            user,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: SessionListQuery = {
            sort,
            text,
            ml,
            relations,
            complete,
            user,
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

        const response = await this.http.get('/sessions', {
            query,
            headers: {
                'Accept-Language': lang,
                /* [UGC list-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    async create(data: SessionInput, params: QueryParams = {}): Promise<Session> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            ml,
            lang,
            relations,
            /* [UGC create-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.post('/sessions', data, {
            query: {
                ml: lang ? false : ml,
                relations,
                /* [UGC create-query] */
                /* [/UGC] */
            },
            headers: {
                'Accept-Language': lang,
                /* [UGC create-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response, { successCode: 201 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
