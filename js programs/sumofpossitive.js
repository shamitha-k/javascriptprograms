var numbers = [1, 2, 3, -4, -5, -6];

var sum = 0;

for (var i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 0) {
        sum += numbers[i];
    }
}

console.log(sum);