function updateInventory(arr1, arr2) {
    let itemName1 = obtainNames(arr1);
    let itemName2 = obtainNames(arr2);

    console.log(itemName1);
    console.log(itemName2);
    return arr1;
}

function obtainNames(arr){
    let itemName = [];
    for(elements of arr){
        itemName.push(elements[1]);
    }
    return itemName;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
    [2, "Hair Pin"]
];

updateInventory(curInv, newInv);