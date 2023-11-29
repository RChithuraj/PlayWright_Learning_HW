
arraySort([0]);

function arraySort(myArray){

    myArray.sort();
    console.log(myArray.reverse());

}

getMaxMIN([34, 7, 21, 89, 54, 10, 91, 67])
function getMaxMIN(myArray){
    var min=Math.min(...myArray);
    var index_min=myArray.indexOf(min)
    var max=Math.max(...myArray);
    var index_max=myArray.indexOf(max)
    console.log(`Maximum Element: ${max}, Index: ${index_max}`)
    console.log(`Minimum Element: ${min}, Index: ${index_min}`)

}

console.log(removeDuplicates([1, 2, 3, 4, 2, 5, 6, 1, 6]))
function removeDuplicates(myArray) {
    let noDuplicate = [];
    for (i = 0; i < myArray.length; i++) {
        if (noDuplicate.indexOf(myArray[i]) === -1) {
            noDuplicate.push(myArray[i]);
        }
    }
    return noDuplicate;
}