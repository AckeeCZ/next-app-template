import { generatePath } from '../generatePath';

describe('generatePath', () => {
    it('generatesPath with one variable', () => {
        const path = generatePath('/page/[id]', { id: '12' });

        expect(path).toEqual('/page/12');
    });

    it('generatesPath with multiple variables', () => {
        const path = generatePath('/page/[id]/[subId]/[subSubId]', { id: '12', subId: '45', subSubId: '15' });

        expect(path).toEqual('/page/12/45/15');
    });

    it('throws an error when params are not provided', () => {
        expect(() => generatePath('/page/[id]/', {})).toThrow('Key id was not provided');
    });
});
