/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import { APIError, parseResponse, ID } from '@deepvision/api-kit';
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

    public async get({ ml, lang }: ProjectGetInput = {}): Promise<Project> {
        const response = await this.http.get(`/projects/${this.id}`, {
            query: {
                ml,
            },
            headers: {
                'Accept-Language': lang,
            },
        });

        return parseResponse(response);
    }

    public async update(data: ProjectUpdateInput, { ml, lang }: QueryParams = {}): Promise<Project> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const response = await this.http.put(`/projects/${this.id}`, data, {
            query: {
                ml: lang ? false : ml,
            },
            headers: {
                'Accept-Language': lang,
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
