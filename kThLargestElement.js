//simple way but has the time complexity of O(nlogn)due to shorting
// function findKthLargest(nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k - 1];
// }
//another way is using QuickSelectAlgorithm which is likely QuickShort but it take only one half Average O(n), worst-case O(n^2)

function findKthLargest(nums, k) {
    function quickselect(left, right, kSmallest) {
        //Basecase
        if (left === right) return nums[left];
        //select random pivot that determine the time complexity. 
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivot = nums[pivotIndex];
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        let storeIndex = left;

        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
                storeIndex++;
            }
        }
        [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];

        if (kSmallest === storeIndex) {
            return nums[kSmallest];
        } else if (kSmallest < storeIndex) {
            return quickselect(left, storeIndex - 1, kSmallest);
        } else {
            return quickselect(storeIndex + 1, right, kSmallest);
        }
    }

    return quickselect(0, nums.length - 1, nums.length - k);
}

//demo example
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k));