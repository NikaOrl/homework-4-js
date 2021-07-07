//1
function largest() {
  let max = Number(arguments[0]);
  for (let i in arguments)
    if(!isNaN(Number(arguments[i])) && (arguments[i] > max || isNaN(Number(max))))
       max = arguments[i];
  return max;
}

function smallest() {
  let min = Number(arguments[0]);
  for (let i in arguments)
    if(!isNaN(Number(arguments[i])) && (arguments[i] < min || isNaN(Number(min))))
       min = arguments[i];
  return min;
}

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

//2
function transform(baseArray) {
  if (Array.isArray(baseArray)) {
    return baseArray.map(elem =>
        function() {
          return elem;
        }
    );
  }
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50

//3
function sum() {
  function recSum(args, i) {
    if (i < args.length) {
      return args[i] + recSum(args, i + 1);
    }
    return 0;
  }
  return recSum(arguments, 0);
};

console.log(sum(1,3,5,7)); //should return 16

//4
function countDown(num) {
  for (let i = 0; i <= num; i++)
    setTimeout(function() { 
      console.log(i); 
    }, (num - i) * 1000);
}

countDown(3); // 3 2 1 0

//5
Function.prototype.myBind = function() {
  let fun = this;
  let context = arguments[0];
  let args = Array.prototype.slice.call(arguments, 1);
    
  return function() {
    return fun.apply(context, args.concat(Array.prototype.slice.call(arguments)))
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}

const bound = addPropToNumber.myBind({ prop: 9 });

console.log(bound(1)); //10
