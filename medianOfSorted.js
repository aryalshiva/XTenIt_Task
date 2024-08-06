function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;
    let low = 0;
    let high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;
        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === x ? Infinity : nums1[partitionX];
        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === y ? Infinity : nums2[partitionY];
        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2.0;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    throw new Error("Input arrays are not sorted.");
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2));