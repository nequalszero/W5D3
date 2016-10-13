Array.prototype.myUniq = function () {
  let result = [];
  this.forEach((el) => {
    if (!result.includes(el)){
      result.push(el);
    }
  })
  return result
}

// console.log([1, 2, 1, 3, 3].myUniq());

Array.prototype.twoSum = function() {
  let result = [];
  for( i = 0; i < this.length - 1; i++ ){
    for( j = i + 1; j < this.length; j++ ){
      if (this[i] + this[j] === 0){ result.push([i,j]) }
    }
  }
  return result;
}

// console.log([1, 2, 0, 3, -3].twoSum());

Array.prototype.myTranspose = function() {
  let result = [];
  const width = this[0].length
  const height = this.length

  for ( i = 0; i < width; i++) {
    let column = [];
    for (j = 0; j < height; j++) {
      column.push( this[j][i] );
    }
    result.push(column)
  }
  return result
}

// console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]].myTranspose());
