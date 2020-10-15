/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import {
    APIError,
    ID,
    parseResponse,
} from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Group,
    QueryParams,
    GroupInput,
    GroupListQuery,
    GroupListInput,
    GroupList,
    GroupGetInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

export default class {
    private readonly http: HttpClient;
    private readonly projectId: ID;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient, projectId: ID) {
        this.http = http;
        this.projectId = projectId;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    async list(input: GroupListInput = {}): Promise<GroupList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            ml,
            lang,
            ids,
            exclude,
            published,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: GroupListQuery = {
            sort,
            text,
            ml,
            published,
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

        const response = await this.http.get(`/projects/${this.projectId}/groups`, {
            query,
            headers: {
                'Accept-Language': lang,
                /* [UGC list-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    async create(data: GroupInput, params: QueryParams = {}): Promise<Group> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            ml,
            lang,
            /* [UGC create-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.post(`/projects/${this.projectId}/groups`, data, {
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
