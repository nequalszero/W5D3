Array.prototype.bubbleSort = function() {
  while(true) {
    let doneSorting = true;

    for (i=0; i < this.length-1; i++) {
      if (this[i+1] < this[i]) {
        let tempI = this[i];
        this[i] = this[i+1];
        this[i+1] = tempI;
        doneSorting = false;
      }
    }
    if (doneSorting) {
      break;
    }
  }
}

// let x = [8, 12, 7, 2]
// x.bubbleSort()
// console.log(x)

String.prototype.substrings = function () {
  let result = [];
  let strArr = this.split("");

  for (i = 0; i < strArr.length; i++) {
    for (j = i+1; j < strArr.length+1; j++) {
      result.push(strArr.slice(i, j).join(""));
    }
  }

  return result;
}

let fruits = 'apples';
console.log(fruits.substrings());
