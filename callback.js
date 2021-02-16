function Saluda(saludo, callback) {
  console.log(saludo);
  callback([1,23,4]);
}

Saluda("Hola", function (array) {
  array.forEach(function(e) {
    
  });
});
