import { APIError } from '@deepvision/api-kit';
import '@deepvision/test-kit-jest';
import * as nock from 'nock';
import Translatio from '@/index';
import Projects from '@/modules/projects';
import Groups from '@/modules/groups';
import Questions from '@/modules/questions';
import Translations from '@/modules/translations';
import Languages from '@/modules/languages';
import Sessions from '@/modules/sessions';
import Events from '@/modules/events';
import ExportProcesses from '@/modules/export-processes';
/* [UGC import] */
/* [/UGC] */

describe('Translatio', () => {
    test('must throw on missed "endpoint" argument', async () => {
        // @ts-ignore
        await expect(() => new Translatio({})).toThrowWithCode(APIError, APIError.ENDPOINT);
    });

    test('must initialize successfully', () => {
        const translatio = new Translatio({ endpoint: 'https://translatio.test' });

        /* [UGC modules] */
        /* [/UGC] */
        expect(translatio.projects).toBeInstanceOf(Projects);
        expect(translatio.groups).toBeInstanceOf(Groups);
        expect(translatio.questions).toBeInstanceOf(Questions);
        expect(translatio.translations).toBeInstanceOf(Translations);
        expect(translatio.languages).toBeInstanceOf(Languages);
        expect(translatio.sessions).toBeInstanceOf(Sessions);
        expect(translatio.events).toBeInstanceOf(Events);
        expect(translatio.exportProcesses).toBeInstanceOf(ExportProcesses);
    });
});