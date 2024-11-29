function groupAnagrams(words) {
    const anagramGroups = {};

    for (const word of words) {
        // Urutkan huruf-huruf dalam kata untuk membuat kunci
        const sortedWord = word.split('').sort().join('');

        // Masukkan kata ke grup yang sesuai dengan kunci
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }
        anagramGroups[sortedWord].push(word);
    }

    // Kembalikan grup anagram sebagai array
    return Object.values(anagramGroups);
}

// Contoh penggunaan
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(words);
console.log(result);
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
