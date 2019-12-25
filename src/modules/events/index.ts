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
    Event,
    QueryParams,
    EventInput,
    EventListQuery,
    EventListInput,
    EventList,
    /* [UGC dto-import] */
    Statistic,
    GroupsActivity,
    /* [/UGC] */
} from './dto';

import EventController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): EventController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new EventController(id, this.http);
    }

    async list(input: EventListInput = {}): Promise<EventList> {
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
            name,
            user,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: EventListQuery = {
            sort,
            text,
            ml,
            relations,
            name,
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

        const response = await this.http.get('/events', {
            query,
            headers: {
                'Accept-Language': lang,
                /* [UGC list-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    async create(data: EventInput, params: QueryParams = {}): Promise<Event> {
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

        const response = await this.http.post('/events', data, {
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
    public async getStatistic(): Promise<Statistic> {
        const response = await this.http.get('/events/statistic');

        return parseResponse(response);
    }

    public async getGroupsActivity(): Promise<GroupsActivity> {
        const response = await this.http.get('/events//events/activity/groups');

        return parseResponse(response);
    }
    /* [/UGC] */
}
