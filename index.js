const romanValues = {
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

function convertToRoman(number) {
  // Empty string to store the result
  let result = '';
  // Object.keys() returns an array of keys from the object
  const romanNumerals = Object.keys(romanValues);
  // Iterate through the Roman numerals in descending order
  for (let i = romanNumerals.length - 1; i >= 0; i--) {
    const romanNumeral = romanNumerals[i];

    const currentValue = romanValues[romanNumeral];
    // Check if the current value is less than or equal to the number
    while (currentValue <= number) {
      number -= currentValue;

      result += romanNumeral;
    }
  }
  return result;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2024));
