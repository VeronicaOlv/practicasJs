function myPromise(flag) {
    return new Promise((resolve, reject) => {
      if (flag == 1 || flag == 2) return resolve(true);
      else return reject(false);
    });
  }

  console.log(
  myPromise(1)
    .then((res) => {
      console.log("El resultaod de la promesa es:" + res);
    })
    .catch((error) => {
      console.log("El error fue:" + error);
    })
);

console.log('Soy otra linea')