/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import { APIError, parseResponse, ID } from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Session,
    QueryParams,
    SessionGetInput,
    SessionUpdateInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

/* [UGC classes] */
/* [/UGC] */

export default class SessionController {
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

    public async get(input: SessionGetInput = {}): Promise<Session> {
        const {
            ml,
            lang,
            relations,
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get(`/sessions/${this.id}`, {
            query: {
                ml,
                relations,
                /* [UGC get-query] */
                /* [/UGC] */
            },
            headers: {
                'Accept-Language': lang,
                /* [UGC get-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async update(data: SessionUpdateInput, params: QueryParams = {}): Promise<Session> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            ml,
            lang,
            relations,
            /* [UGC update-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.put(`/sessions/${this.id}`, data, {
            query: {
                ml: lang ? false : ml,
                relations,
                /* [UGC update-query] */
                /* [/UGC] */
            },
            headers: {
                'Accept-Language': lang,
                /* [UGC update-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async delete(): Promise<string> {
        const response = await this.http.delete(`/sessions/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    public async current(input: SessionGetInput = {}): Promise<Session> {
        const {
            ml,
            lang,
            relations,
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get('/sessions/current', {
            query: {
                ml,
                relations,
                /* [UGC get-query] */
                /* [/UGC] */
            },
            headers: {
                'Accept-Language': lang,
                /* [UGC get-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }
    /* [/UGC] */
}
