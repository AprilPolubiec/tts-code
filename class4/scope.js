function outer() {
  var a = "I'm a";
  var b = { im: 'b' };
  console.log('1: ', a);
  console.log('1: ',b);

  function inner(a, b){
    var a = "I'm a new a";
    var b = { b: "a new one I am" };
    console.log('2: ', a);
    console.log('2: ', b);
  }
  console.log('3: ', a);
  console.log('3: ', b);
  inner(a, b);
}
outer();