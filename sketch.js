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
  //background(111);
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
  //print(celdaSeleccionada);
    
    for(let x = 0; x < RETICULA; x++){
      for(let y = 0; y < RETICULA; y++){
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if(celdaActual.colapsada){
         const indiceDeAzulejo = celdaActual.opciones[0];
         const reglasActuales = reglas[indiceDeAzulejo];
         // print(reglasActuales);
          image (
          azulejos[indiceDeAzulejo],
           x * ancho,
           y * alto,
           ancho,
           alto
           );
//Monitorear UP
          if (y > 0 ){
            const indiceUP = x + (y-1) * RETICULA ; 
            const celdaUP = celdas[indiceUP];
            if(!celdaUP.colapsada){
              const nuevasOpciones = []
              for(let i= 0 ; i < celdaUP.opciones.length; i++){
                if(
                  reglasActuales['UP']= 
                  reglas[celdaUP.opciones[i]]['DOWN']
                  ) {
                                

                const celdaCompatible = celdaUP.opciones[i]
                nuevasOpciones.push(celdaCompatible);
                  }
                celdaUP.opciones = nuevasOpciones;
                print(nuevasOpciones);
            
            }
            
            }
          }
//Monitorear Right
          if( x < RETICULA - 1 ){
            const indiceRIGHT= x + 1 + y * RETICULA ;
            const celdaRIGHT = celdas[indiceRIGHT];
            if(!celdaRIGHT.colapsada){

            }
          }
//Monitorear Down
          if ( y < RETICULA - 1){
            const indiceDOWN= x + (y + 1) * RETICULA ;
            const celdaDOWN = celdas[indiceDOWN];
            if(!celdaDOWN.colapsada){

            }

          }
//Monitorear Left
          if ( x > 0){
            const indiceLEFT= x - 1 + y * RETICULA ;
            const celdaLEFT = celdas[indiceLEFT];
            if(!celdaLEFT.colapsada){

            }
          } else{
            strokeWeight(6);
            rect(x * ancho, y * alto, ancho, alto);
            }
          }
        }
      }
      noLoop();
    }
  }