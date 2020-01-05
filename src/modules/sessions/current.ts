/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import { parseResponse } from '@deepvision/api-kit';

import {
    Session,
    SessionExistsResult,
} from './dto';

export default class SessionController {
    private readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    public async get(): Promise<Session> {
        const response = await this.http.get('/sessions/current');

        return parseResponse(response);
    }

    public async finish(): Promise<Session> {
        const response = await this.http.get('/sessions/current/finish');

        return parseResponse(response);
    }

    public async exists(): Promise<SessionExistsResult> {
        const response = await this.http.get('/sessions/current/exists');

        return parseResponse(response);
    }
}
