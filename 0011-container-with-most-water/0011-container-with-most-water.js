/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right){
        var width = right - left;
        var smaller = Math.min(height[left],height[right]);
        var area = smaller * width;
        max = Math.max(max, area)

        if(height[left] < height[right]) {
            left++;
        }else{
            right--
        }
    }

    return max;
};

// height is the array
// store the area in variable called max
// line1 = 0
// line2 = 1
//use nested for loops and calculate the area