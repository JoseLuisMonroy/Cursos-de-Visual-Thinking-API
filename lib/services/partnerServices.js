class partnerServices {
    static filterByCertification(partners) {
        return partners.filter(partner => partner.haveCertification === true);
    };
    static filterByCredits(partners) {
        return partners.filter(partner => partner.credits >= 500);
    };
};

module.exports = partnerServices;