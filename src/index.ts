import HttpClient from '@deepvision/http-client';
import { APIError } from '@deepvision/api-kit';
import * as Modules from './modules';
/* [UGC import] */
/* [/UGC] */

export interface Config {
    endpoint: string,
    getAccessToken?: () => string,
};

class API {
    http: HttpClient;

    /* [UGC actions] */
    /* [/UGC] */

    groups: Modules.Groups;

    /* [UGC modules] */
    /* [/UGC] */

    constructor(config: Config) {
        if (!config.endpoint) {
            throw new APIError(APIError.ENDPOINT, '"endpoint" is required argument');
        }

        this.http = new HttpClient(config);
        /* [UGC create-actions] */
        /* [/UGC] */

        /* [UGC create-modules] */
        /* [/UGC] */

        this.groups = new Modules.Groups(this.http);
    }
}

export default API;
