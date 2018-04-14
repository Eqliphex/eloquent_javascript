/**
 * Created by PWM on 13-04-18.
 */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

console.log(list);

function arrayToList(inputArray) {
    let list = null;
    let head = null;
    let index = 0;

    while(index < inputArray.length) {
        if(list === null) {
            list = {value: inputArray[index], next: null};
            head = list;
        }
        else {
            head.next = {value: inputArray[index], next: null};
            head = head.next
        }

        index++;
    }

    return list;
}

array = [1, 2, 3, 4, 5, 6, 7];
list = arrayToList(array);
console.log(list);



function listToArray(incomingList) {
    let newArray = [];
    let head = incomingList;

    newArray.push(incomingList.value);

    do{
        head = head.next;
        newArray.push(head.value);
    } while(head.next !== null);

    return newArray;
}

let newArray = listToArray(list);
console.log(newArray);
