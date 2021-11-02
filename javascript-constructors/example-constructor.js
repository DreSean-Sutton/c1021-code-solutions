function ExampleConstructor() {
}
console.log('prototype of function:', ExampleConstructor.prototype);
console.log('typeof prototype of function:', typeof ExampleConstructor.prototype);

var newFunction = new ExampleConstructor();
console.log('newFunction value:', newFunction);
console.log('typeof newFunction value:', typeof newFunction);

var checkFunction = newFunction instanceof ExampleConstructor;
console.log('checkFunctionValue', checkFunction);
