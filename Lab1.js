// Name: Marcus Quitiquit
// ID: 101448926

// Exercise 2
// Write a JavaScript program to find the largest of three given integers.

function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));

// Exercise 3
// Write a JavaScript program to move last three character to the start of a given string.

function right(str) {
    return str.slice(3) + str.slice(0, 3);
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// Exercise 4
// Write a JavaScript program to find the types of a given angle.

function angle_Type(angle) {
    if (angle >= 0 && angle < 90) {
        return "Acute angle";
    } 
    else if (angle === 90) {
        return "Right angle";
    } 
    else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } 
    else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

// Exercise 5
// Write a JavaScript Program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array
// of positive integers

function array_max_sum(arr, k) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i >= k) sum -= arr[i - k];
        max = Math.max(max, sum);
    }
    return max;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
