//EJERCICIOS DE REDUCE -- SABADO
//Reduce sin valor inicial 
const array1= [1,2,3,4];

array1.reduce((prevValue,currentValue)=>{
    console.log('Valor previo',prevValue)
    console.log('Valor actual', currentValue)

})

//Reduce retornando el PREVIOUS VALUE
const array2=[1,2,3,4];

let r= array2.reduce((preVal,currVal)=>{
    return preVal;
});

console.log(r);

//Reduce sumando los valores del arreglo
const array3=[1,2,3,4];

let r2= array3.reduce((preVal1,currVal2)=>{
    let s=preVal1+currVal2;
    return s;
})
console.log(r2);

//Reduce inicializando el valor del previous
const array4=[1,2,3,4];

let r3=array4.reduce((pre,curr)=>
{
    let s2=pre+curr;
    return s2;  
},10)

console.log(r3);

//Reduce que retorna un arreglo de los nùmeros al cuadrado
const array5=[1,2,3,4];

let r4=array5.reduce((p,c)=>{
    p.push(c*c);
    return p;

},[])
console.log(r4);

//Reduce que retorna un objeto
const array6=[1,2,3,4];

let r5=array6.reduce((pr,cu)=>{
    pr[cu]= cu*cu;
    return pr;
}, {})
console.log(r5);
