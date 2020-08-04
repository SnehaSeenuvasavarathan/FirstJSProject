function sum(...args){
console.log(args);
console.log(args.reduce((a,b)=>a+b));
}

sum([1,2,3,4,5]);