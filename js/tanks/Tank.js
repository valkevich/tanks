import { map } from '../map/map.js'
import { Bullet } from '../bullet/Bullet.js'; 
import { GameObject } from '../game-object/GameObject.js';


export class Tank extends GameObject {
    constructor(gameObject, tankType) {
        super(gameObject)
        this.tankType = tankType;
        this.bullet = null;
    }

    findMapEnds() {
        const nextStepPosition = this.findTankNextStepPosition(64);
        const bulletLeftPosition = parseInt(this.gameObject.style.left) + nextStepPosition.left
        const bulletTopPosition = parseInt(this.gameObject.style.top) + nextStepPosition.top

        if (bulletLeftPosition < 0 || bulletLeftPosition > 768 || bulletTopPosition > 832 || bulletTopPosition < 0) {
            return false
        }
        if(!(map.matrixMap[bulletTopPosition / 64][bulletLeftPosition / 64] === 0)) {
            return false
        }
        return nextStepPosition;

    }

    moveStraight() {
        const nextStepPosition = this.findTankNextStepPosition(64)
        const tankTopPosition = parseInt(this.gameObject.style.top);
        const tankLeftPosition = parseInt(this.gameObject.style.left);   
        if (this.findMapEnds()) {
            map.matrixMap[tankTopPosition / 64][tankLeftPosition / 64] = 0;
            this.gameObject.style.top = `${tankTopPosition + nextStepPosition.top}px`
            this.gameObject.style.left = `${tankLeftPosition + nextStepPosition.left}px`
            map.matrixMap[parseInt(this.gameObject.style.top) / 64][parseInt(this.gameObject.style.left) / 64] = this.tankType
            return true
        } else {
            return false
        }
    }

    moveUp() {
        this.gameObject.style.transform = 'rotate(0)'
        this.moveStraight()
    }

    moveDown() {
        this.gameObject.style.transform = 'rotate(180deg)'
        this.moveStraight()
    }

    moveLeft() {
        this.gameObject.style.transform = 'rotate(-90deg)'
        this.moveStraight()
    }

    moveRight() {
        this.gameObject.style.transform = 'rotate(90deg)'
        this.moveStraight()
    }

    // findTankDirection() {
    //     switch (this.gameObject.style.transform) {
    //         case 'rotate(180deg)':
    //             return 'down';

    //         case 'rotate(90deg)':
    //             return 'right';

    //         case 'rotate(-90deg)':
    //             return 'left';

    //         default:
    //             return 'up';
    //     }l
    // }

    // findTankNextStepPosition() {
    //     const tankDirection = this.findTankDirection();
    //     const tankTopPosition = parseInt(this.gameObject.style.top);
    //     const tankLeftPosition = parseInt(this.gameObject.style.left);
    //     switch (tankDirection) {
    //         case 'down':
    //             return { left: tankLeftPosition, top: tankTopPosition + 64 };

    //         case 'right':
    //             return { left: tankLeftPosition + 64, top: tankTopPosition };

    //         case 'left':
    //             return { left: tankLeftPosition - 64, top: tankTopPosition };

    //         default:
    //             return { left: tankLeftPosition, top: tankTopPosition - 64 };
    //     }

    // }

   

}
