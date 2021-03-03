/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deeepvision/http-client';
import { APIError, parseResponse, ID } from '@deeepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Project,
    QueryParams,
    ProjectGetInput,
    ProjectUpdateInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import Groups from './groups';

/* [UGC classes] */
/* [/UGC] */

export default class ProjectController {
    private readonly http: HttpClient;
    private readonly id: ID;
    public readonly groups: Groups;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(id: ID, http: HttpClient) {
        this.id = id;
        this.http = http;

        this.groups = new Groups(http, id);

        /* [UGC constructor] */
        /* [/UGC] */
    }

    public async get(input: ProjectGetInput = {}): Promise<Project> {
        const {
            ml,
            lang,
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get(`/projects/${this.id}`, {
            query: {
                ml,
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

    public async update(data: ProjectUpdateInput, params: QueryParams = {}): Promise<Project> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            ml,
            lang,
            /* [UGC update-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.put(`/projects/${this.id}`, data, {
            query: {
                ml: lang ? false : ml,
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
        const response = await this.http.delete(`/projects/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
