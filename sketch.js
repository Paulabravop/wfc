const celdas = [];  
const RETICULA= 4;

const azulejos =[];
const NA = 12; //numero de azulejos

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
  for(let i =0; i < NA; i++){
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);


  let opcionesI = []
  for(let i = 0 ; i > azulejos.length; i++ ){
    opcionesI.push(i);
  }
  for(let i=0; i < RETICULA * RETICULA; i++){
    celdas[i]= {
      colapsada: false,
      opciones: opcionesI 
    }
    print(celdas);
  }
}

function draw() {
  circle(mouseX, mouseY, 20);
}
