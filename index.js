/*

       QUIZ 
       
       Programacion de Dispositivos Moviles

       Universidad Rafael Urdaneta - 2022C

       Jairo Perez C.I.28.336.214


            En este quiz se requirio que se desarrollara un algoritmo
            para leer una matriz recorriendo los elementos de la matriz
            en el sentido de las agujas del reloj (patron de caracol).

*/

//Esta matriz puede ser cambiada por cualquier otra matriz
const matriz = [

  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]

];

//Esta porcion de codigo sera el algoritmo como tal
const caracol = (array) => {

  //se declara la variable que sera el arreglo final
  let final = [];

  /*  
      Usamos un ciclo while que no se detendra hasta que 
      se recorran todos los numeros de la matriz, primero
      obtenemos el primer arreglo dentro del arreglo de
      arreglos, luego con el metodo map() para obtener el
      ultimo numero de cada arreglo, y se van pusheando
      al arreglo final, luego vamos a reversar toda la
      matriz y cada elemeto dentro de ella, con esto el
      ciclo continua y vamos obteniendo todos los numeros
      en orden de caracol.
  */
  while (array.length) {
    final.push(...array.shift());
    array.map(x => final.push(x.pop()))
    array.reverse().map(x => x.reverse());
  }

  //Por ultimo retornamos el arreglo final
  return final
}

//Mostrando por consola
console.log('\n\n\nLa matriz dada inicialmente es la siguiente: \n')
console.log(matriz)
console.log('\nLa matriz recorrida en forma de caracol tiene el siguiente RESULTADO: [' + caracol(matriz) + '] \n\n\n')