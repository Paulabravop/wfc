const celdas = [];  
const RETICULA= 4;

const azulejos =[];
const NA = 12; //numero de azulejos

let ancho;  //ancho de celdas
let alto; //altura de celdas


const reglas =[
  //reglas de los bordes de cada azulejo
{
  //Tile0
  UP: 0,
  RIGHT:0,
  DOWN:0,
  LEFT:0,
},
{
  //Tile1
  UP: 1,
  RIGHT:1,
  DOWN:1,
  LEFT:0,
},
{
  //Tile2
  UP: 0,
  RIGHT:1,
  DOWN:1,
  LEFT:1,
},
{
  //Tile3
  UP: 1,
  RIGHT:1,
  DOWN:0,
  LEFT:1,
},
{
  //Tile4
  UP: 1,
  RIGHT:0,
  DOWN:1,
  LEFT:1,
},
{
  //Tile5
  UP: 1,
  RIGHT:0,
  DOWN:0,
  LEFT:1,
},
{
  //Tile6
  UP: 0,
  RIGHT:0,
  DOWN:0,
  LEFT:0,
},
{
  //Tile7
  UP: 1,
  RIGHT:1,
  DOWN:1,
  LEFT:1,
},
{
  //Tile8
  UP: 1,
  RIGHT:0,
  DOWN:1,
  LEFT:0,
},
{
  //Tile9
  UP: 1,
  RIGHT:1,
  DOWN:0,
  LEFT:0,
},
{
  //Tile10
  UP: 0,
  RIGHT:1,
  DOWN:0,
  LEFT:1,
},
{
  //Tile11
  UP: 0,
  RIGHT:1,
  DOWN:1,
  LEFT:1,
},
];
function preload(){
  for(let i = 0; i < NA; i++){
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}
function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  let opcionesI =[]

  for(let i = 0; i < azulejos.length; i++){
    opcionesI.push(i);
  }

  for(let i = 0; i < RETICULA * RETICULA; i ++){
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    }
  }

}
function draw() {
  background(111);
  const celdasDisponibles = celdas.filter((celda) =>{ 
  return celda.colapsada == false; 
  });

  if(celdasDisponibles.length > 0){
    celdasDisponibles.sort((a, b) =>{
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda)=>{
      return (
        celda.opciones.length == celdasDisponibles[0].opciones.length);
    });
    
    
    const celdaSeleccionada = random (celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    
    for(let x = 0; x < RETICULA; x++){
      for(let y = 0; y < RETICULA; y++){
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if(celdaActual.colapsada){
           
          image (azulejos[celdaActual.opciones[0]], x, y);

          }
        }
      }
      noLoop();
    }
  }