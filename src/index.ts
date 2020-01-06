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

    projects: Modules.Projects;
    groups: Modules.Groups;
    questions: Modules.Questions;
    translations: Modules.Translations;
    languages: Modules.Languages;
    sessions: Modules.Sessions;
    events: Modules.Events;
    exportProcesses: Modules.ExportProcesses;

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

        this.projects = new Modules.Projects(this.http);
        this.groups = new Modules.Groups(this.http);
        this.questions = new Modules.Questions(this.http);
        this.translations = new Modules.Translations(this.http);
        this.languages = new Modules.Languages(this.http);
        this.sessions = new Modules.Sessions(this.http);
        this.events = new Modules.Events(this.http);
        this.exportProcesses = new Modules.ExportProcesses(this.http);
    }
}

export default API;
