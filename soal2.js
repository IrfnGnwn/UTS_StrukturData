function flattenObject(obj, parentKey = '', result = {}) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Gabungkan key parent dengan key saat ini menggunakan titik
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            // Jika nilai adalah objek, lakukan rekursi
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                flattenObject(obj[key], newKey, result);
            } else {
                // Jika bukan objek, simpan di hasil
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

// Contoh penggunaan
const input = { a: 1, b: { c: 2, d: { e: 3 } } };
const output = flattenObject(input);
console.log(output);
