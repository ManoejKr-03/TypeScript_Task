// calculator.ts

interface InsuranceFactors {
    age: number; // Age of the insured
    vehicleValue: number; // Value of the insured vehicle
    location: string; // Location of the insured
    drivingExperience: number; // Years of driving experience
    accidentHistory: number; // Number of accidents in the past years
}

class InsuranceCalculator {
    private basePremium: number = 500; // Base premium amount

    calculatePremium(factors: InsuranceFactors): number {
        let premium = this.basePremium;

        // Adjust premium based on age
        if (factors.age < 25) {
            premium += 200; // Young drivers
        } else if (factors.age > 60) {
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
    }
}

// Example usage
const calculator = new InsuranceCalculator();

const factors: InsuranceFactors = {
    age: 24,
    vehicleValue: 20000,
    location: 'high-risk',
    drivingExperience: 1,
    accidentHistory: 2,
};

const premium = calculator.calculatePremium(factors);
console.log(`The calculated insurance premium is: $${premium.toFixed(2)}`);
