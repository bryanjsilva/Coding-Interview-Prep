function updateInventory(arr1, arr2) {
    let itemName1 = obtainNames(arr1);
    let itemName2 = obtainNames(arr2);
    let index1 = [];
    let index2 = [];
    
    for(let element2 of itemName2){
        for(let element1 of itemName1){
            if(element2 == element1){
                index1.push(itemName1.indexOf(element1));
                index2.push(itemName2.indexOf(element2));
            }
        }
    }

    for(let i = 0; i < index1.length; i ++){
        arr1[index1[i]][0] += arr2[index2[i]][0];
    }

    console.log(arr1);
    console.log(index2);
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