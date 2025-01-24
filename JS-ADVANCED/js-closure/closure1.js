// A simple example of Closure
(function () {
  let num1 = 1;
  let num2 = 2;
  var sum = function () {
    return num1 + num2;
  };

  console.dir(sum);
})();
