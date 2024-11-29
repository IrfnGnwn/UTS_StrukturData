function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        // Tentukan bagian yang terurut
        if (nums[left] <= nums[mid]) {
            // Bagian kiri terurut
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Target ada di kiri
            } else {
                left = mid + 1; // Target ada di kanan
            }
        } else {
            // Bagian kanan terurut
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Target ada di kanan
            } else {
                right = mid - 1; // Target ada di kiri
            }
        }
    }
    return -1; // Jika tidak ditemukan
}

// Contoh penggunaan
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
