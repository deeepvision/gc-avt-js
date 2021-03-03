/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deeepvision/http-client';
import {
    APIError,
    parseResponse,
    ID,
} from '@deeepvision/api-kit';
/* [UGC import] */
import CurrentSessionController from './current';
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
    private readonly current: CurrentSessionController;
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        this.current = new CurrentSessionController(this.http);
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
            ids,
            exclude,
            rel,
            finished,
            user,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: SessionListQuery = {
            sort,
            text,
            rel,
            finished,
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
            rel,
            /* [UGC create-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.post('/sessions', data, {
            query: {
                rel,
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
