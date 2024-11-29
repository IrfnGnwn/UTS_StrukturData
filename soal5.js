// Fungsi untuk mengonversi angka Romawi ke desimal
function romanToInt(roman) {
    const romanMap = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanMap[roman[i]];
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    return total;
}

// Fungsi untuk binary insertion sort
function sortRomanNumerals(romanNumerals) {
    const result = [];

    for (const roman of romanNumerals) {
        const value = romanToInt(roman);
        let left = 0;
        let right = result.length;

        // Binary search untuk menemukan posisi sisipan
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (romanToInt(result[mid]) < value) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Sisipkan angka Romawi pada posisi yang ditemukan
        result.splice(left, 0, roman);
    }

    return result;
}

// Contoh penggunaan
const romanNumerals = ["X", "III", "IX", "IV", "V", "I", "VII", "II"];
const sortedRomanNumerals = sortRomanNumerals(romanNumerals);
console.log(sortedRomanNumerals);
// Output: ["I", "II", "III", "IV", "V", "VII", "IX", "X"]
