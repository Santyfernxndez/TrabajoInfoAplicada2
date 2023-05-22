
let pinceladas = [];
let cantidad = 6;
let miPaleta1;
let miPaleta2;
let miPaleta3;
let miPaleta4;

let colorTrazo = 0;
let escalaTrazo;

let rgbAlpha = 200;


// Carga trazos e familia de imagenes

function preload() {

  miPaleta1 = new Paleta("data/forma1.png");
  miPaleta2 = new Paleta("data/forma2.png");
  miPaleta3 = new Paleta("data/forma3.png");
  miPaleta4 = new Paleta("data/forma4.png");

  for (let i = 0; i < cantidad; i++) {

    let nombre = "data/" + i + ".png";
    pinceladas[i] = loadImage(nombre);

  }

}


function setup() {
  createCanvas(400, 400);
  background(243, 226, 200);
  imageMode(CENTER);
  frameRate(10);

  c = new Caminante();

}


function draw() {



  c.mover();
  c.dibujar();




  for (let i = 0; i < 1; i++) {

    console.log(cPosX);
    console.log(cPosY);

    if (red(random()) < 100) {
      let cual = int(random(cantidad));


      let esteColor1 = miPaleta1.darColor();
      let esteColor2 = miPaleta2.darColor();
      let esteColor3 = miPaleta3.darColor();
      let esteColor4 = miPaleta4.darColor();

      // controles para cambio de color.

      if (key == '1' || keyPressed == true) {

        colorTrazo = 1;

      } else if (key == '2' || keyPressed == true) {

        colorTrazo = 2;

      } else if (key == '3' || keyPressed == true) {

        colorTrazo = 3;

      } else if (key == '4' || keyPressed == true) {

        colorTrazo = 4;

      } else if (key == 'r' || keyPressed == true) {

        colorTrazo == 0
        background(243, 226, 200);
        scale(0);

      } else if (key == 'c' || keyPressed == true) {

        scale(0);
      }



      1



      if (colorTrazo == 0) {

        background(243, 226, 200);
        escalaTrazo = scale(0);

      }

      if (colorTrazo == 1) {

        tint(red(esteColor1), green(esteColor1), blue(esteColor1), rgbAlpha);
        frameRate(10);
        escalaTrazo = scale(1, 3);

        if (key == 'z' || keyPressed == true) {

          rgbAlpha = rgbAlpha - 50;

        } else if (key == 'x' || keyPressed == true) {

          rgbAlpha = rgbAlpha + 50;

        }

        translate(0, -100);

      }



      if (colorTrazo == 2) {

        tint(red(esteColor2), green(esteColor2), blue(esteColor2), rgbAlpha);

        escalaTrazo = scale(random(1, 2), random(1, 2));

        if (key == 'z' || keyPressed == true) {

          rgbAlpha = rgbAlpha - 50;

        } else if (key == 'x' || keyPressed == true) {

          rgbAlpha = rgbAlpha + 50;

        }

        translate(-100, -100);

      }



      if (colorTrazo == 3) {

        tint(red(esteColor3), green(esteColor3), blue(esteColor3), rgbAlpha);
        escalaTrazo = scale(1.5, 1.5);

        if (key == 'z' || keyPressed == true) {

          rgbAlpha = rgbAlpha - 50;

        } else if (key == 'x' || keyPressed == true) {

          rgbAlpha = rgbAlpha + 50;

        }

        frameRate(10);
      }



      if (colorTrazo == 4) {

        tint(red(esteColor4), green(esteColor4), blue(esteColor4), rgbAlpha);
        escalaTrazo = scale(1.5, 1.5);

        if (key == 'z' || keyPressed == true) {

          rgbAlpha = rgbAlpha - 50;

        } else if (key == 'x' || keyPressed == true) {

          rgbAlpha = rgbAlpha + 50;

        }
        frameRate(10);

      }

      push();
      image(pinceladas[cual], cPosX, cPosY);
      translate(cPosX, cPosY);
      pop();

    }



  }

}


function keyPressed() {



}


