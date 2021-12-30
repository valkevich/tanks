import { GameObject } from '../game-object/GameObject.js';
import { map } from '../map/map.js';

export class Bullet extends GameObject {
    constructor(gameObject) {
        super(gameObject)
        this.htmlMap = document.querySelector('#game-map')
        this.bullet = this.createBullet()
    }

    createBullet() {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        
        if (this.findTankDirection() === 'up') {
            bullet.style.top = this.gameObject.style.top
            bullet.style.left = `${parseInt(this.gameObject.style.left) + 26}px`
        }
        if (this.findTankDirection() === 'down') {
            bullet.style.top = `${parseInt(this.gameObject.style.top) + 64}px`
            bullet.style.left = `${parseInt(this.gameObject.style.left) + 26}px`
        }
        if (this.findTankDirection() === 'left') {
            bullet.style.top = `${parseInt(this.gameObject.style.top) + 26}px`
            bullet.style.left = this.gameObject.style.left;
        }
        if (this.findTankDirection() === 'right') {
            bullet.style.top = `${parseInt(this.gameObject.style.top) + 26}px`
            bullet.style.left = `${parseInt(this.gameObject.style.left) + 64}px`
        }
        this.htmlMap.append(bullet)
        return bullet;
    }

    findMapEnds(bullet) {
        const bulletLeftPosition = parseInt(bullet.style.left)
        const bulletTopPosition = parseInt(bullet.style.top)
        if (bulletLeftPosition <= -100 || bulletLeftPosition >= 1000 || bulletTopPosition < -200  || bulletTopPosition >= 1000)  {
            return false
        } else {
            return true
        }
    }

    // moveStraight() {
    //     const nextStepPosition = this.findTankNextStepPosition(64)
    //     const bulletSteps = setInterval(() => {
    //         if (this.findMapEnds(this.bullet)) {
    //             this.bullet.style.top = `${parseInt(this.bullet.style.top) + nextStepPosition.top}px`
    //             this.bullet.style.left = `${parseInt(this.bullet.style.left) + nextStepPosition.left}px`
    //         } else {
    //             this.bullet.remove()
    //             clearInterval(bulletSteps)
    //         }
    //     }, 500);
    // }

    moveStraight() {
        const nextStepPosition = this.findTankNextStepPosition(3)
        const moveBullet = (timestamp) => {
            if(this.findMapEnds(this.bullet)) {
                this.bullet.style.top = `${parseInt(this.bullet.style.top) + nextStepPosition.top}px`
                this.bullet.style.left = `${parseInt(this.bullet.style.left) + nextStepPosition.left}px`
                requestAnimationFrame(moveBullet)
            }else {
                this.bullet.remove()
                console.log('ubilo');
            }    
        }
        moveBullet()
        
    }
    

    

    // createBullet() {
    //     const bullet = document.createElement('div');
    //     bullet.classList.add('bullet');
    //     bullet.style.top = this.tank.style.top;
    //     bullet.style.left = this.tank.style.left;
    //     return bullet;
    // }

    // findTankDirection() {
    //     switch (this.tank.style.transform) {
    //         case 'rotate(180deg)':
    //             return 'down';

    //         case 'rotate(90deg)':
    //             return 'right';

    //         case 'rotate(-90deg)':
    //             return 'left';

    //         default:
    //             return 'up';
    //     }
    // }

    // findTankNextStepPosition() {
    //     const tankDirection = this.findTankDirection();
    //     switch (tankDirection) {
    //         case 'down':
    //             return { left: 0, top: 100 };

    //         case 'right':
    //             return { left: 100, top: 0 };

    //         case 'left':
    //             return { left: -100, top: 0 };

    //         default:
    //             return { left: 0, top: -100 };
    //     }

    // }
    // findTankNextStepPosition(PixelsCount) {
    //     const tankDirection = this.findTankDirection();
    //     switch (tankDirection) {
    //         case 'down':
    //             return { left: 0, top: PixelsCount };

    //         case 'right':
    //             return { left: PixelsCount, top: 0 };

    //         case 'left':
    //             return { left: - PixelsCount, top: 0 };

    //         default:
    //             return { left: 0, top: - PixelsCount };
    //     }
    // }

    // attachTankBullet(tank) {
    //     const bullet = this.createBullet()

        // if (this.findTankDirection() === 'up') {
        //     bullet.style.top = tank.style.top
        //     bullet.style.left = `${parseInt(tank.style.left) + 26}px`
    //         this.htmlMap.append(bullet)
    // const bulletSteps = setInterval(() => {
    //     bullet.style.top = `${parseInt(bullet.style.top) - 10}px`
    //     bullet.style.left = bullet.style.left
    //     if (!(this.findMapEnds(bullet))) {
    //         bullet.remove()
    //         clearInterval(bulletSteps)
    //     }
    // }, 0);

    //     }
        // if (this.findTankDirection() === 'down') {
        //     bullet.style.top = `${parseInt(tank.style.top) + 64}px`
        //     bullet.style.left = `${parseInt(tank.style.left) + 26}px`
    //         this.htmlMap.append(bullet)
    //         const bulletSteps = setInterval(() => {
    //             bullet.style.top = `${parseInt(bullet.style.top) + 10}px`
    //             bullet.style.left = bullet.style.left
    //             if (!(this.findMapEnds(bullet))) {
    //                 bullet.remove()
    //                 clearInterval(bulletSteps)
    //             }
    //         }, 0);

    //     }
        // if (this.findTankDirection() === 'left') {
        //     bullet.style.top = `${parseInt(tank.style.top) + 26}px`
        //     bullet.style.left = tank.style.left;
    //         this.htmlMap.append(bullet)
    //         const bulletSteps = setInterval(() => {
    //             bullet.style.top = bullet.style.top
    //             bullet.style.left = `${parseInt(bullet.style.left) - 10}px`
    //             if (!(this.findMapEnds(bullet))) {
    //                 bullet.remove()
    //                 clearInterval(bulletSteps)
    //             }
    //         }, 0);
    //     }

        // if (this.findTankDirection() === 'right') {
        //     bullet.style.top = `${parseInt(tank.style.top) + 26}px`
        //     bullet.style.left = `${parseInt(tank.style.left) + 64}px`
    //         this.htmlMap.append(bullet)
    //         const bulletSteps = setInterval(() => {
    //             bullet.style.top = bullet.style.top
    //             bullet.style.left = `${parseInt(bullet.style.left) + 10}px`
    //             if (!(this.findMapEnds(bullet))) {
    //                 clearInterval(bulletSteps)
    //                 bullet.remove()
    //             }
    //         }, 0);
    //     }
    // }

}
