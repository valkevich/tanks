import { Tank } from "./Tank.js";
import { Bullet } from "../bullet/Bullet.js";

export class PlayerTank extends Tank {
    constructor(gameObject, tankType) {
        super(gameObject, tankType)
    }

    playerMove() {
        document.addEventListener('keydown', (e) => {
            if (e.code == 'ArrowUp') {
                if (e.repeat) {
                  return false
                } else {
                    this.moveUp() 
                }

            }
            if (e.code == 'ArrowRight') {
                if (e.repeat) {
                    return false;
                }else {
                    this.moveRight()
                }
            }
            if (e.code == 'ArrowLeft') {
                if (e.repeat) {
                    return false;
                } else {
                    this.moveLeft()
                }
            }
            if (e.code == 'ArrowDown') {
                if (e.repeat) {
                    return false;
                } else {
                    this.moveDown()
                }
            }
            if (e.code == 'Space') {
                if (e.repeat) {
                  return false
                } else {
                    new Bullet(this.gameObject, this.gameObject).moveStraight()
                }

            }
        })
    }
}