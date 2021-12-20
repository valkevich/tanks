import { ROUTES } from "../constans/constans.js"

export class MotionService {
    falseMotion(tank) {
        let bumping = true
        let tankResTop = parseInt(tank.style.top) // до верхней 
        let tankResLeft = parseInt(tank.style.left) // до левой
        if (tankResTop === 0) {
            bumping = false
        }
        if (tankResTop === 896) {
            bumping = false
        }
        if (tankResLeft === 0) {
            bumping = false
        }
        if (tankResLeft === 896) {
            bumping = false
        }
        return bumping
    }

    changeStorona(tank) {
        const r = Math.floor((Math.random() * ROUTES.length));
        tank.style.transform = `rotate(${ROUTES[r]})`;
    }

    moveStraight(tank) {
        const pos = this.findTankMuzzle(tank)
        tank.style.top = `${parseInt(tank.style.top) + pos.top}px`
        tank.style.left = `${parseInt(tank.style.left) + pos.left}px`
    }

    findTankMuzzle(tank) {
        if (tank.style.transform === 'rotate(180deg)') {
            return { left: 0, top: 64 }
        }
        if (tank.style.transform === 'rotate(90deg)') {
            return { left: 64, top: 0 }
        }
        if (tank.style.transform === 'rotate(-90deg)') {
            return { left: -64, top: 0 }
        }
        if (tank.style.transform === 'rotate(0deg)' || tank.style.transform === '') {
            return { left: 0, top: -64 }
        }
    }


    // bumpEdgeMap(){

    // }
}

export const motionService = new MotionService()