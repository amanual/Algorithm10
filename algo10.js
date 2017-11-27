// Eliminate Negative Numbers (if there is a negative value in the array, it changes it to zero)
var array4 = [-10, 1, 2, 3, -5, 7, 3, 4, -3, 5, 8, -6, 9, 10, -9, 30];
for (var i = 0; i < array4.length; i++) {
    if (array4[i] < 0) {
        array4[i] = 0;
    }
}
console.log(array4);