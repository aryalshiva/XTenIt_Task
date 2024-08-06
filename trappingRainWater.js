function trap(height) {
    const n = height.length;

    if (n === 0) {
        return 0;
    }

    const leftMax = new Array(n);
    const rightMax = new Array(n);

    //this is to compute the max height of the histogram block
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // this is to compte the max height of the left histogram block
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // this is to Calculate the total water trapped
    let waterTrapped = 0;
    for (let i = 0; i < n; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return waterTrapped;
}

const heights = [3, 1, 2, 4, 0, 1, 3, 2];
console.log(trap(heights));