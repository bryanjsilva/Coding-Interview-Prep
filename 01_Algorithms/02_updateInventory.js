function updateInventory(arr1, arr2) {
    for(element2 of arr2){
        for(element1 of arr1){
            if(element2[1]==element1[1]){
                element1[0] += element2[0];
            }
        }
    }
    console.log(arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);