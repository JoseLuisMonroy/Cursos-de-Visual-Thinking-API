const partnerController = require("./../../lib/controllers/partnerController");

describe("Partner controller test suite", () => {
    test("Caso 1 - Obtener partners", () => {
        const test1 = partnerController.getPartners();

        expect(test1).not.toBeNull();
    });
    test("Caso 2 - Obtener email de partners", () => {
        const test2 = partnerController.getParnerMail();

        expect(test2).not.toBeNull();
    });
    test("Caso 3 - Obtener partners por creditos", () => {
        const test3 = partnerController.getPartnersByCredits();

        expect(test3).not.toBeNull();
    });
});