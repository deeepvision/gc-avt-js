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
    Project,
    QueryParams,
    ProjectInput,
    ProjectListQuery,
    ProjectListInput,
    ProjectList,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import ProjectController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): ProjectController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new ProjectController(id, this.http);
    }

    async list(input: ProjectListInput = {}): Promise<ProjectList> {
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

        const query: ProjectListQuery = {
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

        const response = await this.http.get('/projects', {
            query,
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    async create(data: ProjectInput, { ml, lang }: QueryParams = {}): Promise<Project> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.post('/projects', data, {
            query: {
                ml: lang ? false : ml,
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
