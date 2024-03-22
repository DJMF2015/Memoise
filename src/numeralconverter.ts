
 function romanToDecimal(number: number): string {
    let result: string = '';
    const romanValues: { [key: string]: number } = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
        V: 5,
        VI: 6,
        VII: 7,
        VIII: 8,
        IX: 9,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const romanNumerals = Object.keys(romanValues) as Array<keyof typeof romanValues>;
    for (let i = romanNumerals.length - 1; i >= 0; i--) {
        const romanNumeral = romanNumerals[i];
        const currentValue = romanValues[romanNumeral];

        while (currentValue <= number) {
            number -= currentValue;
            result += romanNumeral;
        }
    }
    return result;
}

console.log(romanToDecimal(10)); 
console.log(romanToDecimal(2024)); 