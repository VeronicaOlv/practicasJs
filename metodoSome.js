//Método SOME regresa  un true o false de acuerso a una regla/condición validada en un arreglo.
//solo aplica para arreglos

//Predicado desde el callback
let arr = [11, 22, 59, 79];

let menores = arr.some((e) => e > 18);
console.log(menores);

//Predicado como funciòn

function mayorEdad(edad) {
  return edad > 18;
}

let menores2 = arr.some((e) => mayorEdad(e));
console.log(menores2);
