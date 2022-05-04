 const persona = {
     'name' : 'Vanesa',
     'novio' : 'ElMati',
     'age' : 28,
     'homebanking': {
         'banco': 'uala'
         },

 }

//  console.log (Object.keys(persona).filter(item => item === 'age'))
//  const myArray = [{nombre : 'Vanesa'},{apellido : 'Vidal'},{edad: 28}]
//  console.log (myArray[1].apellido)

//Metodos de array
// Sort : ordena de  forma ascendente numeros enteros
// Push : es para agregar un elemento a mi array  ej:
// const myArray = [1,2,3,4,5]
// console.log (myArray.push(1))   

// Filter : filta o busca elementos dentro de un arreglo. Devuelve un arreglo
//  const myArray = [{nombre:'vanesa'},{ nombre : 'mati'},{ nombre: 'edi'},{ apellido: 'edi'}, { apellido: 'pepe'}, {nombre:'clau'}]
//  console.log(myArray.filter(item => item.apellido === 'edi'))
// console.log (myArray.filter(item => item.apellido))

// Find : filtra o busca un solo elemnto dentro de un array. y devuelve un objeto

// console.log (myArray.find (item => item.nombre))

// Reverse : Ordena de manera reversa el array
// const myArray = [1,2,3,4,5]
// console.log (myArray.reverse())

// Slice : 
// const myArray = [1,2,3,4,5]
// console.log (myArray.slice(0,2))
//  Map - recorre un array de objetos para manipular data - devuelve un array

const numbers = [1,2,3,4,5,6,]

// const myArray = () => {
    // numbers.map ( item =>{
        // return console.log (item * 2)
    // })
// }
// myArray()

// const mapeodeNum = () =>{
// numbers.map (item =>{
    // return console.log (item /2)
// })
// }
// mapeodeNum()
// const numeros = [10,20,30,40]
// const unirNum = () => {

    //Manera 1
    // console.log (numbers.concat(numeros))

    //Manera 2
    // const unirconcst = numbers.concat(numeros)
    // console.log (unirconcst)
    
// }
// unirNum()

// const pepito = () =>{
// return 29 + 40
// }

//const a = pepito()
//console.log(a)

//  console.log(pepito())

// Metodos de strings

const nucba = 'Nucba'
// console.log (nucba[0]) 
// console.log (nucba.length > 3)
// console.log(nucba.substring(2,4))
const estudiar = 'Vanesita estudia para conseguir trabajo'
// console.log (estudiar.split (' '))

// ejercicio mueve el roboot

const robot = (mover) =>{
    let valorinicialY = 0
    let valorinicialX = 0 
    
    for (let i = 0 ; i < mover.length ; i ++) {
        if(mover[i]=== 'U'){
            valorinicialX = valorinicialX +1;
        }else if (mover[i]==='D'){
            valorinicialX = valorinicialX -1;
        }else if(mover[i]=== 'R'){
            valorinicialY = valorinicialY +1;
        }else if (mover[i]=== 'L'){
            valorinicialY = valorinicialY -1;
        }else {console.log ('Datos incorrectos')
    }
    }
    return valorinicialX === 0 && valorinicialY === 0
}
console.log (robot(`UUDDRRLL`))