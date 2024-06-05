const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];  // if arr2 = [arr1] then it will print potato for arr2 also
    arr1[0] = 'potato';
})();
console.log(arr2);
console.log(arr1);