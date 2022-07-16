const partnerServices = require('./../../lib/services/partnerServices');

describe('Partner services test suite', () => {
    test('Case 1 Filter by certification', () => {
        const test1_1 = { name: "John", haveCertification: true };
        const test1_2 = { name: "Jane", haveCertification: true };
        const test1_3 = { name: "Jack", haveCertification: false };
        const test1_lista = [test1_1, test1_2, test1_3];
        const test1_result = partnerServices.filterByCertification(test1_lista);

        expect(test1_result.length).toBe(2)
    });
    test('Case 2 Filter by credits', () => {
        const test2_1 = { name: "John", credits: 400 };
        const test2_2 = { name: "Jane", credits: 500 };
        const test2_3 = { name: "Jack", credits: 600 };
        const test2_lista = [test2_1, test2_2, test2_3];
        const test2_result = partnerServices.filterByCredits(test2_lista);

        expect(test2_result.length).toBe(2)
    });
});