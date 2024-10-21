// calculator.ts
var InsuranceCalculator = /** @class */ (function () {
    function InsuranceCalculator() {
        this.basePremium = 500; // Base premium amount
    }
    InsuranceCalculator.prototype.calculatePremium = function (factors) {
        var premium = this.basePremium;
        // Adjust premium based on age
        if (factors.age < 25) {
            premium += 200; // Young drivers
        }
        else if (factors.age > 60) {
            premium += 150; // Senior drivers
        }
        // Adjust based on vehicle value
        premium += (factors.vehicleValue * 0.05); // 5% of vehicle value
        // Adjust based on location (simplified)
        if (factors.location === 'high-risk') {
            premium += 100;
        }
        // Adjust based on driving experience
        if (factors.drivingExperience < 2) {
            premium += 150; // Less experience
        }
        // Adjust based on accident history
        premium += (factors.accidentHistory * 100); // $100 per accident
        return premium;
    };
    return InsuranceCalculator;
}());
// Example usage
var calculator = new InsuranceCalculator();
var factors = {
    age: 24,
    vehicleValue: 20000,
    location: 'high-risk',
    drivingExperience: 1,
    accidentHistory: 2,
};
var premium = calculator.calculatePremium(factors);
console.log("The calculated insurance premium is: $".concat(premium.toFixed(2)));
