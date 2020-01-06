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
    ExportProcess,
    QueryParams,
    ExportProcessInput,
    ExportProcessListQuery,
    ExportProcessListInput,
    ExportProcessList,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import ExportProcessController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): ExportProcessController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new ExportProcessController(id, this.http);
    }

    async list(input: ExportProcessListInput = {}): Promise<ExportProcessList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            lang,
            ml,
            ids,
            exclude,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: ExportProcessListQuery = {
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

        const response = await this.http.get('/export-processes', {
            query,
            headers: {
                'Accept-Language': lang,
                /* [UGC list-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    async create(data: ExportProcessInput, params: QueryParams = {}): Promise<ExportProcess> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            ml,
            lang,
            /* [UGC create-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.post('/export-processes', data, {
            query: {
                ml: lang ? false : ml,
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
