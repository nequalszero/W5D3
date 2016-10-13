Array.prototype.myEach = function (cb) {
  for( i = 0; i < this.length; i++ ){
    cb(this[i]);
  }
};

function callback(el){
  console.log( el*2 );
};

// [1,2,3].myEach( callback );

Array.prototype.myMap = function (cb) {
  let result = [];
  debugger
  this.myEach((el) => {
    result.push(cb(el))
  })
  return result;
};

function callback2(el){
  return el * 2;
};

// let result = [1,2,3];
// let result2 = result.myMap( callback2 );
// console.log(result2);

Array.prototype.myInject = function (cb, accum = false) {
  let startIndex = 0;
  if (accum === false) {
    accum = this[0];
    startIndex = 1;
  }

  if (this.length === 0) {
    return accum;
  } else {
    this.slice(startIndex, this.length).myEach((el) => {
      accum = cb(accum, el);
    })
  }
  return accum;
};

function callback3(accum, el){
  accum *= el;
  return accum;
};

let arr = [2, 2, 3, 4];
console.log(arr.myInject(callback3));
