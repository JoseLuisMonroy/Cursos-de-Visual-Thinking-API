const reader = require("./../utils/reader");
const partnerServices = require("./../services/partnerServices");

class partnerController {
    static getPartners() {
        const partners = reader.readJsonFile("visualPartners.json");
        return partners;
    }
    static getParnerMail() {
        const partners = this.getPartners();
        const result = partnerServices.filterByCertification(partners);
        return result.map(partner => partner.email);
    }
    static getPartnersByCredits() {
        const partners = this.getPartners();
        const result = partnerServices.filterByCredits(partners);
        return result;
    }
}

module.exports = partnerController;