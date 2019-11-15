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
    Question,
    QueryParams,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import QuestionController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): QuestionController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new QuestionController(id, this.http);
    }

    /* [UGC methods] */
    /* [/UGC] */
}
