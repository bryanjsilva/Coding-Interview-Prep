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

    for(let element of arr2){
        if(!index2.includes(arr2.indexOf(element))){
            arr1.push(element);
        }
    }

    console.log(arr1);
    return arr1;
}

function obtainNames(arr){
    let itemName = [];
    for(let elements of arr){
        itemName.push(elements[1]);
    }
    return itemName;
}

// Example inventory lists
var curInv = [
    [0, "Bowling Ball"], 
    [0, "Dirty Sock"], 
    [0, "Hair Pin"], 
    [0, "Microphone"]
];

var newInv = [
    [1, "Hair Pin"], 
    [1, "Half-Eaten Apple"], 
    [1, "Bowling Ball"], 
    [1, "Toothpaste"]
];

updateInventory(curInv, newInv);



