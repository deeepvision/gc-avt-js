import { APIError } from '@deepvision/api-kit';
import '@deepvision/test-kit-jest';
import Translatio from '@/index';
import Groups from '@/modules/groups';
import Questions from '@/modules/questions';
import Translations from '@/modules/translations';

describe('Translatio', () => {
    test('must throw on missed "endpoint" argument', async () => {
        // @ts-ignore
        await expect(() => new Translatio({})).toThrowWithCode(APIError, APIError.ENDPOINT);
    });

    test('must initialize successfully', () => {
        const translatio = new Translatio({ endpoint: 'https://translatio.test' });

        expect(translatio.groups).toBeInstanceOf(Groups);
        expect(translatio.questions).toBeInstanceOf(Questions);
        expect(translatio.translations).toBeInstanceOf(Translations);
    });
});