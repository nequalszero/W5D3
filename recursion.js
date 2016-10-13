function range(start, end) {
  let result = [];
  if (end < start) {
    return result;
  } else if (start === end) {
    return [start];
  } else {
    result.push(start);
    result = result.concat(range(start+1, end));
  }
  return result;
}

// t = range(1,5)
// console.log(t)

Array.prototype.sum = function () {
  let result = 0;

  if (this.length === 0) {
    return 0;
  } else if (this.length === 1) {
    return this[0]
  }

  result += this[0] + this.slice(1, this.length).sum();
  return result;
}

// t = [1, 2, 3, 4, 5];
// tSum = t.sum();
// console.log(tSum);

function exp1(b, n) {
  if (n === 0) {
    return 1;
  } else {
    return b * exp1(b, n-1);
  }
}

// console.log(exp1(2, 5));


function exp2(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  } else if ( n % 2 === 0) {
    let squareMe = exp2(b, n/2);
    return squareMe * squareMe;
  } else if ( n % 2 === 1) {
    let squareMe = exp2(b, (n-1)/2);
    return b * squareMe * squareMe;
  }
}

// console.log(exp2(2, 256));

function fibonacci(n) {
  if (n ===0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2){
    return [1,1];
  } else {
    let fib = fibonacci(n-1);
    fib = fib.concat(fib[fib.length-2] + fib[fib.length-1]);
    return fib;
  }
}

// console.log(fibonacci(6));

function bsearch (arr, target) {
  let middle = Math.floor(arr.length / 2);
  if ((arr.length === 1) && (arr[0] !== target)){
    return NaN
  } else if (arr[middle] === target) {
    return middle
  } else if (arr[middle] > target ) {
    return bsearch(arr.slice(0, middle), target);
  } else if (arr[middle] < target) {
    return middle + 1 + bsearch(arr.slice(middle + 1, arr.length), target);
  }
}

// console.log(bsearch([2, 6, 11, 13, 17, 24, 35], 24));

function mergeSort (arr) {
  let middle = Math.floor(arr.length / 2);
  if (arr.length === 1) {
    return arr;
  }
  if (arr.length === 0) {
    return arr;
  }
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle, arr.length));
  return merge(left, right)
}

function merge (arr1, arr2) {
  let result = []

  while ((arr1.length !== 0) && (arr2.length !== 0)) {
    if (arr1[0] > arr2[0]) {
      result.push(arr2.shift());
    } else {
      result.push(arr1.shift());
    }
  }
  result = result.concat(arr1);
  result = result.concat(arr2);
  return result
}

// console.log(mergeSort([2, 1, 24, 0, 6, 17, 12]));

function subsets(arr) {
  if (arr.length === 0) {
    return [arr];
  }
  let subs = [];
  arr.forEach( (el) => {
    debugger
    subs = subsets(arr.slice(0, arr.length-1));
    let new_subs = [];
    subs.forEach ((sub) => {
      new_sub = sub.slice(0, sub.length)
      new_sub.push(el);
      new_subs.push(new_sub);
    })
    subs = subs.concat(new_subs);
  })
  return subs;
}

// console.log(subsets([1, 2, 3]))
