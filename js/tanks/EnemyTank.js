import { Tank } from './Tank.js'

export class EnemyTank extends Tank {
    constructor(gameObject, tankType) {
        super(gameObject, tankType)
    }

    changeDirection() {
        const tankAllRoutes = [this.moveUp.bind(this), this.moveDown.bind(this), this.moveLeft.bind(this), this.moveRight.bind(this)];
        const randomIndex = Math.floor((Math.random() * tankAllRoutes.length));
        tankAllRoutes[randomIndex]()
    }

    moveRandomly() {
        if (this.findMapEnds()) {
            this.moveStraight()
        } else {
            this.changeDirection()
        }
    }
}
