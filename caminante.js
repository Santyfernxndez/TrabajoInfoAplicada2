

let cPosX;
let cPosY;

class Caminante {



    constructor() {


        this.x = 200;
        this.y = 200;
        this.t = 12;
        this.vel = 5;

        push();
        pop();



    }




    dibujar() {

        push();
        
        

        cPosX = this.x;
        cPosY = this.y;

        pop();
    }

    mover() {



        //movimiento con coordenadas polares
        this.dir = radians(30);

        let dx = this.vel * cos(this.dir);
        let dy = this.vel * sin(this.dir);



        ////////////////////////////////////////

        if (key == 'd' || keyPressed == true) {
            this.vel = 20;
            this.dir = radians(0);

            let dx = this.vel * cos(this.dir);

            this.x += dx;


        } else if (key == 's' || keyPressed == true) {
            this.vel = 20;
            this.dir = radians(0);

            let dy = this.vel * cos(this.dir);

            this.y += dy;


        } else if (key == 'a' || keyPressed == true) {
            this.vel = -20;
            this.dir = radians(0);

            let dx = this.vel * cos(this.dir);

            this.x += dx;


        } else if (key == 'w' || keyPressed == true) {
            this.vel = -20;
            this.dir = radians(0);

            let dy = this.vel * cos(this.dir);

            this.y += dy;

        }
    }
}

