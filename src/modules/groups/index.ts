/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deeepvision/http-client';
import {
    APIError,
    parseResponse,
    ID,
} from '@deeepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Group,
    QueryParams,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import GroupController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): GroupController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new GroupController(id, this.http);
    }

    /* [UGC methods] */
    /* [/UGC] */
}
