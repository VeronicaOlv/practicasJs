
//Async / await
async function myPromise(flag) {
  try {
    let res = await myPromiseDos(2);
    let res2 = await myPromiseDos(2);
    let res3 = await myPromiseDos(2);
    let res4 = await myPromiseDos(2);
    let res5 = await myPromiseDos(2);
    console.log(res);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
  } catch (err) {
    return err;
  }
}

function myPromiseDos(flag) {
  return new Promise((resolve, reject) => {
    if (flag == 1 || flag == 2) return resolve(true);
    else return reject(false);
  });
}

console.log(myPromise(1));
