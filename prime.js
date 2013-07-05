#!/usr/bin/env node

// http://stackoverflow.com/questions/15471291
var eratosthenes = function(n, k) {
    // Eratosthenes algorithm to find first k primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++)
        array.push(true);

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++)
        if (array[i])
            for (var j = i * i; j < n; j += i)
                array[j] = false;

    var j = 0;
    for (var i = 2; i < n; i++)
        if(array[i]) {
            output.push(i);
            j++;
            if (j == k)
                return output;
        }
}

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

console.log(fmt(eratosthenes(1000, 100)));
