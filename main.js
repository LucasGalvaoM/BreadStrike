/*

// TO-DO

1- create player class - L X
2- create level - A (bomb location included) X
3- create objects {
    - guns (pistol, ar)
    - enemy
    - bush
    - bomb
    - door
    - block
    - wall
} - L
4- create camera - A X
5- gun - L
6- health bar - A
7- colision - L
8-
*/

const dV = {
    mapW: 16,
    mapH: 9,
    hb
}

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

// set canvas' size to window's size

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

class Game {
    start() {
        // player stuff
        player.addKeyDownEventHandler();
        player.addKeyUpEventHandler() 
    }
}

const game = new Game();

class Knife {
    constructor() {
        
    }
}

class Gun {
    constructor() {

    }
}

class Player {
    constructor(x, y, radius, color, speed, health, weapons, camera) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this._maxHealth = health;
        this.health = health;
        this.weapons = weapons;
        this.camera = camera;

        // SET CURRENT WEAPON

        this.currentWeapon = {};

        this.isMoving = {
            up: false,
            right: false,
            down: false,
            left: false
        }
    }

    get maxHealth() {
        return this._maxHealth;
    }

    draw() {
        c.translate(
            -this.x + canvas.width/2, 
            -this.y + canvas.height/2
        );
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fill();

        c.fillStyle = 'black';
        c.fillRect(x, y, width, height);
    }
    update() {
        this.walk();

        this.draw();
    }
    walk() {
        if(this.isMoving.up) {
            this.y -= this.speed;
        }
        else if(this.isMoving.down) {
            this.y += this.speed;
        }

        if(this.isMoving.right) {
            this.x += this.speed;
        }
        else if(this.isMoving.left) {
            this.x -= this.speed;
        }
    }
    attack() {
        if(this.currentWeapon.name === 'knife') {
            
        }
    }
    addKeyDownEventHandler() {
        addEventListener('keydown', e => {
            if(e.key === 'w') {
                this.isMoving.up = true;
            }
            else if(e.key === 's') {
                this.isMoving.down = true;
            }

            if(e.key === 'd') {
                this.isMoving.right = true;
            }
            else if(e.key === 'a') {
                this.isMoving.left = true;
            }
        })
    }
    addKeyUpEventHandler() {
        addEventListener('keyup', e => {
            if(e.key === 'w') {
                this.isMoving.up = false;
            }
            if(e.key === 's') {
                this.isMoving.down = false;
            }

            if(e.key === 'd') {
                this.isMoving.right = false;
            }
            if(e.key === 'a') {
                this.isMoving.left = false;
            }
        })
    }
}

const player = new Player(50, 50, 100, 'red', 5, 50, {}, {});

class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = 'grey';
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Level {
    constructor(id) {
        this.id = id;
        this.width = dV.mapW * canvas.width;
        this.height = dV.mapH * canvas.height;
    }

    spawn() {
        for(let y = 0; x < this.id.length; y++) {
            for(let x = 0; y < this.id[y].length; x++) {
                switch(this.id[y][x]) {
                    case '#': //Wall
                        objects.walls.push(new Wall(x*this.width/this.id.length, y*this.height/this.id[y].length));
                        break;
                    default: //Air
                        break;
                }
            }
        }
    }
}

const MAP = 
[
    ['@', '@', '@', '@', '@'],
    ['#', '#', '@', '#', '@'],
    ['@', '#', '@', '#', '#'],
    ['@', '@', '@', '@', '@']
];

const objects = {
    walls: [],
}

const level = new Level(MAP);

game.start();

function loop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    c.fillStyle = 'black';
    c.fillRect(300, 300, 300, 300);

    c.setTransform(1, 0, 0, 1, 0, 0);
    
    // call
    requestAnimationFrame(loop);
}

loop()