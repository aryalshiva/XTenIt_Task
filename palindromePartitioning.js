function partition(s) {
    const result = [];

    //this is to check if the string is palindrome by comparing first and last if match increase first and decrease last
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, path) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.substring(start, end);
            if (isPalindrome(substring)) {
                path.push(substring);
                backtrack(end, path);
                path.pop();
            }
        }
    }
    backtrack(0, []);
    return result;
}
const s = "aab";
console.log(partition(s));