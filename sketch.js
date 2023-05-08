

let pinceladas = [];
let cantidad = 6;
let miPaleta1;
let miPaleta2;
let miPaleta3;
let miPaleta4;



function preload() {
 
  miPaleta1 = new Paleta( "data/forma1.png" );
  miPaleta2 = new Paleta( "data/forma2.png" );
  miPaleta3 = new Paleta( "data/forma3.png" );
  miPaleta4 = new Paleta( "data/forma4.png" );

  for (let i = 0; i < cantidad; i++) {

    let nombre = "data/" + i + ".png";
    pinceladas[i] = loadImage( nombre );

  }

}

function setup() {
  createCanvas(400, 400);
  background(243, 226, 200);
  frameRate(10);
  imageMode( CENTER );

}

function draw() {

  for( let i=0 ; i<1 ; i++) {

    let x = random( width );
    let y = random( height );
  
    if( red(random()) < 100 ){
      let cual = int( random(cantidad));
      let tamanio = random( 0.5 , 1.5 );
    
      let esteColor1 =  miPaleta1.darColor();
      let esteColor2 =  miPaleta2.darColor();
      let esteColor3 =  miPaleta3.darColor();
      let esteColor4 =  miPaleta4.darColor();



      // controles para cambio de color.


      tint( red(esteColor1) , green(esteColor1) , blue(esteColor1) , 500 );

      if (key == 'q' || keyPressed == true) {

        tint( red(esteColor1) , green(esteColor1) , blue(esteColor1) , 500 );
    
      } else if (key == 'w' || keyPressed == true) {

        tint( red(esteColor2) , green(esteColor2) , blue(esteColor2) , 500 );

      }else if (key == 'e' || keyPressed == true) {

        tint( red(esteColor3) , green(esteColor3) , blue(esteColor3) , 500 );

      }else if (key == 'r' || keyPressed == true) {

        tint( red(esteColor4) , green(esteColor4) , blue(esteColor4) , 500 );

      }

      push();
      translate( x, y );
      scale( tamanio );
      rotate(random(0,180));
      image( pinceladas[cual] , 0 , 0 );  
      pop();

    }



  }

}


function keyPressed() {

  // controles para pausa, borrar o reproduccion.

  if (key == 'd' || keyPressed == true) {

    loop();

  } else if (key == 'a' || keyPressed == true) {

    noLoop();

  } else if(key == 's' || keyPressed == true) {

    background(243, 226, 200);

  }


  


}


