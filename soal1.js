function longestConsecutiveSequence(nums) {
    if (nums.length === 0) return 0;

    // Simpan elemen-elemen array dalam sebuah Set untuk pencarian cepat
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        // Hanya mulai dari angka yang tidak memiliki angka sebelumnya dalam array
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            // Hitung panjang subsekuensi berurutan
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            // Perbarui panjang terpanjang
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}

// Contoh penggunaan
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(nums)); // Output: 4
